const express = require('express');
const { spawn } = require('child_process');
const WebSocket = require('ws');
const app = express();
const port = 3000;

app.use(express.json());

const wss = new WebSocket.Server({ noServer: true });

let connections = 0;
const maxConnections = 300; // 設定最大連線數量
const timeout = 28800000; // 設定超時時間為 8 小時
const memoryLimit = 150000; // 設定虛擬記憶體限制

wss.on('connection', (ws) => {
    if (connections >= maxConnections) {
        ws.send('Too many connections. Please try again later.\n');
        ws.close();
        return;
    }

    connections++;

    let interpreter;
    let interpreterRunning = false;
    let currentInterpreterType = null;
    let timeoutId = setTimeout(() => {
        ws.close();
    }, timeout);

    ws.on('message', (message) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            ws.close();
        }, timeout);

        const parsedMessage = JSON.parse(message);
        const { interpreterType, payload } = parsedMessage;

        // 如果接收到不同的 interpreterType，關閉舊的Interpreter並啟動新的解釋器
        if (interpreterRunning && currentInterpreterType !== interpreterType) {
            interpreter.kill();
            interpreterRunning = false;
        }

        if (!interpreterRunning) {
            switch (interpreterType) {
                case 'OurScheme':
                    interpreter = spawn('sh', ['-c', `ulimit -v ${memoryLimit}; ./InterpreterOurScheme`]);
                    break;
                // case 'OurC':  // 未來可以加入OurC語言的解釋器
                //     interpreter = spawn('sh', ['-c', `ulimit -v ${memoryLimit}; ./InterpreterOurC`]);
                //     break;
                default:
                    interpreter = spawn('sh', ['-c', `ulimit -v ${memoryLimit}; ./InterpreterOurScheme`]);
                    break;
                    ws.send('Unknown interpreter type.\n');
                    ws.close();
                    return;
            }

            currentInterpreterType = interpreterType;
            interpreterRunning = true;

            interpreter.stdout.on('data', (data) => {
                ws.send(data.toString());
            });
            
            interpreter.on('close', () => {
                interpreterRunning = false;
                ws.close();
            });

            
        }

        if (ws.readyState === WebSocket.OPEN && interpreterRunning) {
            try {
                interpreter.stdin.write(payload);
            } catch (error) {
                console.error('Failed to write to interpreter:', error);
            }
        }
    });

    ws.on('close', async () => {
        if (interpreter) {
            interpreter.kill();
        }
        connections--;
    });
});

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});