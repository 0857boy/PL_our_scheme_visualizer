const quotes = [
    // 動畫經典名言
    "“我不想只是被拯救，我也想成為能拯救別人的人！” - 愛蜜莉雅（《Re:從零開始的異世界生活》）",
    "“即使是最微小的希望，也可以變成打開未來的大門的鑰匙。” - 露西·哈特菲利亞（《妖精的尾巴》）",
    "“無論什麼時候，都不要忘記仰望星空。” - 艾德華·艾力克（《鋼之鍊金術師》）",
    "“只要不放棄，就還有希望。” - 魯夫（《海賊王》）",
    "“人並非因為生來就完美，而是努力變得更好。” - 銀時（《銀魂》）",
    "“即使眼淚流不出來，也要微笑著面對。” - 小狼（《魔卡少女櫻》）",
    "“只要心還在跳，就有機會改變一切。” - 鳴人（《火影忍者》）",
    "“不管失敗了多少次，我還是會繼續努力。” - 星星公主（《星星公主》）",
    "“沒有理想的人，與死去無異。” - 凱（《火影忍者》）",
    "“不是力量使人偉大，而是智慧與勇氣。” - 雅典娜（《聖鬥士星矢》）",
    "“真正的朋友是會在你最困難時，出現在你身邊的人。” - 佐助（《火影忍者》）",
    "“失敗並不可怕，可怕的是放棄。” - 光頭勇者（《一拳超人》）",
    "“只有知道痛苦的人，才能帶來真正的和平。” - 長門（《火影忍者》）",
    "“如果你不相信自己，那誰會相信你呢？” - 帕特里克（《機動戰士高達SEED》）",
    "“人生是一場旅程，我們每個人都在尋找屬於自己的道路。” - 玲（《CLANNAD》）",
    "“勇氣是讓你邁出第一步的力量。” - 真嗣（《新世紀福音戰士》）",
    "“即使希望渺茫，我也會向前奔跑。” - 小智（《神奇寶貝》）",
    "“人不是因為身處黑暗才會墮落，而是因為選擇了黑暗。” - 阿爾瑪（《Code Geass》）",
    "“每一次跌倒，都是為了下一次站起來。” - 魯路修（《Code Geass》）",
    "“人之所以為人，是因為我們擁有選擇的自由。” - 桐人（《刀劍神域》）",
    "“為了保護重要的人，付出一切也在所不惜。” - 雛田（《火影忍者》）",
    "“記住，最重要的是心靈的力量。” - 美樂蒂（《美樂蒂與黑美樂蒂》）",
    "“強者不是沒有眼淚，而是知道什麼時候流淚。” - 伊麗莎白（《銀魂》）",
    "“不要輕易放棄，即使現在看不到希望。” - 阿姆羅（《機動戰士高達》）",
    "“人生的意義不是結果，而是過程。” - 艾倫（《進擊的巨人》）",
    "“如果不站起來，那麼誰來保護重要的人呢？” - 三笠（《進擊的巨人》）",
    "“每個人都有屬於自己的戰場。” - 蒼星石（《蔷薇少女》）",
    "“不要害怕失敗，因為它是成長的一部分。” - 小當家（《中華一番》）",
    "“人總是在失去之後，才學會珍惜。” - 夏娜（《灼眼的夏娜》）",
    "“夢想並不是用來逃避現實，而是用來改變現實的。” - 索隆（《海賊王》）",
    "“如果你不勇敢，那麼勝利將屬於別人。” - 炎柱煉獄杏壽郎（《鬼滅之刃》）",
    "“重要的不是擁有多少，而是如何珍惜。” - 日暮戈薇（《犬夜叉》）",
    "“只要心中有光明，就不怕黑暗。” - 魔法少女小圓（《魔法少女小圓》）",
    "“這條路很艱難，但我絕不會後退。” - 艾斯（《海賊王》）",
    "“勇敢不是沒有恐懼，而是帶著恐懼前行。” - 雪初音（《Vocaloid》）",
    "“只有經歷過挫折，才知道什麼是真正的成功。” - 八神光（《數碼寶貝》）",
    "“不要因為一點困難就放棄，成功的人都在堅持。” - 阿瑪（《遊戲王》）",
    "“選擇自己相信的道路，即使全世界都反對。” - 黑崎一護（《死神》）",
    "“朋友就是可以依靠的家人。” - 路飛（《海賊王》）",
    "“如果有夢想，就該追逐到底。” - 希洛（《鋼之鍊金術師》）",
    "“真相永遠只有一個！” - 江戶川柯南（《名偵探柯南》）",
    "“一個人最強的力量是為了別人而戰。” - 拉克斯（《機動戰士高達》）",
    "“命運由自己掌握，而非他人。” - 菲特（《魔法少女奈葉》）",
    "“只要還有一絲希望，就該全力以赴。” - 庫洛洛（《獵人》）",
    "“世界很殘酷，但同時也很美麗。” - 艾爾文（《進擊的巨人》）",
    "“夢想並非奢侈品，而是努力的方向。” - 鬼塚英吉（《麻辣教師GTO》）",
    "“我們與未來的距離，只有一個決定的距離。” - 新一（《名偵探柯南》）",
    "“絕對不要放棄，因為希望無處不在。” - 希斯（《神劍闖江湖》）",

    // 中國經典名言
    "“天行健，君子以自強不息。” - 《周易》",
    "“千里之行，始於足下。” - 《老子》",
    "“學而不思則罔，思而不學則殆。” - 孔子（《論語》）",
    "“勿以惡小而為之，勿以善小而不為。” - 劉備（《三國志》）",
    "“己所不欲，勿施於人。” - 孔子（《論語》）",
    "“生於憂患，死於安樂。” - 孟子（《孟子》）",
    "“工欲善其事，必先利其器。” - 孔子（《論語》）",
    "“天下興亡，匹夫有責。” - 顧炎武",
    "“老驥伏櫪，志在千里；烈士暮年，壯心不已。” - 曹操（《龜雖壽》）",
    "“知之者不如好之者，好之者不如樂之者。” - 孔子（《論語》）",
    "“海內存知己，天涯若比鄰。” - 王勃（《送杜少府之任蜀州》）",
    "“靜以修身，儉以養德。” - 諸葛亮（《誡子書》）",
    "“君子坦蕩蕩，小人長戚戚。” - 孔子（《論語》）",
    "“滿招損，謙受益。” - 尚書",
    "“莫愁前路無知己，天下誰人不識君。” - 高適（《別董大》）",
    "“苟日新，日日新，又日新。” - 《大學》",
    "“行百里者半九十。” - 《戰國策》",
    "“大丈夫當以直報怨，以德報德。” - 孔子（《論語》）",
    "“人無遠慮，必有近憂。” - 孔子（《論語》）",
    "“勿臨渴而掘井，宜未雨而綢繆。” - 《宋·朱熹》",
    "“桃李不言，下自成蹊。” - 《史記》",
    "“千里馬常有，而伯樂不常有。” - 韓愈（《雜說》）",
    "“富貴不能淫，貧賤不能移，威武不能屈，此之謂大丈夫。” - 孟子（《孟子》）",
    "“三人行，必有我師焉。” - 孔子（《論語》）",
    "“不積跬步，無以至千里；不積小流，無以成江海。” - 荀子（《勸學》）",
    "“近朱者赤，近墨者黑。” - 傳自《太子少傅箴》",
    "“知足者常樂。” - 老子（《道德經》）",
    "“凡事預則立，不預則廢。” - 孔子（《禮記》）",
    "“千磨萬擊還堅勁，任爾東西南北風。” - 鄭板橋（《竹石》）",
    "“沉舟側畔千帆過，病樹前頭萬木春。” - 劉禹錫（《酬樂天揚州初逢席上見贈》）",
    "“身無彩鳳雙飛翼，心有靈犀一點通。” - 李商隱（《無題》）",
    "“橫眉冷對千夫指，俯首甘為孺子牛。” - 魯迅（《自嘲》）",
    "“寶劍鋒從磨礪出，梅花香自苦寒來。” - 無名氏",
    "“江山代有才人出，各領風騷數百年。” - 趙翼（《論詩》）",
    "“路漫漫其修遠兮，吾將上下而求索。” - 屈原（《離騷》）",
    "“會當凌絕頂，一覽眾山小。” - 杜甫（《望岳》）",
    "“千淘萬漉雖辛苦，吹盡狂沙始到金。” - 劉禹錫（《浪淘沙》）",
    "“時窮節乃現，一一垂丹青。” - 文天祥（《正氣歌》）",
    "“讀書破萬卷，下筆如有神。” - 杜甫（《奉贈韋左丞丈二十二韻》）",
    "“安不忘危，盛必慮衰。” - 《左傳》",
    "“天生我材必有用，千金散盡還復來。” - 李白（《將進酒》）",
    "“生當作人傑，死亦為鬼雄。” - 李清照（《夏日絕句》）",
    "“不飛則已，一飛沖天；不鳴則已，一鳴驚人。” - 司馬遷（《史記》）",
    "“知己知彼，百戰不殆。” - 孫子（《孫子兵法》）",
    "“工欲善其事，必先利其器。” - 孔子（《論語》）",
    "“梅須遜雪三分白，雪卻輸梅一段香。” - 盧梅坡（《雪梅》）",
    "“千金散盡還復來。” - 李白（《將進酒》）",
    "“衣帶漸寬終不悔，為伊消得人憔悴。” - 柳永（《蝶戀花》）",
    "“人生自古誰無死，留取丹心照汗青。” - 文天祥（《過零丁洋》）",

    // 西方電影經典名言
    "“May the Force be with you.” - Obi-Wan Kenobi（《Star Wars》）",
    "“Life is like a box of chocolates. You never know what you're gonna get.” - Forrest Gump（《Forrest Gump》）",
    "“I'm gonna make him an offer he can't refuse.” - Vito Corleone（《The Godfather》）",
    "“Why so serious?” - The Joker（《The Dark Knight》）",
    "“Keep your friends close, but your enemies closer.” - Michael Corleone（《The Godfather Part II》）",
    "“I'll be back.” - The Terminator（《The Terminator》）",
    "“Houston, we have a problem.” - Jim Lovell（《Apollo 13》）",
    "“You can't handle the truth!” - Colonel Jessup（《A Few Good Men》）",
    "“Here's looking at you, kid.” - Rick Blaine（《Casablanca》）",
    "“Carpe diem. Seize the day, boys.” - John Keating（《Dead Poets Society》）",
    "“Elementary, my dear Watson.” - Sherlock Holmes（《The Adventures of Sherlock Holmes》）",
    "“I'm king of the world!” - Jack Dawson（《Titanic》）",
    "“Hasta la vista, baby.” - The Terminator（《Terminator 2: Judgment Day》）",
    "“To infinity and beyond!” - Buzz Lightyear（《Toy Story》）",
    "“E.T. phone home.” - E.T.（《E.T. the Extra-Terrestrial》）",
    "“I see dead people.” - Cole Sear（《The Sixth Sense》）",
    "“It’s not who I am underneath, but what I do that defines me.” - Bruce Wayne（《Batman Begins》）",
    "“Just keep swimming.” - Dory（《Finding Nemo》）",
    "“With great power comes great responsibility.” - Uncle Ben（《Spider-Man》）",
    "“You talking to me?” - Travis Bickle（《Taxi Driver》）",
    "“Why don't you come up sometime and see me?” - Lady Lou（《She Done Him Wrong》）",
    "“I’m the king of the world!” - Jack Dawson（《Titanic》）",
    "“You shall not pass!” - Gandalf（《The Lord of the Rings: The Fellowship of the Ring》）",
    "“I am Groot.” - Groot（《Guardians of the Galaxy》）",
    "“This is Sparta!” - King Leonidas（《300》）",
    "“Freedom!” - William Wallace（《Braveheart》）",
    "“There's no place like home.” - Dorothy Gale（《The Wizard of Oz》）",
    "“Here's Johnny!” - Jack Torrance（《The Shining》）",
    "“Say hello to my little friend!” - Tony Montana（《Scarface》）",
    "“You’ve got a friend in me.” - Woody（《Toy Story》）",
    "“Why is the rum always gone?” - Jack Sparrow（《Pirates of the Caribbean: The Curse of the Black Pearl》）",
    "“Do. Or do not. There is no try.” - Yoda（《Star Wars: The Empire Strikes Back》）",
    "“I am inevitable.” - Thanos（《Avengers: Endgame》）",
    "“I am Iron Man.” - Tony Stark（《Iron Man》）",
    "“I'm flying, Jack!” - Rose（《Titanic》）",
    "“Shaken, not stirred.” - James Bond（《Goldfinger》）",
    "“You’re gonna need a bigger boat.” - Martin Brody（《Jaws》）",
    "“Fasten your seatbelts. It's going to be a bumpy night.” - Margo Channing（《All About Eve》）",
    "“I’ll have what she’s having.” - Customer（《When Harry Met Sally》）",
    "“Oh, captain, my captain!” - John Keating（《Dead Poets Society》）",
    "“I drink your milkshake!” - Daniel Plainview（《There Will Be Blood》）",
    "“Bond. James Bond.” - James Bond（《Dr. No》）",
    "“Why so serious?” - The Joker（《The Dark Knight》）",
    "“I’m walking here!” - Ratso Rizzo（《Midnight Cowboy》）",
    "“You complete me.” - Jerry Maguire（《Jerry Maguire》）",
    "“It’s alive! It’s alive!” - Henry Frankenstein（《Frankenstein》）",
    "“I’ll be right here.” - E.T.（《E.T. the Extra-Terrestrial》）",
    "“Toto, I've a feeling we're not in Kansas anymore.” - Dorothy Gale（《The Wizard of Oz》）",
    "“Here’s to looking at you, kid.” - Rick Blaine（《Casablanca》）",
    "“Frankly, my dear, I don’t give a damn.” - Rhett Butler（《Gone with the Wind》）",

    // 西方經典名言
    "“The only thing we have to fear is fear itself.” - Franklin D. Roosevelt",
    "“In the middle of every difficulty lies opportunity.” - Albert Einstein",
    "“To be, or not to be, that is the question.” - William Shakespeare",
    "“I think, therefore I am.” - René Descartes",
    "“Give me liberty, or give me death!” - Patrick Henry",
    "“That which does not kill us makes us stronger.” - Friedrich Nietzsche",
    "“An unexamined life is not worth living.” - Socrates",
    "“Those who dare to fail miserably can achieve greatly.” - John F. Kennedy",
    "“Happiness depends upon ourselves.” - Aristotle",
    "“The best way to predict the future is to create it.” - Peter Drucker",
    "“Do what you can, with what you have, where you are.” - Theodore Roosevelt",
    "“Injustice anywhere is a threat to justice everywhere.” - Martin Luther King Jr.",
    "“Life is really simple, but we insist on making it complicated.” - Confucius",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill",
    "“Knowledge is power.” - Francis Bacon",
    "“Not all those who wander are lost.” - J.R.R. Tolkien",
    "“It is during our darkest moments that we must focus to see the light.” - Aristotle Onassis",
    "“Do not go where the path may lead, go instead where there is no path and leave a trail.” - Ralph Waldo Emerson",
    "“The journey of a thousand miles begins with one step.” - Lao Tzu",
    "“The pen is mightier than the sword.” - Edward Bulwer-Lytton",
    "“Time is money.” - Benjamin Franklin",
    "“I have not failed. I've just found 10,000 ways that won't work.” - Thomas Edison",
    "“If you tell the truth, you don't have to remember anything.” - Mark Twain",
    "“Imagination is more important than knowledge.” - Albert Einstein",
    "“The future belongs to those who believe in the beauty of their dreams.” - Eleanor Roosevelt",
    "“He who opens a school door, closes a prison.” - Victor Hugo",
    "“It is not length of life, but depth of life.” - Ralph Waldo Emerson",
    "“You must be the change you wish to see in the world.” - Mahatma Gandhi",
    "“Do unto others as you would have them do unto you.” - The Bible (Matthew 7:12)",
    "“No one can make you feel inferior without your consent.” - Eleanor Roosevelt",
    "“If you want to go fast, go alone. If you want to go far, go together.” - African Proverb",
    "“The mind is everything. What you think you become.” - Buddha",
    "“Love all, trust a few, do wrong to none.” - William Shakespeare",
    "“Fall seven times and stand up eight.” - Japanese Proverb",
    "“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela",
    "“What lies behind us and what lies before us are tiny matters compared to what lies within us.” - Ralph Waldo Emerson",
    "“You miss 100% of the shots you don't take.” - Wayne Gretzky",
    "“Whether you think you can or you think you can't, you're right.” - Henry Ford",
    "“Do what you love, and you’ll never work a day in your life.” - Confucius",
    "“The best revenge is massive success.” - Frank Sinatra",
    "“The only limit to our realization of tomorrow will be our doubts of today.” - Franklin D. Roosevelt",
    "“It always seems impossible until it’s done.” - Nelson Mandela",
    "“The weak can never forgive. Forgiveness is the attribute of the strong.” - Mahatma Gandhi",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.” - Mahatma Gandhi",
    "“To improve is to change; to be perfect is to change often.” - Winston Churchill",
    "“A friend is someone who knows all about you and still loves you.” - Elbert Hubbard",
    "“Go confidently in the direction of your dreams. Live the life you have imagined.” - Henry David Thoreau",
    "“The greatest wealth is to live content with little.” - Plato",
    "“Act as if what you do makes a difference. It does.” - William James",

  ];

