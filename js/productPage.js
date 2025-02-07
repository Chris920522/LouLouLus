// 在商品資訊頁獲取localStorage內的資料
const products = {
  "1": {
    title:"水果茶系列",
    name: "古釀冬瓜",
    description: "採用台南老店”義豐冬瓜茶”，經過精煉熬煮，具有天然的甜味和獨特的風味 ，特別在炎熱的夏季，能夠帶來清涼解暑的效果",
    image: "img/菜單/水果、茶/古釀冬瓜.jpg"
  },
  "2": {
    title:"水果茶系列",
    name: "古釀冬瓜檸檬",
    description: "採用台南老店”義豐冬瓜茶”，經過精煉熬煮，具有天然的甜味和獨特的風味，在加上新鮮的檸檬汁，酸甜的平衡下，衝撞出新的滋味，特別在炎熱的夏季，能夠帶來清涼解暑的效果",
    image: "img/菜單/水果、茶/古釀冬瓜檸檬.jpg"
  },
  "3": {
    title:"水果茶系列",
    name: "柳橙綠茶",
    description: "柳橙綠茶是一款將新鮮的柳橙與清爽的綠茶完美結合的創新茶飲 ，這款茶飲既有柳橙的香甜果味，又有綠茶的清爽茶韻，是提神解渴好選擇",
    image: "img/菜單/水果、茶/柳橙綠茶.jpg"
  },
  "4": {
    title:"水果茶系列",
    name: "柳橙青茶",
    description: "柳橙青茶是一款將新鮮的柳橙與回甘的青茶完美結合的創新茶飲 ，這款茶飲既有柳橙的香甜果味，又有青茶的濃郁回甘，是一款清爽解渴的飲品",
    image: "img/菜單/水果、茶/柳橙青茶.jpg"
  },
  "5": {
    title:"水果茶系列",
    name: "百香綠茶",
    description: "百香綠茶是一款將百香果的熱帶水果風味與綠茶的清爽茶韻完美結合的創新茶飲，這款茶飲充滿了百香果的香甜和清新，搭配綠茶的自然甘醇，帶來一種清爽且令人愉悅的品味體驗",
    image: "img/菜單/水果、茶/百香綠茶.jpg"
  },
  "6": {
    title:"水果茶系列",
    name: "百香青茶",
    description: "百香青茶是一款將百香果的熱帶水果風味與青茶的濃郁回甘完美結合的創新茶飲，這款茶飲充滿了百香果的香甜和清新，搭配青茶的濃郁回甘，帶來一種清爽且令人愉悅的品味體驗",
    image: "img/菜單/水果、茶/百香青茶.jpg"
  },
  "7": {
    title:"水果茶系列",
    name: "紅葡萄柚綠茶",
    description: "紅葡萄柚綠茶是一款將紅葡萄柚的鮮明酸甜風味與清爽的綠茶完美結合的創新茶飲，這款茶飲既有紅葡萄柚的豐富果香，又有綠茶的自然甘甜，是提神解渴好選擇",
    image: "img/菜單/水果、茶/紅葡萄柚綠茶.jpg"
  },
  "8": {
    title:"水果茶系列",
    name: "翡翠檸檬綠茶",
    description: "翡翠檸檬綠茶是一款將清新酸爽的檸檬與清爽茶韻的綠茶完美結合的創新茶，這款茶飲既有檸檬的清新酸味，又有綠茶的自然甘甜，是提神解渴好選擇",
    image: "img/菜單/水果、茶/翡翠檸檬綠茶.jpg"
  },
  "9": {
    title:"水果茶系列",
    name: "翡翠檸檬青茶",
    description: "翡翠檸檬青茶是一款將清新酸爽的檸檬與濃郁回甘的青茶完美結合的創新茶飲，這款茶飲既有檸檬的清新酸味，又有青茶的濃郁回甘，是提神解渴好選擇",
    image: "img/菜單/水果、茶/翡翠檸檬青茶.jpg"
  },
  "10": {
    title:"水果茶系列",
    name: "養樂多綠茶",
    description: "綠茶與養樂多完美結合，爽口對味、清爽解膩；激發出又清爽又濃郁的奇妙口感，令人整個都精神起來",
    image: "img/菜單/水果、茶/養樂多綠茶.jpg"
  },
  "11": {
    title:"台灣農場鮮奶系列",
    name: "台灣焙火那堤",
    description: "鮮爽順口的獨特風味，與乳香濃厚的鮮奶結合，使得這款鮮奶茶的口感清爽而順滑，讓人回味無窮 ",
    image: "img/菜單/台灣農場鮮奶/台灣焙火那堤.jpg"
  },
  "12": {
    title:"台灣農場鮮奶系列",
    name: "復刻那堤",
    description: "以獨特的麥香和豐富的風味，與乳香濃厚的鮮奶結合，讓這款鮮奶茶口感上帶有獨特的麥香氣息，味道濃郁醇厚",
    image: "img/菜單/台灣農場鮮奶/復刻那堤.jpg"
  },
  "13": {
    title:"台灣農場鮮奶系列",
    name: "抹茶那堤",
    description: "採用靜岡的抹茶粉，有著細膩香醇的茶香，搭配上鮮奶，抹茶的苦韻與牛奶的甜潤完美融合、口感絲滑柔順，層次豐富",
    image: "img/菜單/台灣農場鮮奶/抹茶那堤.jpg"
  },
  "14": {
    title:"台灣農場鮮奶系列",
    name: "斯里蘭卡那堤",
    description: "以其濃郁的茶香和豐富的風味，與乳香濃厚的鮮奶結合，為鮮奶茶的底蘊添加了一份衝擊感，茶香濃郁而不失清新",
    image: "img/菜單/台灣農場鮮奶/斯里蘭卡那堤.jpg"
  },
  "15": {
    title:"台灣農場鮮奶系列",
    name: "英式伯爵那堤",
    description: "以其獨特的清新的柑橘香氣，與乳香濃厚的鮮奶結合，使伯爵茶的淡雅風味和鮮奶的濃郁口感，呈現出一種平衡的體驗",
    image: "img/菜單/台灣農場鮮奶/英式伯爵那堤.jpg"
  },
  "16": {
    title:"台灣農場鮮奶系列",
    name: "阿華田鮮奶",
    description: "經典的阿華田搭配上鮮奶，每一口都甜而不膩，阿華田的醇厚，與牛奶的天然香甜合在一起，讓每一口都充滿了幸福感",
    image: "img/菜單/台灣農場鮮奶/阿華田鮮奶.jpg"
  },
  "17": {
    title:"台灣農場鮮奶系列",
    name: "黑糖波霸那堤",
    description: "使用兩種不同慢熬出來的黑糖，搭配上鮮奶，一口下去，黑糖的濃郁甜味與牛奶的絲滑口感完美結合 ，在加上Q彈的黑糖波霸，使得風味在更上一層樓",
    image: "img/菜單/台灣農場鮮奶/黑糖波霸那堤.jpg"
  },
  "18": {
    title:"台灣農場鮮奶系列",
    name: "黑糖那堤",
    description: "使用兩種不同慢熬出來的黑糖，搭配上鮮奶，輕輕搖動杯子，濃厚的黑糖漿在牛奶中形成美麗的漸層，一口下去，黑糖的濃郁甜味與牛奶的絲滑口感完美結合，甜而不膩",
    image: "img/菜單/台灣農場鮮奶/黑糖那堤.jpg"
  },
  "19": {
    title:"台灣杭菊系列",
    name: "天然杭菊花茶",
    description: "銅鑼杭菊茶是一款源自台灣銅鑼鄉的特選花茶 ，以其獨特的天然甘甜風味聞名於世 ，這種菊花茶採用當地特有的杭菊 ，經過精心培育和手工採摘 ，再經過傳統工藝精製而成 ，天然甘甜又無負擔",
    image: "img/菜單/台灣杭菊系列/天然杭菊花茶.jpg"
  },
  "20": {
    title:"台灣杭菊系列",
    name: "杭菊青茶",
    description: "杭菊青茶是一款將清新芬芳的菊花茶與濃郁回甘的青茶完美融合的創新茶飲，這款茶結合了菊花的天然甘甜與青茶的醇厚韻味 ，這款茶飲結合了兩者的優點，打造出一道獨特且具有多重層次口感的茶",
    image: "img/菜單/台灣杭菊系列/杭菊青茶.jpg"
  },
  "21": {
    title:"台灣杭菊系列",
    name: "純蜂蜜杭菊花茶",
    description: "蜂蜜杭菊花茶是一款結合了台灣龍眼蜂蜜和銅鑼杭菊的特選花茶，以其獨特的菊花天然甘甜風味和蜂蜜香甜結合而深受喜愛，這款茶將台灣銅鑼鄉的杭菊與龍眼蜂蜜完美融合，打造出一種完美的協調",
    image: "img/菜單/台灣杭菊系列/純蜂蜜杭菊花茶.jpg"
  },
  "22": {
    title:"台灣杭菊系列",
    name: "杭菊綠茶",
    description: "菊杭菊青茶是一款將清新芬芳的菊花茶與清爽茶韻的綠茶完美融合的創新茶飲，這款茶結合了菊花的天然甘甜與綠茶的清爽茶韻，這款茶飲結合了兩者的優點，打造出一道獨特且具有多重層次口感的茶",
    image: "img/菜單/台灣杭菊系列/杭菊綠茶.jpg"
  },
  "23": {
    title:"季節限定系列",
    name: "oreo巧克力冰淇淋鮮奶",
    description: "嚴選來自台灣百年製茶廠的四季青茶，經典工藝與現代技術的完美結合，帶來鮮爽順口的獨特風味。每一片茶葉都經過精心挑選和細緻烘焙，散發著自然的清香與回甘，讓您每一口都能體會到台灣茶的純粹與優雅",
    image: "img/菜單/季節限定/oreo巧克力冰淇淋鮮奶.jpg"
  },
  "24": {
    title:"季節限定系列",
    name: "芋泥芋圓鮮奶",
    description: "採用大甲的芋頭，經過長時間的燜煮，再加上黑糖跟水去搗成泥，口感絲滑又帶有些芋頭的顆粒感，配上鮮奶以及芋圓，不論在口感還是味道上都能帶來驚喜",
    image: "img/菜單/季節限定/芋泥芋圓鮮奶.jpg"
  },
  "25": {
    title:"季節限定系列",
    name: "芋泥鮮奶",
    description: "採用大甲的芋頭，經過長時間的燜煮，再加上黑糖跟水去搗成泥，口感絲滑又帶有些芋頭的顆粒感，配上鮮奶，不論在口感還是味道上都能帶來驚喜",
    image: "img/菜單/季節限定/芋泥鮮奶.jpg"
  },
  "26": {
    title:"季節限定系列",
    name: "鳳梨冰梅",
    description: "採用台灣本土鳳梨，切成小塊後加上砂糖熬煮成鳳梨醬，加上熬煮的鳳梨汁，配上鹹鹹酸酸話梅，在夏日來上一杯清涼解渴又上口",
    image: "img/菜單/季節限定/鳳梨冰梅.jpg"
  },
  "27": {
    title:"季節限定系列",
    name: "鳳梨冰沙",
    description: "嚴採用台灣本土鳳梨，切成小塊後加上砂糖熬煮成鳳梨醬，加上熬煮的鳳梨汁，在夏日來上一杯清涼解渴又上口",
    image: "img/菜單/季節限定/鳳梨冰沙.jpg"
  },
  "28": {
    title:"季節限定系列",
    name: "鳳梨青茶",
    description: "採用台灣本土鳳梨，切成小塊後加上砂糖熬煮成鳳梨醬，配上清爽的青茶，在夏日來上一杯清涼解渴又上口",
    image: "img/菜單/季節限定/鳳梨青茶.jpg"
  },
  "29": {
    title:"季節限定系列",
    name: "黑可可巧克力伯爵",
    description: "嚴選來自台灣百年製茶廠的四季青茶，經典工藝與現代技術的完美結合，帶來鮮爽順口的獨特風味。每一片茶葉都經過精心挑選和細緻烘焙，散發著自然的清香與回甘，讓您每一口都能體會到台灣茶的純粹與優雅",
    image: "img/菜單/季節限定/黑可可巧克力伯爵.jpg"
  },
  "30": {
    title:"季節限定系列",
    name: "黑可可巧克力奶茶",
    description: "嚴選來自台灣百年製茶廠的四季青茶，經典工藝與現代技術的完美結合，帶來鮮爽順口的獨特風味。每一片茶葉都經過精心挑選和細緻烘焙，散發著自然的清香與回甘，讓您每一口都能體會到台灣茶的純粹與優雅",
    image: "img/菜單/季節限定/黑可可巧克力奶茶.jpg"
  },
  "31": {
    title:"季節限定系列",
    name: "黑可可巧克力那堤",
    description: "嚴選來自台灣百年製茶廠的四季青茶，經典工藝與現代技術的完美結合，帶來鮮爽順口的獨特風味。每一片茶葉都經過精心挑選和細緻烘焙，散發著自然的清香與回甘，讓您每一口都能體會到台灣茶的純粹與優雅",
    image: "img/菜單/季節限定/黑可可巧克力那堤.jpg"
  },
  "32": {
    title:"雀巢三花特調系列",
    name: "LUS.奶綠",
    description: "本就是濃厚的綠茶，在做成奶綠之後，意外的沒有單純喝綠茶那般濃厚，取而代之的卻是一股清爽感的口感，喝完清爽不膩口",
    image: "img/菜單/雀巢三花特調/LUS.奶綠.jpg"
  },
  "33": {
    title:"雀巢三花特調系列",
    name: "台灣焙火奶茶",
    description: "鮮爽順口的獨特風味，與奶香形成了極佳的平衡，打破了原本奶茶醇厚的口感，使得在喝奶茶也能很清爽",
    image: "img/菜單/雀巢三花特調/台灣焙火奶茶.jpg"
  },
  "34": {
    title:"雀巢三花特調系列",
    name: "復刻奶茶",
    description: "濃郁的麥香與奶香的結合，入口濃厚、香味獨特，讓人情不自禁一口又一口",
    image: "img/菜單/雀巢三花特調/復刻奶茶.jpg"
  },
  "35": {
    title:"雀巢三花特調系列",
    name: "斯里蘭卡奶茶",
    description: "斯里蘭卡茶特有的微苦茶韻，與奶香形成了極佳的平衡，一入口有著濃郁的茶香 ，緊接著奶香撲鼻而來，既有茶的深邃，又有奶的圓潤",
    image: "img/菜單/雀巢三花特調/斯里蘭卡奶茶.jpg"
  },
  "36": {
    title:"雀巢三花特調系列",
    name: "波霸奶綠",
    description: "本就是濃厚的綠茶，在做成奶綠之後，意外的沒有單純喝綠茶那般濃厚，取而代之的卻是一股清爽感的口感，再加上Q彈的黑糖波霸，混搭出了薪滋味",
    image: "img/菜單/雀巢三花特調/波霸奶綠.jpg"
  },
  "37": {
    title:"雀巢三花特調系列",
    name: "純蜂蜜奶茶",
    description: "採用斯里蘭卡奶茶下去跟龍眼蜜去做搭配，不只有著奶香更有著蜂蜜香，在香氣上非常有層次感，喝起來也是一場味覺的饗宴",
    image: "img/菜單/雀巢三花特調/純蜂蜜奶茶.jpg"
  },
  "38": {
    title:"雀巢三花特調系列",
    name: "統一布丁奶茶",
    description: "採用斯里蘭卡奶茶下去跟布丁做搭配，在原有的基礎上加上了香甜的布丁，使得整體口感又不一樣",
    image: "img/菜單/雀巢三花特調/統一布丁奶茶.jpg"
  },
  "39": {
    title:"雀巢三花特調系列",
    name: "英式伯爵奶茶",
    description: "清新的柑橘香氣與獨特的風味，與奶香完美的結合，在基礎的奶香上，又有柑橘的香氣，不只是口腔，也帶給鼻腔一場香氣的盛宴",
    image: "img/菜單/雀巢三花特調/英式伯爵奶茶.jpg"
  },
  "40": {
    title:"雀巢三花特調系列",
    name: "阿華田",
    description: "經典的可可風味飲品，每一口都充滿著麥芽與可可的香氣，讓每一口都充滿著幸福感",
    image: "img/菜單/雀巢三花特調/阿華田.jpg"
  },
  "41": {
    title:"雀巢三花特調系列",
    name: "香草冰淇淋奶茶",
    description: "採用斯里蘭卡奶茶下去跟香草冰淇淋做搭配，冰淇淋化開在奶茶中，不只是讓奶茶變得更加醇厚，也多了股香草香",
    image: "img/菜單/雀巢三花特調/香草冰淇淋奶茶.jpg"
  },
  "42": {
    title:"雀巢三花特調系列",
    name: "香草冰淇淋紅茶",
    description: "斯里蘭卡獨特的濃郁茶香和豐富風味，遇上香草冰淇淋，在很有效的把紅茶的苦味去掉時，又多了股香草香",
    image: "img/菜單/雀巢三花特調/香草冰淇淋紅茶.jpg"
  },
  "43": {
    title:"雀巢三花特調系列",
    name: "黑糖奶茶",
    description: "兩種黑糖漿的結合，輕輕搖晃使其混合，濃郁的奶香與黑糖的碰撞，使其在沉浸在其中不能自拔",
    image: "img/菜單/雀巢三花特調/黑糖奶茶.jpg"
  },
  "44": {
    title:"雀巢三花特調系列",
    name: "黑糖波霸奶茶",
    description: "兩種黑糖漿的結合，輕輕搖晃使其混合，濃郁的奶香與黑糖的碰撞，再加上Q彈的黑糖波霸，使其在沉浸在其中不能自拔",
    image: "img/菜單/雀巢三花特調/黑糖波霸奶茶.jpg"
  },
  "45": {
    title:"嚴選台灣好茶系列",
    name: "台灣焙火四季青茶",
    description: "嚴選來自台灣百年製茶廠的四季青茶，經典工藝與現代技術的完美結合，帶來鮮爽順口的獨特風味，每一片茶葉都經過精心挑選和細緻烘焙，散發著自然的清香與回甘，讓您每一口都能體會到台灣茶的純粹與優雅",
    image: "img/菜單/嚴選台灣好茶/台灣焙火四季青茶.jpg"
  },
  "46": {
    title:"嚴選台灣好茶系列",
    name: "台灣焙火紅茶",
    description: "嚴選台灣百年製茶廠的茶葉，這款紅茶以其鮮爽順口的獨特風味聞名，源自於台灣的高山茶園，百年傳承的製茶工藝，結合現代科技，使得這款紅茶在口感上既傳承了傳統的醇厚，又融入了現代的細膩",
    image: "img/菜單/嚴選台灣好茶/台灣焙火紅茶.jpg"
  },
  "47": {
    title:"嚴選台灣好茶系列",
    name: "台灣輕焙火綠茶",
    description: "這款綠茶嚴選自台灣百年製茶廠，以其濃厚的茶味和獨特的風味深受喜愛，源自台灣高山茶園的優質茶葉，茶湯清澈明亮，散發出濃厚而純淨的茶香，讓清新的茶香在口中綻放",
    image: "img/菜單/嚴選台灣好茶/台灣輕焙火綠茶.jpg"
  },
  "48": {
    title:"嚴選台灣好茶系列",
    name: "復刻紅茶",
    description: "這款復刻紅茶，帶有獨特的麥香和豐富的風味，完美再現了經典紅茶的精髓，透過香料以及茶葉的搭配，讓其展現出卓越的品質和獨特的風味",
    image: "img/菜單/嚴選台灣好茶/復刻紅茶.jpg"
  },
  "49": {
    title:"嚴選台灣好茶系列",
    name: "斯里蘭卡紅茶",
    description: "這款紅茶嚴選自台灣百年製茶廠，以其濃郁的茶香和豐富的風味著稱，源自台灣優質茶園的茶葉，經過精心挑選和傳統製茶工藝的結合，確保每一片茶葉都達到完美的品質",
    image: "img/菜單/嚴選台灣好茶/斯里蘭卡紅茶.jpg"
  },
  "50": {
    title:"嚴選台灣好茶系列",
    name: "英式伯爵",
    description: "英式伯爵紅茶是一款經典且廣受歡迎的調味紅茶，以其獨特的風味和高雅的氣質著稱，伯爵紅茶的主要成分是優質紅茶與佛手柑的搭配，為茶湯增添了清新的柑橘香氣，憑藉其獨特的風味和優雅的氣質，不論是作為日常飲品還是下午茶時間的伴侶，這款茶都能帶來愉悅的品茶時光 ，讓您盡享英式風情的獨特魅力 ",
    image: "img/菜單/嚴選台灣好茶/英式伯爵.jpg"
  },
};

window.onload = function() { 
  // window.onload用來在整個網頁載入所有元素後觸發
  const productId = localStorage.getItem('productId');
  // 從 localStorage 中取得 productId
    const product = products[productId];
    // 從 products 數組中取得對應的產品
    document.getElementById('productSeries').innerText=product.title;
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productDescription').innerText = product.description;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
}