const specialQuotes = [ // 特別名言
    // 老師
    "“歡迎來到資工系” - 夏老大",
    "“以後你看別人(或是自己)的程式，一定心裡會有OS──幹” - 夏老大",
    "“寫完PL後，你會感謝我的” - 夏老大",
    "“我們資工系的學生都很厲害” - 湯松年老師",
    "“我們學校資工系是企業愛用排名前幾名的學校” - 朱守禮老師",
    "“你們心裡應該都有一個OS為什麼要學OS” - 鍾武君老師",
    "“每個學生都有適合他的位置，不必強求” - 余執章老師",
    "“萬物皆為OOP” - 余執章老師",
    "“我希望每個同學都可以順利通過PL” - 賴建宏老師",

    

    // 學生
    "“你也知道我的經濟狀況” - Ray（ 110級 ）",
    "“重修就好” - 流言",
    "“我不能給她一個家, 但我鐘可以一直加” - 業昌（ 110級 ）",
    "“我是羅傑的寶寶 你是羅傑的貝貝 我們合在一起就是寶貝” - 詰詠（ 110級 ）",

];

export const getQuote = () => {
  const random = Math.random();
  console.log("你發現了一個彩蛋！"); 
  if (random < 0.07) { // 有 7% 的機率出現特別名言
    console.log("恭喜你發現了一個特別名言！");
    const index = Math.floor(Math.random() * specialQuotes.length);
    return specialQuotes[index];
  } else {
    console.log("T^T 沒有特別名言");
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }
};
