/* ROOM */



const roomName2 = "🟠⚫ Sala da ?? ⚫🟠";

const maxPlayers = 25;

const roomPublic = true;

const geo = {"code": "br", "lat": -23.51634162, "lon": -46.6460824};

const token = "thr1.AAAAAF3oAAG0D7fTHj8Ugg.FWiqJdNdT20";



const room = HBInit({ roomName: roomName2, maxPlayers: maxPlayers, public: roomPublic, geo: geo, token: token, noPlayer: true});



room.setTeamsLock(true);

const password = "awpass"

const passwordCasual = "awpasscamp"

room.setTeamColors(1, 360, 0x696969, [0xFFFFFF, 0xF5F5F5, 0xE6E6E6]);

room.setTeamColors(2, 60, 0xFFFFFF, [0x707070, 0x696969, 0x5C5C5C]);



/* STADIUM */



const japones = "ሣࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮";

const japones2 = "ᬌย礩ㅱᴧဋ㤢ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮ف㤮〕㱳⬗ᅷд甇ᜯ⩿ᤶⱁ戃椏缁 ࠛ硫⩅ౣ瀖⬢䀙笩त「縗h㡰ऻ紕怜䐃⨬";

const japones3 = "ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚ 椏Ἧ浸ἱᔞ፭ਮ娮ف㤮 椏㱳椏ᅷд甇ᜯ⩿ᤶⱁ戃 椏缁⼐獾⌱മ㈐ᵲ桨ԷᴑĿᑆ";

const japones4 = "ボΞԼΐԾ҉ↁA҉$: ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ ボΞԼΐԾ҉ↁA҉$: ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ ボΞԼΐԾ҉ↁA҉$: ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ ボΞԼΐԾ҉ↁA҉$";

const japones5 = "㧫璧�觭䢜潇ကᩨ쀡ఈ泄찉넾﫤㏭�緺�堲昸⸐낧懈౩䊀脁潡䣚⾤㸼짠ब꺅�ﹴﯰ﹟ﵿ࿿빏⿠雴㰯첇브쾞�읨⎘堌�̃㭎掌�䑂吺쏘뗲᭾�띀急蔹♤⹉ꆣせㆉ였鷀Ú錘陈搳窇㉕ꙕ鄲欙莚쁃◑첶㘥䅺ǫ呡讬ꯩ䌻⨣�馫㷈搊ꌈ恘㠄陌颓̌谆、ઠ鞿å 䆔⽪ﭓ櫆陗썆㾑쾛炦͝薐�翺￧祋ۓ岳书";

const japones6 = "۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ۝۞۩߷ऄ";

const playerRadius = 15;

var ballRadius = 10;

var triggerDistance = playerRadius + ballRadius + 0.01;

var metropolitano = `{



	"name" : "Metropolitano",



	"width" : 620,



	"height" : 270,



	"spawnDistance" : 350,



	"canBeStored" : false,



	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },



	"vertexes" : [

		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },

		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },

		

		/* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" },

		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },

		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },

		/* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" },

		

		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "000000", "pos" : [-700,-80 ] },

		/* 7 */ { "x" : -604, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "000000", "pos" : [-700,-80 ] },

		/* 8 */ { "x" : -604, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "000000", "pos" : [-700,80 ] },

		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "000000", "pos" : [-700,80 ] },

		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "000000", "pos" : [700,-80 ] },

		/* 11 */ { "x" : 605, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFE438", "pos" : [700,-80 ] },

		/* 12 */ { "x" : 605, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFE438", "pos" : [700,80 ] },

		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "000000", "pos" : [700,80 ] },

		

		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] },

		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },

		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] },

		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },

		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] },

		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },

		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] },

		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },

		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },

		

		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },

		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },

		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },

		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },

		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },

		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },

		

		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ], "color" : "FFE438" },

		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },

		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },

		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ], "color" : "FFE438" },

		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },

		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ], "color" : "FFE438", "_selected" : "segment" },

		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ], "color" : "FFE438" },

		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },

		

		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" },

		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" },

		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },

		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },

		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },

		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },

		/* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "trait" : "line" },

		/* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },

		/* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "trait" : "line" },

		/* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "trait" : "line" },

		/* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },

		/* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },

		/* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },

		/* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 74 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },

		/* 75 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 76 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },

		/* 77 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 78 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },

		/* 79 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 80 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 81 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 82 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 83 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 84 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },

		/* 85 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },

		/* 86 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },

		/* 87 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },

		/* 88 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 89 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 90 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 91 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 92 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 93 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 94 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 95 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 96 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 97 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 98 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 99 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 100 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 101 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 102 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 103 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 104 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 105 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 106 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 107 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 108 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 109 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 110 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 111 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 112 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 113 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 114 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 115 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 116 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 117 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 118 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 119 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 120 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 121 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 122 */ { "bCoef" : 0.1, "trait" : "line", "x" : -589.7777786254883, "y" : -265.21180725097656, "color" : "696969" },

		/* 123 */ { "bCoef" : 0.1, "trait" : "line", "x" : 597.2222213745117, "y" : -264.21180725097656, "color" : "696969" },

		/* 124 */ { "bCoef" : 0.1, "trait" : "line", "x" : -591.7777786254883, "y" : 264.78819274902344, "color" : "696969" },

		/* 125 */ { "bCoef" : 0.1, "trait" : "line", "x" : 595.2222213745117, "y" : 265.78819274902344, "color" : "696969" },

		/* 126 */ { "bCoef" : 0.1, "trait" : "line", "x" : 557.2222213745117, "y" : -227.21180725097656, "color" : "3E423F" },

		/* 127 */ { "bCoef" : 0.1, "trait" : "line", "x" : 557.2222213745117, "y" : -92.21180725097656, "color" : "3E423F" },

		/* 128 */ { "bCoef" : 0.1, "trait" : "line", "x" : 557.2222213745117, "y" : 94.78819274902344, "color" : "3E423F" },

		/* 129 */ { "bCoef" : 0.1, "trait" : "line", "x" : 557.2222213745117, "y" : 229.78819274902344, "color" : "3E423F" },

		/* 130 */ { "bCoef" : 0.1, "trait" : "line", "x" : -559.7777786254883, "y" : 89.78819274902344, "color" : "3E423F" },

		/* 131 */ { "bCoef" : 0.1, "trait" : "line", "x" : -559.7777786254883, "y" : 224.78819274902344, "color" : "3E423F" },

		/* 132 */ { "bCoef" : 0.1, "trait" : "line", "x" : -557.7777786254883, "y" : -225.21180725097656, "color" : "3E423F" },

		/* 133 */ { "bCoef" : 0.1, "trait" : "line", "x" : -557.7777786254883, "y" : -90.21180725097656, "color" : "3E423F" },

		/* 134 */ { "bCoef" : 0.1, "trait" : "line", "x" : 615.5, "y" : -265.24609375, "color" : "E0E0E0" },

		/* 135 */ { "bCoef" : 0.1, "trait" : "line", "x" : 616.5, "y" : 265.75390625, "color" : "E0E0E0" },

		/* 136 */ { "bCoef" : 0.1, "trait" : "line", "x" : -615.5, "y" : -265.24609375, "color" : "E0E0E0" },

		/* 137 */ { "bCoef" : 0.1, "trait" : "line", "x" : -616.5, "y" : 265.75390625, "color" : "E0E0E0" },

		/* 138 */ { "bCoef" : 0.1, "trait" : "line", "x" : 641.5, "y" : -116.24609375, "color" : "737171" },

		/* 139 */ { "bCoef" : 0.1, "trait" : "line", "x" : -641.5, "y" : -116.24609375, "color" : "737171" },

		/* 140 */ { "bCoef" : 0.1, "trait" : "line", "x" : -603.5, "y" : -80.24609375, "color" : "FFE438" },

		/* 141 */ { "bCoef" : 0.1, "trait" : "line", "x" : 641.5, "y" : 116.24609375, "color" : "737171" },

		/* 142 */ { "bCoef" : 0.1, "trait" : "line", "x" : -641.5, "y" : 116.24609375, "color" : "737171" },

		/* 143 */ { "bCoef" : 0.1, "trait" : "line", "x" : -603.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 144 */ { "bCoef" : 0.1, "trait" : "line", "x" : 576.5, "y" : -251.24609375, "color" : "4e4e4e" },

		/* 145 */ { "bCoef" : 0.1, "trait" : "line", "x" : -571.5, "y" : -252.24609375, "color" : "4e4e4e" },

		/* 146 */ { "bCoef" : 0.1, "trait" : "line", "x" : 576.5, "y" : 251.24609375, "color" : "4e4e4e" },

		/* 147 */ { "bCoef" : 0.1, "trait" : "line", "x" : -571.5, "y" : 252.24609375, "color" : "4e4e4e" },

		/* 148 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : -64.24609375, "color" : "FFE438" },

		/* 149 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : -64.24609375, "color" : "FFE438" },

		/* 150 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : 64.24609375, "color" : "FFE438" },

		/* 151 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : 64.24609375, "color" : "FFE438" },

		/* 152 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : -49.24609375, "color" : "FFE438" },

		/* 153 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : -24.24609375, "color" : "FFE438" },

		/* 154 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : -49.24609375, "color" : "FFE438" },

		/* 155 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : -24.24609375, "color" : "FFE438" },

		/* 156 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : 49.24609375, "color" : "FFE438" },

		/* 157 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : 24.24609375, "color" : "FFE438" },

		/* 158 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : 49.24609375, "color" : "FFE438" },

		/* 159 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : 24.24609375, "color" : "FFE438" },

		/* 160 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : -14.24609375, "color" : "FFE438" },

		/* 161 */ { "bCoef" : 0.1, "trait" : "line", "x" : -604.5, "y" : 9.75390625, "color" : "FFE438" },

		/* 162 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : -14.24609375, "color" : "FFE438" },

		/* 163 */ { "bCoef" : 0.1, "trait" : "line", "x" : 604.5, "y" : 9.75390625, "color" : "FFE438" },

		/* 164 */ { "bCoef" : 0.1, "trait" : "line", "x" : -596.5, "y" : -80.24609375, "color" : "FFE438" },

		/* 165 */ { "bCoef" : 0.1, "trait" : "line", "x" : -576.5, "y" : -80.24609375, "color" : "FFE438" },

		/* 166 */ { "bCoef" : 0.1, "trait" : "line", "x" : 596.5, "y" : -80.24609375, "color" : "FFE438" },

		/* 167 */ { "bCoef" : 0.1, "trait" : "line", "x" : 576.5, "y" : -80.24609375, "color" : "FFE438" },

		/* 168 */ { "bCoef" : 0.1, "trait" : "line", "x" : -596.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 169 */ { "bCoef" : 0.1, "trait" : "line", "x" : -576.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 170 */ { "bCoef" : 0.1, "trait" : "line", "x" : 596.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 171 */ { "bCoef" : 0.1, "trait" : "line", "x" : 576.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 172 */ { "bCoef" : 0.1, "trait" : "line", "x" : -566.5, "y" : -80.24609375, "color" : "FFE438" },

		/* 173 */ { "bCoef" : 0.1, "trait" : "line", "x" : 566.5, "y" : -80.24609375, "color" : "FFE438", "_selected" : "segment" },

		/* 174 */ { "bCoef" : 0.1, "trait" : "line", "x" : -566.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 175 */ { "bCoef" : 0.1, "trait" : "line", "x" : 566.5, "y" : 80.24609375, "color" : "FFE438" },

		/* 176 */ { "bCoef" : 0.1, "trait" : "line", "x" : 5.5, "y" : -264.24609375, "color" : "424242" },

		/* 177 */ { "bCoef" : 0.1, "trait" : "line", "x" : 532.5, "y" : -264.24609375, "color" : "424242" },

		/* 178 */ { "bCoef" : 0.1, "trait" : "line", "x" : -5.5, "y" : -264.24609375, "color" : "424242" },

		/* 179 */ { "bCoef" : 0.1, "trait" : "line", "x" : -532.5, "y" : -264.24609375, "color" : "424242" },

		/* 180 */ { "bCoef" : 0.1, "trait" : "line", "x" : 5.5, "y" : 264.24609375, "color" : "424242" },

		/* 181 */ { "bCoef" : 0.1, "trait" : "line", "x" : 532.5, "y" : 264.24609375, "color" : "424242" },

		/* 182 */ { "bCoef" : 0.1, "trait" : "line", "x" : -5.5, "y" : 264.24609375, "color" : "424242" },

		/* 183 */ { "bCoef" : 0.1, "trait" : "line", "x" : -532.5, "y" : 264.24609375, "color" : "424242" },

		/* 184 */ { "bCoef" : 0.1, "trait" : "line", "x" : -592.5, "y" : 274.75390625, "color" : "c49d01" },

		/* 185 */ { "bCoef" : 0.1, "trait" : "line", "x" : -548.5, "y" : 395.75390625, "color" : "c49d01" },

		/* 186 */ { "bCoef" : 0.1, "trait" : "line", "x" : 592.5, "y" : 274.75390625, "color" : "c49d01" },

		/* 187 */ { "bCoef" : 0.1, "trait" : "line", "x" : 548.5, "y" : 395.75390625, "color" : "c49d01" },

		/* 188 */ { "bCoef" : 0.1, "trait" : "line", "x" : -592.5, "y" : -274.75390625, "color" : "c49d01" },

		/* 189 */ { "bCoef" : 0.1, "trait" : "line", "x" : -548.5, "y" : -395.75390625, "color" : "c49d01" },

		/* 190 */ { "bCoef" : 0.1, "trait" : "line", "x" : 592.5, "y" : -274.75390625, "color" : "c49d01" },

		/* 191 */ { "bCoef" : 0.1, "trait" : "line", "x" : 548.5, "y" : -395.75390625, "color" : "c49d01" },

		/* 192 */ { "bCoef" : 0.1, "trait" : "line", "x" : -499.5, "y" : 287.75390625, "color" : "c49d01" },

		/* 193 */ { "bCoef" : 0.1, "trait" : "line", "x" : 499.5, "y" : 287.75390625, "color" : "c49d01" },

		/* 194 */ { "bCoef" : 0.1, "trait" : "line", "x" : -499.5, "y" : -287.75390625, "color" : "c49d01" },

		/* 195 */ { "bCoef" : 0.1, "trait" : "line", "x" : 499.5, "y" : -287.75390625, "color" : "c49d01" },

		/* 196 */ { "bCoef" : 0.1, "trait" : "line", "x" : -523.5, "y" : -341.24609375, "color" : "696969" },

		/* 197 */ { "bCoef" : 0.1, "trait" : "line", "x" : 520.5, "y" : -339.24609375, "color" : "696969" },

		/* 198 */ { "bCoef" : 0.1, "trait" : "line", "x" : -523.5, "y" : 341.24609375, "color" : "696969" },

		/* 199 */ { "bCoef" : 0.1, "trait" : "line", "x" : 520.5, "y" : 339.24609375, "color" : "696969" },

		/* 200 */ { "bCoef" : 0.1, "trait" : "line", "x" : -458.5, "y" : -284.24609375, "color" : "757575" },

		/* 201 */ { "bCoef" : 0.1, "trait" : "line", "x" : -424.5, "y" : -352.24609375, "color" : "757575" },

		/* 202 */ { "bCoef" : 0.1, "trait" : "line", "x" : 458.5, "y" : -284.24609375, "color" : "757575" },

		/* 203 */ { "bCoef" : 0.1, "trait" : "line", "x" : 424.5, "y" : -352.24609375, "color" : "757575" },

		/* 204 */ { "bCoef" : 0.1, "trait" : "line", "x" : -458.5, "y" : 284.24609375, "color" : "757575" },

		/* 205 */ { "bCoef" : 0.1, "trait" : "line", "x" : -424.5, "y" : 352.24609375, "color" : "757575" },

		/* 206 */ { "bCoef" : 0.1, "trait" : "line", "x" : 458.5, "y" : 284.24609375, "color" : "757575" },

		/* 207 */ { "bCoef" : 0.1, "trait" : "line", "x" : 424.5, "y" : 352.24609375, "color" : "757575" },

		/* 208 */ { "bCoef" : 0.1, "trait" : "line", "x" : -382.5, "y" : -292.24609375, "color" : "757575" },

		/* 209 */ { "bCoef" : 0.1, "trait" : "line", "x" : 382.5, "y" : -292.24609375, "color" : "757575" },

		/* 210 */ { "bCoef" : 0.1, "trait" : "line", "x" : -382.5, "y" : 292.24609375, "color" : "757575" },

		/* 211 */ { "bCoef" : 0.1, "trait" : "line", "x" : 382.5, "y" : 292.24609375, "color" : "757575" },

		/* 212 */ { "bCoef" : 0.1, "trait" : "line", "x" : -334.5, "y" : -361.24609375, "color" : "757575" },

		/* 213 */ { "bCoef" : 0.1, "trait" : "line", "x" : 334.5, "y" : -361.24609375, "color" : "757575" },

		/* 214 */ { "bCoef" : 0.1, "trait" : "line", "x" : -334.5, "y" : 361.24609375, "color" : "757575" },

		/* 215 */ { "bCoef" : 0.1, "trait" : "line", "x" : 334.5, "y" : 361.24609375, "color" : "757575" },

		/* 216 */ { "bCoef" : 0.1, "trait" : "line", "x" : -296.5, "y" : -297.24609375, "color" : "757575" },

		/* 217 */ { "bCoef" : 0.1, "trait" : "line", "x" : 296.5, "y" : -297.24609375, "color" : "757575" },

		/* 218 */ { "bCoef" : 0.1, "trait" : "line", "x" : -296.5, "y" : 297.24609375, "color" : "757575" },

		/* 219 */ { "bCoef" : 0.1, "trait" : "line", "x" : 296.5, "y" : 297.24609375, "color" : "757575" },

		/* 220 */ { "bCoef" : 0.1, "trait" : "line", "x" : -241.5, "y" : -365.24609375, "color" : "757575" },

		/* 221 */ { "bCoef" : 0.1, "trait" : "line", "x" : 241.5, "y" : -365.24609375, "color" : "757575" },

		/* 222 */ { "bCoef" : 0.1, "trait" : "line", "x" : -241.5, "y" : 365.24609375, "color" : "757575" },

		/* 223 */ { "bCoef" : 0.1, "trait" : "line", "x" : 241.5, "y" : 365.24609375, "color" : "757575" },

		/* 224 */ { "bCoef" : 0.1, "trait" : "line", "x" : -193.5, "y" : -302.24609375, "color" : "757575" },

		/* 225 */ { "bCoef" : 0.1, "trait" : "line", "x" : 193.5, "y" : -302.24609375, "color" : "757575" },

		/* 226 */ { "bCoef" : 0.1, "trait" : "line", "x" : -193.5, "y" : 302.24609375, "color" : "757575" },

		/* 227 */ { "bCoef" : 0.1, "trait" : "line", "x" : 193.5, "y" : 302.24609375, "color" : "757575" },

		/* 228 */ { "bCoef" : 0.1, "trait" : "line", "x" : -142.5, "y" : -372.24609375, "color" : "757575" },

		/* 229 */ { "bCoef" : 0.1, "trait" : "line", "x" : 142.5, "y" : -372.24609375, "color" : "757575" },

		/* 230 */ { "bCoef" : 0.1, "trait" : "line", "x" : -142.5, "y" : 372.24609375, "color" : "757575" },

		/* 231 */ { "bCoef" : 0.1, "trait" : "line", "x" : 142.5, "y" : 372.24609375, "color" : "757575" },

		/* 232 */ { "bCoef" : 0.1, "trait" : "line", "x" : -94.5, "y" : -307.24609375, "color" : "757575" },

		/* 233 */ { "bCoef" : 0.1, "trait" : "line", "x" : 94.5, "y" : -307.24609375, "color" : "757575" },

		/* 234 */ { "bCoef" : 0.1, "trait" : "line", "x" : -94.5, "y" : 307.24609375, "color" : "757575" },

		/* 235 */ { "bCoef" : 0.1, "trait" : "line", "x" : 94.5, "y" : 307.24609375, "color" : "757575" },

		/* 236 */ { "bCoef" : 0.1, "trait" : "line", "x" : -46.5, "y" : -375.24609375, "color" : "757575" },

		/* 237 */ { "bCoef" : 0.1, "trait" : "line", "x" : 46.5, "y" : -375.24609375, "color" : "757575" },

		/* 238 */ { "bCoef" : 0.1, "trait" : "line", "x" : -46.5, "y" : 375.24609375, "color" : "757575" },

		/* 239 */ { "bCoef" : 0.1, "trait" : "line", "x" : 46.5, "y" : 375.24609375, "color" : "757575" },

		/* 240 */ { "bCoef" : 0.1, "trait" : "line", "x" : -1.5, "y" : -310.24609375, "color" : "757575" },

		/* 241 */ { "bCoef" : 0.1, "trait" : "line", "x" : -1.5, "y" : 310.24609375, "color" : "757575" }



	],



	"segments" : [

		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "000000", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },

		{ "v0" : 7, "v1" : 8, "color" : "000000", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },

		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "000000", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },

		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "000000", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },

		{ "v0" : 11, "v1" : 12, "color" : "000000", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 590 },

		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "000000", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },

		

		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },

		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },

		

		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },

		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },

		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },

		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },

		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },

		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },

		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },

		

		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		

		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },

		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },

		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },

		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },

		

		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 },

		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 },

		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 },

		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },

		{ "v0" : 66, "v1" : 67, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 69, "v1" : 68, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 70, "v1" : 71, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 67, "v1" : 71, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 73, "v1" : 72, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },

		{ "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },

		{ "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },

		{ "v0" : 81, "v1" : 80, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 83, "v1" : 82, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 84, "v1" : 85, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 86, "v1" : 87, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },

		{ "v0" : 91, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 90, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 93, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 92, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 95, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 94, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 97, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 96, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 99, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 101, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 100, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 103, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 102, "v1" : 103, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 105, "v1" : 104, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 104, "v1" : 105, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 107, "v1" : 106, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 106, "v1" : 107, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 109, "v1" : 108, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 108, "v1" : 109, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 111, "v1" : 110, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 110, "v1" : 111, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 113, "v1" : 112, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 112, "v1" : 113, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 115, "v1" : 114, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 114, "v1" : 115, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 117, "v1" : 116, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 116, "v1" : 117, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 119, "v1" : 118, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 118, "v1" : 119, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 121, "v1" : 120, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 120, "v1" : 121, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "curve" : 16.61375140160473, "vis" : true, "color" : "696969", "bCoef" : 0.1, "trait" : "line", "v0" : 122, "v1" : 123 },

		{ "curve" : -17.171935792921893, "vis" : true, "color" : "696969", "bCoef" : 0.1, "trait" : "line", "v0" : 124, "v1" : 125 },

		{ "curve" : 0, "vis" : true, "color" : "3E423F", "bCoef" : 0.1, "trait" : "line", "v0" : 126, "v1" : 127 },

		{ "curve" : 0, "vis" : true, "color" : "3E423F", "bCoef" : 0.1, "trait" : "line", "v0" : 128, "v1" : 129 },

		{ "curve" : 0, "vis" : true, "color" : "3E423F", "bCoef" : 0.1, "trait" : "line", "v0" : 130, "v1" : 131 },

		{ "curve" : 0, "vis" : true, "color" : "3E423F", "bCoef" : 0.1, "trait" : "line", "v0" : 132, "v1" : 133 },

		{ "vis" : true, "color" : "E0E0E0", "bCoef" : 0.1, "trait" : "line", "v0" : 134, "v1" : 135, "curve" : 28.52709662591242 },

		{ "vis" : true, "color" : "E0E0E0", "bCoef" : 0.1, "trait" : "line", "v0" : 136, "v1" : 137, "curve" : -28.52709662591242 },

		{ "curve" : -17.171935792921893, "vis" : true, "color" : "737171", "bCoef" : 0.1, "trait" : "line", "v0" : 138, "v1" : 11 },

		{ "curve" : 17.171935792921893, "vis" : true, "color" : "737171", "bCoef" : 0.1, "trait" : "line", "v0" : 139, "v1" : 140 },

		{ "curve" : 17.171935792921893, "vis" : true, "color" : "737171", "bCoef" : 0.1, "trait" : "line", "v0" : 141, "v1" : 12 },

		{ "curve" : -17.171935792921893, "vis" : true, "color" : "737171", "bCoef" : 0.1, "trait" : "line", "v0" : 142, "v1" : 143 },

		{ "curve" : 0, "vis" : true, "color" : "4e4e4e", "bCoef" : 0.1, "trait" : "line", "v0" : 144, "v1" : 145 },

		{ "curve" : 0, "vis" : true, "color" : "4e4e4e", "bCoef" : 0.1, "trait" : "line", "v0" : 146, "v1" : 147 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 140, "v1" : 148 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 11, "v1" : 149 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 143, "v1" : 150 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 12, "v1" : 151 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 152, "v1" : 153 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 154, "v1" : 155 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 156, "v1" : 157 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 158, "v1" : 159 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 160, "v1" : 161 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 162, "v1" : 163 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 164, "v1" : 165 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 166, "v1" : 167 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 168, "v1" : 169 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 170, "v1" : 171 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 172, "v1" : 41 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 173, "v1" : 43, "_selected" : true },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 174, "v1" : 38 },

		{ "curve" : 0, "vis" : true, "color" : "FFE438", "bCoef" : 0.1, "trait" : "line", "v0" : 175, "v1" : 44 },

		{ "curve" : 0, "vis" : true, "color" : "424242", "bCoef" : 0.1, "trait" : "line", "v0" : 176, "v1" : 177 },

		{ "curve" : 0, "vis" : true, "color" : "424242", "bCoef" : 0.1, "trait" : "line", "v0" : 178, "v1" : 179 },

		{ "curve" : 0, "vis" : true, "color" : "424242", "bCoef" : 0.1, "trait" : "line", "v0" : 180, "v1" : 181 },

		{ "curve" : 0, "vis" : true, "color" : "424242", "bCoef" : 0.1, "trait" : "line", "v0" : 182, "v1" : 183 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 184, "v1" : 185 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 186, "v1" : 187 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 188, "v1" : 189 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 190, "v1" : 191 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 192, "v1" : 185 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 193, "v1" : 187 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 194, "v1" : 189 },

		{ "curve" : 0, "vis" : true, "color" : "c49d01", "bCoef" : 0.1, "trait" : "line", "v0" : 195, "v1" : 191 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "696969", "bCoef" : 0.1, "trait" : "line", "v0" : 196, "v1" : 197 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "696969", "bCoef" : 0.1, "trait" : "line", "v0" : 198, "v1" : 199 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 200, "v1" : 201 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 202, "v1" : 203 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 204, "v1" : 205 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 206, "v1" : 207 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 208, "v1" : 201 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 209, "v1" : 203 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 210, "v1" : 205 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 211, "v1" : 207 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 212, "v1" : 208 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 213, "v1" : 209 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 214, "v1" : 210 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 215, "v1" : 211 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 216, "v1" : 212 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 217, "v1" : 213 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 218, "v1" : 214 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 219, "v1" : 215 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 220, "v1" : 216 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 221, "v1" : 217 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 222, "v1" : 218 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 223, "v1" : 219 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 224, "v1" : 220 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 225, "v1" : 221 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 226, "v1" : 222 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 227, "v1" : 223 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 228, "v1" : 224 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 229, "v1" : 225 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 230, "v1" : 226 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 231, "v1" : 227 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 232, "v1" : 228 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 233, "v1" : 229 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 234, "v1" : 230 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 235, "v1" : 231 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 236, "v1" : 232 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 237, "v1" : 233 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 238, "v1" : 234 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 239, "v1" : 235 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 240, "v1" : 236 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 240, "v1" : 237 },

		{ "curve" : 14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 241, "v1" : 238 },

		{ "curve" : -14.808917918539104, "vis" : true, "color" : "757575", "bCoef" : 0.1, "trait" : "line", "v0" : 241, "v1" : 239 }



	],



	"goals" : [

		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },

		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }



	],



	"discs" : [

		{ "radius" : 5, "pos" : [-550,80 ], "color" : "EDFCFB", "trait" : "goalPost", "y" : 80 },

		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "EDFCFB", "trait" : "goalPost", "y" : -80, "x" : -560 },

		{ "radius" : 5, "pos" : [550,80 ], "color" : "EDFCFB", "trait" : "goalPost", "y" : 80 },

		{ "radius" : 5, "pos" : [550,-80 ], "color" : "EDFCFB", "trait" : "goalPost", "y" : -80 },

		

		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },

		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },

		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },

		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }



	],



	"planes" : [

		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },

		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },

		

		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },

		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },

		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },

		

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },

		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }



	],



	"traits" : {

		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },

		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },

		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },

		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },

		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }



	},



	"playerPhysics" : {

		"bCoef" : 0,

		"acceleration" : 0.11,

		"kickingAcceleration" : 0.083,

		"kickStrength" : 5



	},



	"ballPhysics" : {

		"radius" : 6.25,

		"bCoef" : 0.4,

		"invMass" : 1.5,

		"damping" : 0.99,

		"color" : "FFCC00"



	}

}`



var consudfut = `{



	"name" : "CONSUDFUT",



	"width" : 620,



	"height" : 270,



	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80 },



	"vertexes" : [

		/* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },

		/* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },

		/* 2 */ { "x" : 0, "y" : 270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 5 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 6 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 7 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 8 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 9 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 10 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 11 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 12 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 13 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },

		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 18 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },

		/* 19 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },

		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },

		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },

		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },

		/* 26 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },

		/* 27 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },

		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 34 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 35 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 36 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 37 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		/* 38 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },

		/* 39 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },

		/* 40 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },

		/* 41 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },

		/* 42 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },

		/* 43 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },

		/* 44 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },

		/* 45 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },

		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },

		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },

		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },

		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },

		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },

		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },

		/* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },

		/* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "cMask" : [ ] },

		/* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },

		/* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },

		/* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },

		/* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },

		/* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },

		/* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },

		/* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },

		/* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },

		/* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },

		/* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },

		/* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },

		/* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },

		/* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },

		/* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },

		/* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },

		/* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },

		/* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },

		/* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },

		/* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },

		/* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },

		/* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },

		/* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },

		/* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },

		/* 130 */ { "x" : -43.8061584510895, "y" : -38.4995303592663, "bCoef" : 0.1, "cMask" : [ ] },

		/* 131 */ { "x" : 44.45023325954412, "y" : -39.15849752755386, "bCoef" : 0.1, "cMask" : [ ] },

		/* 132 */ { "x" : 0.6350033322791966, "y" : 55.07380753756793, "bCoef" : 0.1, "cMask" : [ ] },

		/* 133 */ { "x" : -27.531930192391105, "y" : -36.5226288544036, "bCoef" : 0.1, "cMask" : [ ] },

		/* 134 */ { "x" : -20.646679775249467, "y" : -41.135399032416544, "bCoef" : 0.1, "cMask" : [ ] },

		/* 135 */ { "x" : -26.90599833628733, "y" : -32.5688258446782, "bCoef" : 0.1, "cMask" : [ ] },

		/* 136 */ { "x" : -12.50956564590028, "y" : -41.794366200704104, "bCoef" : 0.1, "cMask" : [ ] },

		/* 137 */ { "x" : -26.90599833628733, "y" : -27.297088498377686, "bCoef" : 0.1, "cMask" : [ ] },

		/* 138 */ { "x" : -6.87617894096622, "y" : -40.47643186412898, "bCoef" : 0.1, "cMask" : [ ] },

		/* 139 */ { "x" : -27.531930192391105, "y" : -21.366383983789603, "bCoef" : 0.1, "cMask" : [ ] },

		/* 140 */ { "x" : -0.6168603799283728, "y" : -38.4995303592663, "bCoef" : 0.1, "cMask" : [ ] },

		/* 141 */ { "x" : -25.028202767975973, "y" : -18.73051531063934, "bCoef" : 0.1, "cMask" : [ ] },

		/* 142 */ { "x" : 6.894321893317045, "y" : -36.5226288544036, "bCoef" : 0.1, "cMask" : [ ] },

		/* 143 */ { "x" : -22.524475343560827, "y" : -15.435679469201526, "bCoef" : 0.1, "cMask" : [ ] },

		/* 144 */ { "x" : 10.023981173835958, "y" : -33.227793012965776, "bCoef" : 0.1, "cMask" : [ ] },

		/* 145 */ { "x" : -20.020747919145684, "y" : -12.140843627763699, "bCoef" : 0.1, "cMask" : [ ] },

		/* 146 */ { "x" : 26.92414128863814, "y" : -24.661219825227423, "bCoef" : 0.1, "cMask" : [ ] },

		/* 147 */ { "x" : 25.672277576430574, "y" : -19.389482478926908, "bCoef" : 0.1, "cMask" : [ ] },

		/* 148 */ { "x" : -16.891088638626776, "y" : -10.163942122900995, "bCoef" : 0.1, "cMask" : [ ] },

		/* 149 */ { "x" : 24.420413864222997, "y" : -16.09464663748908, "bCoef" : 0.1, "cMask" : [ ] },

		/* 150 */ { "x" : -14.387361214211637, "y" : -7.528073449750742, "bCoef" : 0.1, "cMask" : [ ] },

		/* 151 */ { "x" : 25.672277576430574, "y" : -10.822909291188568, "bCoef" : 0.1, "cMask" : [ ] },

		/* 152 */ { "x" : -11.257701933692708, "y" : -5.551171944888049, "bCoef" : 0.1, "cMask" : [ ] },

		/* 153 */ { "x" : -9.379906365381359, "y" : -1.597368935162654, "bCoef" : 0.1, "cMask" : [ ] },

		/* 154 */ { "x" : 24.420413864222997, "y" : -8.187040618038303, "bCoef" : 0.1, "cMask" : [ ] },

		/* 155 */ { "x" : 15.657367878770032, "y" : -33.227793012965776, "bCoef" : 0.1, "cMask" : [ ] },

		/* 156 */ { "x" : 28.176005000845713, "y" : -28.61502283495281, "bCoef" : 0.1, "cMask" : [ ] },

		/* 157 */ { "x" : 6.894321893317045, "y" : 24.10235062805237, "bCoef" : 0.1, "cMask" : [ ] },

		/* 158 */ { "x" : -1.868724092135943, "y" : 18.17164611346429, "bCoef" : 0.1, "cMask" : [ ] },

		/* 159 */ { "x" : 16.909231590977594, "y" : -8.846007786325874, "bCoef" : 0.1, "cMask" : [ ] },

		/* 160 */ { "x" : 21.91668643980786, "y" : -5.551171944888049, "bCoef" : 0.1, "cMask" : [ ] },

		/* 161 */ { "x" : 6.268390037213253, "y" : 20.148547618326987, "bCoef" : 0.1, "cMask" : [ ] },

		/* 162 */ { "x" : -3.74651966044729, "y" : 8.946105757438378, "bCoef" : 0.1, "cMask" : [ ] },

		/* 163 */ { "x" : 20.038890871496513, "y" : -1.597368935162654, "bCoef" : 0.1, "cMask" : [ ] },

		/* 164 */ { "x" : 8.77211746162839, "y" : 16.853711776889163, "bCoef" : 0.1, "cMask" : [ ] },

		/* 165 */ { "x" : 1.260935188382989, "y" : 10.923007262301073, "bCoef" : 0.1, "cMask" : [ ] },

		/* 166 */ { "x" : 18.787027159288947, "y" : 2.3564340745627317, "bCoef" : 0.1, "cMask" : [ ] },

		/* 167 */ { "x" : 11.275844886043531, "y" : 14.876810272026468, "bCoef" : 0.1, "cMask" : [ ] },

		/* 168 */ { "x" : 5.016526325005683, "y" : 8.946105757438378, "bCoef" : 0.1, "cMask" : [ ] },

		/* 169 */ { "x" : 16.28329973487381, "y" : 4.992302747712997, "bCoef" : 0.1, "cMask" : [ ] },

		/* 170 */ { "x" : 7.520253749420822, "y" : 4.992302747712997, "bCoef" : 0.1, "cMask" : [ ] },

		/* 171 */ { "x" : 12.527708598251099, "y" : 11.581974430588641, "bCoef" : 0.1, "cMask" : [ ] },

		/* 172 */ { "x" : 11.275844886043531, "y" : 2.3564340745627317, "bCoef" : 0.1, "cMask" : [ ] },

		/* 173 */ { "x" : 15.03143602266624, "y" : 7.628171420863248, "bCoef" : 0.1, "cMask" : [ ] },

		/* 174 */ { "x" : -7.5021107970699985, "y" : 16.853711776889163, "bCoef" : 0.1, "cMask" : [ ] },

		/* 175 */ { "x" : 5.016526325005683, "y" : 27.397186469490194, "bCoef" : 0.1, "cMask" : [ ] },

		/* 176 */ { "x" : -5.62431522875865, "y" : 24.761317796339938, "bCoef" : 0.1, "cMask" : [ ] },

		/* 177 */ { "x" : 6.268390037213253, "y" : 32.00995664750315, "bCoef" : 0.1, "cMask" : [ ] },

		/* 178 */ { "x" : -4.37245151655108, "y" : 30.69202231092802, "bCoef" : 0.1, "cMask" : [ ] },

		/* 179 */ { "x" : 4.390594468901905, "y" : 35.963759657228536, "bCoef" : 0.1, "cMask" : [ ] },

		/* 180 */ { "x" : -3.74651966044729, "y" : 35.963759657228536, "bCoef" : 0.1, "cMask" : [ ] },

		/* 181 */ { "x" : 6.268390037213253, "y" : 40.5765298352415, "bCoef" : 0.1, "cMask" : [ ] },

		/* 182 */ { "x" : -3.120587804343512, "y" : 41.894464171816615, "bCoef" : 0.1, "cMask" : [ ] },

		/* 183 */ { "x" : 5.642458181109476, "y" : 44.530332844966885, "bCoef" : 0.1, "cMask" : [ ] },

		/* 184 */ { "x" : -15.013293070315415, "y" : -60.904414081043505, "bCoef" : 0.1, "cMask" : [ ] },

		/* 185 */ { "x" : 15.657367878770032, "y" : -59.58647974446836, "bCoef" : 0.1, "cMask" : [ ] },

		/* 186 */ { "x" : 10.64991302993975, "y" : -73.42479027850722, "bCoef" : 0.1, "cMask" : [ ] },

		/* 187 */ { "x" : -11.257701933692708, "y" : -73.42479027850722, "bCoef" : 0.1, "cMask" : [ ] },

		/* 188 */ { "x" : -68.21750083913709, "y" : -15.435679469201526, "bCoef" : 0.1, "cMask" : [ ] },

		/* 189 */ { "x" : -50.69140886823114, "y" : -1.597368935162654, "bCoef" : 0.1, "cMask" : [ ] },

		/* 190 */ { "x" : -53.821068148750044, "y" : -36.5226288544036, "bCoef" : 0.1, "cMask" : [ ] },

		/* 191 */ { "x" : -61.332250421995454, "y" : -36.5226288544036, "bCoef" : 0.1, "cMask" : [ ] },

		/* 192 */ { "x" : -44.43209030719327, "y" : 22.12544912318968, "bCoef" : 0.1, "cMask" : [ ] },

		/* 193 */ { "x" : -15.639224926419189, "y" : 56.391741874143044, "bCoef" : 0.1, "cMask" : [ ] },

		/* 194 */ { "x" : -31.913453185117618, "y" : 67.59418373503163, "bCoef" : 0.1, "cMask" : [ ] },

		/* 195 */ { "x" : -53.821068148750044, "y" : 47.82516868640471, "bCoef" : 0.1, "cMask" : [ ] },

		/* 196 */ { "x" : 16.909231590977594, "y" : 57.05070904243062, "bCoef" : 0.1, "cMask" : [ ] },

		/* 197 */ { "x" : 44.45023325954412, "y" : 21.46648195490212, "bCoef" : 0.1, "cMask" : [ ] },

		/* 198 */ { "x" : 53.83921110110087, "y" : 48.48413585469228, "bCoef" : 0.1, "cMask" : [ ] },

		/* 199 */ { "x" : 32.557527993572215, "y" : 67.59418373503163, "bCoef" : 0.1, "cMask" : [ ] },

		/* 200 */ { "x" : 52.587347388893306, "y" : -1.597368935162654, "bCoef" : 0.1, "cMask" : [ ] },

		/* 201 */ { "x" : 68.86157564759172, "y" : -16.09464663748908, "bCoef" : 0.1, "cMask" : [ ] },

		/* 202 */ { "x" : 60.09852966213873, "y" : -36.5226288544036, "bCoef" : 0.1, "cMask" : [ ] },

		/* 203 */ { "x" : 54.46514295720466, "y" : -36.5226288544036, "bCoef" : 0.1, "cMask" : [ ] },

		/* 204 */ { "x" : -48.187681443816, "y" : -51.01990655673002, "bCoef" : 0.1, "cMask" : [ ] },

		/* 205 */ { "x" : -28.78379390459866, "y" : -56.29164390303053, "bCoef" : 0.1, "cMask" : [ ] },

		/* 206 */ { "x" : -27.531930192391105, "y" : -67.49408576391914, "bCoef" : 0.1, "cMask" : [ ] },

		/* 207 */ { "x" : 26.298209432534364, "y" : -68.81202010049428, "bCoef" : 0.1, "cMask" : [ ] },

		/* 208 */ { "x" : 29.42786871305328, "y" : -54.97370956645541, "bCoef" : 0.1, "cMask" : [ ] },

		/* 209 */ { "x" : 50.08361996447817, "y" : -51.01990655673002, "bCoef" : 0.1, "cMask" : [ ] },

		/* 210 */ { "x" : 70.73937121590305, "y" : 2.3564340745627317, "bCoef" : 0.1, "cMask" : [ ] },

		/* 211 */ { "x" : 65.10598451096902, "y" : 32.00995664750315, "bCoef" : 0.1, "cMask" : [ ] },

		/* 212 */ { "x" : 55.71700666941223, "y" : 11.581974430588641, "bCoef" : 0.1, "cMask" : [ ] },

		/* 213 */ { "x" : -10.631770077588927, "y" : 74.18385541790731, "bCoef" : 0.1, "cMask" : [ ] },

		/* 214 */ { "x" : 12.527708598251099, "y" : 74.84282258619487, "bCoef" : 0.1, "cMask" : [ ] },

		/* 215 */ { "x" : -0.6168603799283728, "y" : 64.29934789359383, "bCoef" : 0.1, "cMask" : [ ] },

		/* 216 */ { "x" : -63.835977846410614, "y" : 31.350989479215585, "bCoef" : 0.1, "cMask" : [ ] },

		/* 217 */ { "x" : -55.07293186095765, "y" : 12.240941598876205, "bCoef" : 0.1, "cMask" : [ ] },

		/* 218 */ { "x" : -70.72122826355225, "y" : 4.333335579425423, "bCoef" : 0.1, "cMask" : [ ] }



	],



	"segments" : [

		{ "v0" : 6, "v1" : 7, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "F8F8F8" },

		{ "v0" : 7, "v1" : 8, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "F8F8F8" },

		{ "v0" : 8, "v1" : 9, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "F8F8F8" },

		{ "v0" : 10, "v1" : 11, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "F8F8F8" },

		{ "v0" : 11, "v1" : 12, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "F8F8F8" },

		{ "v0" : 12, "v1" : 13, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "F8F8F8" },

		{ "v0" : 2, "v1" : 3, "bCoef" : 0.1, "vis" : false, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		{ "v0" : 3, "v1" : 4, "bCoef" : 0.15, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "color" : "F8F8F8" },

		{ "v0" : 4, "v1" : 3, "bCoef" : 0.15, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "color" : "F8F8F8" },

		{ "v0" : 4, "v1" : 5, "bCoef" : 0.1, "vis" : false, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },

		{ "v0" : 14, "v1" : 15, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 16, "v1" : 17, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 18, "v1" : 19, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 20, "v1" : 21, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 22, "v1" : 23, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 24, "v1" : 25, "bCoef" : 0, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 26, "v1" : 27, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 28, "v1" : 29, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "F8F8F8" },

		{ "v0" : 30, "v1" : 31, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "F8F8F8" },

		{ "v0" : 38, "v1" : 39, "vis" : false, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 40, "v1" : 41, "vis" : false, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 42, "v1" : 43, "vis" : false, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 44, "v1" : 45, "vis" : false, "cMask" : ["ball" ], "color" : "F8F8F8" },

		{ "v0" : 46, "v1" : 47, "bCoef" : 0.1, "cMask" : [ ], "color" : "6D6D6D" },

		{ "v0" : 48, "v1" : 49, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 50, "v1" : 51, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 64, "v1" : 65, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 67, "v1" : 66, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 68, "v1" : 69, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 70, "v1" : 71, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 67, "v1" : 71, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 73, "v1" : 72, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 74, "v1" : 75, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 76, "v1" : 77, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 78, "v1" : 79, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 80, "v1" : 81, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 82, "v1" : 83, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 84, "v1" : 85, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 86, "v1" : 87, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 88, "v1" : 89, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 91, "v1" : 90, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 92, "v1" : 93, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 95, "v1" : 94, "bCoef" : 0.1, "curve" : 89.99999999999999, "curveF" : 1.0000000000000002, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 96, "v1" : 97, "bCoef" : 0.1, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 99, "v1" : 98, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 98, "v1" : 99, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 101, "v1" : 100, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 100, "v1" : 101, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 103, "v1" : 102, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 102, "v1" : 103, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 105, "v1" : 104, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 104, "v1" : 105, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 107, "v1" : 106, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 106, "v1" : 107, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 109, "v1" : 108, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 108, "v1" : 109, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 111, "v1" : 110, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 110, "v1" : 111, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 113, "v1" : 112, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 112, "v1" : 113, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 115, "v1" : 114, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 114, "v1" : 115, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 117, "v1" : 116, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 116, "v1" : 117, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 119, "v1" : 118, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 118, "v1" : 119, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 121, "v1" : 120, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 120, "v1" : 121, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 123, "v1" : 122, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 122, "v1" : 123, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 125, "v1" : 124, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 124, "v1" : 125, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 127, "v1" : 126, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 126, "v1" : 127, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 129, "v1" : 128, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 128, "v1" : 129, "bCoef" : 0.1, "curve" : 180, "curveF" : 6.123233995736766e-17, "cMask" : [ ], "color" : "F8F8F8" },

		{ "v0" : 130, "v1" : 131, "bCoef" : 0.1, "curve" : 55.0418738806857, "curveF" : 1.9192694531816794, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 132, "v1" : 130, "bCoef" : 0.1, "curve" : 63.80475315944812, "curveF" : 1.606418655244001, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 131, "v1" : 132, "bCoef" : 0.1, "curve" : 65.78647774474132, "curveF" : 1.5461646860185265, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 133, "v1" : 134, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 135, "v1" : 136, "bCoef" : 0.1, "curve" : 26.779555382423606, "curveF" : 4.20088509271945, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 137, "v1" : 138, "bCoef" : 0.1, "curve" : 36.76938392407292, "curveF" : 3.0087946217437396, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 139, "v1" : 140, "bCoef" : 0.1, "curve" : 51.83323515641463, "curveF" : 2.057899510788943, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 141, "v1" : 142, "bCoef" : 0.1, "curve" : 53.30359267737765, "curveF" : 1.9924529032702278, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 143, "v1" : 144, "bCoef" : 0.1, "curve" : 60.07751449383555, "curveF" : 1.729348207336426, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 145, "v1" : 146, "bCoef" : 0.1, "curve" : 89.45574512083151, "curveF" : 1.0095444428998817, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 148, "v1" : 147, "bCoef" : 0.1, "curve" : 102.45480740588744, "curveF" : 0.8032334735484312, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 150, "v1" : 149, "bCoef" : 0.1, "curve" : 98.64189217739812, "curveF" : 0.8594998492745232, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 152, "v1" : 151, "bCoef" : 0.1, "curve" : 106.85776181632164, "curveF" : 0.7418837480143707, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 153, "v1" : 154, "bCoef" : 0.1, "curve" : 112.0718364621567, "curveF" : 0.6735967992442464, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 155, "v1" : 156, "bCoef" : 0.1, "curve" : 39.31727870256495, "curveF" : 2.7992572371286544, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 157, "v1" : 158, "bCoef" : 0.1, "curve" : 25.75850303086555, "curveF" : 4.373506539249833, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 158, "v1" : 159, "bCoef" : 0.1, "curve" : 165.49446426191085, "curveF" : 0.12726515855098836, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 159, "v1" : 160, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 161, "v1" : 162, "bCoef" : 0.1, "curve" : 47.137266521162466, "curveF" : 2.2923294668132193, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 162, "v1" : 163, "bCoef" : 0.1, "curve" : 160.4943569059155, "curveF" : 0.17188212656331267, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 164, "v1" : 165, "bCoef" : 0.1, "curve" : 37.91347781173524, "curveF" : 2.911349994511711, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 165, "v1" : 166, "bCoef" : 0.1, "curve" : -170.91378452787905, "curveF" : -0.07945878388418817, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 167, "v1" : 168, "bCoef" : 0.1, "curve" : 25.379018377212272, "curveF" : 4.441141366820257, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 168, "v1" : 169, "bCoef" : 0.1, "curve" : -154.35238625431384, "curveF" : -0.2276314228129788, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 171, "v1" : 170, "bCoef" : 0.1, "curve" : 19.58786052122603, "curveF" : 5.793041379712317, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 170, "v1" : 172, "bCoef" : 0.1, "curve" : 91.99905457929238, "curveF" : 0.9657047191917068, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 172, "v1" : 173, "bCoef" : 0.1, "curve" : 19.86335792756488, "curveF" : 5.711096065164696, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 175, "v1" : 174, "bCoef" : 0.1, "curve" : 33.16860404390448, "curveF" : 3.3577932742294903, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 177, "v1" : 176, "bCoef" : 0.1, "curve" : 20.327171385241076, "curveF" : 5.57810506925224, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 179, "v1" : 178, "bCoef" : 0.1, "curve" : 20.338390357823744, "curveF" : 5.574962573214282, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 181, "v1" : 180, "bCoef" : 0.1, "curve" : 20.541992047371902, "curveF" : 5.518522743881565, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 183, "v1" : 182, "bCoef" : 0.1, "curve" : 20.764104063252542, "curveF" : 5.458200655810493, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 185, "v1" : 184, "bCoef" : 0.1, "curve" : 19.066800323171318, "curveF" : 5.954438959901189, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 185, "v1" : 186, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 187, "v1" : 186, "bCoef" : 0.1, "curve" : 27.426782389674027, "curveF" : 4.098002138592818, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 187, "v1" : 184, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 188, "v1" : 189, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 189, "v1" : 190, "bCoef" : 0.1, "curve" : 27.46879488948831, "curveF" : 4.09148828113611, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 190, "v1" : 191, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 188, "v1" : 191, "bCoef" : 0.1, "curve" : 27.184364971583168, "curveF" : 4.135973628150409, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 193, "v1" : 192, "bCoef" : 0.1, "curve" : 23.710474000485927, "curveF" : 4.76378236383505, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 193, "v1" : 194, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 194, "v1" : 195, "bCoef" : 0.1, "curve" : 40.98844813843045, "curveF" : 2.6754436719641874, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 195, "v1" : 192, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 197, "v1" : 196, "bCoef" : 0.1, "curve" : 30.318028620420044, "curveF" : 3.691044837846527, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 197, "v1" : 198, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 198, "v1" : 199, "bCoef" : 0.1, "curve" : 36.95330765139504, "curveF" : 2.992736962655756, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 199, "v1" : 196, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 201, "v1" : 200, "bCoef" : 0.1, "curve" : 16.495238340528864, "curveF" : 6.898898641242117, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 202, "v1" : 201, "bCoef" : 0.1, "curve" : 27.830651409141314, "curveF" : 4.036182516554054, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 202, "v1" : 203, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 203, "v1" : 200, "bCoef" : 0.1, "curve" : 19.16398634053519, "curveF" : 5.923676236369026, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 205, "v1" : 204, "bCoef" : 0.1, "curve" : 18.19733959255067, "curveF" : 6.244136880144105, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 205, "v1" : 206, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 204, "v1" : 206, "bCoef" : 0.1, "curve" : 28.7625038859877, "curveF" : 3.90004035808781, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 207, "v1" : 208, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 208, "v1" : 209, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 207, "v1" : 209, "bCoef" : 0.1, "curve" : 31.69696546369276, "curveF" : 3.5225452554390224, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 210, "v1" : 211, "bCoef" : 0.1, "curve" : 38.826647293370115, "curveF" : 2.8375476328069937, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 211, "v1" : 212, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 212, "v1" : 210, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 214, "v1" : 213, "bCoef" : 0.1, "curve" : 44.62052262828283, "curveF" : 2.437008667381563, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 214, "v1" : 215, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 215, "v1" : 213, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 217, "v1" : 216, "bCoef" : 0.1, "curve" : 19.353930459480818, "curveF" : 5.864436070229189, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 217, "v1" : 218, "bCoef" : 0.1, "cMask" : [ ], "color" : "B2AFAE" },

		{ "v0" : 216, "v1" : 218, "bCoef" : 0.1, "curve" : 40.198928638087644, "curveF" : 2.7327075970120887, "cMask" : [ ], "color" : "B2AFAE" }



	],



	"planes" : [

		{ "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },

		{ "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },

		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },

		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },

		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },

		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }



	],



	"goals" : [

		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },

		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }



	],



	"discs" : [

		{ "radius" : 6.25, "bCoef" : 0.4, "invMass" : 1.5, "color" : "FFCC00", "cGroup" : ["ball","kick","score" ] },

		{ "pos" : [-550,80 ], "radius" : 5, "invMass" : 0, "color" : "FF6666" },

		{ "pos" : [-550,-80 ], "radius" : 5, "invMass" : 0, "color" : "FF6666" },

		{ "pos" : [550,80 ], "radius" : 5, "invMass" : 0, "color" : "6666FF" },

		{ "pos" : [550,-80 ], "radius" : 5, "invMass" : 0, "color" : "6666FF" },

		{ "pos" : [-550,240 ], "radius" : 3, "bCoef" : 0.1, "invMass" : 0, "color" : "FFCC00", "cMask" : [ ] },

		{ "pos" : [-550,-240 ], "radius" : 3, "bCoef" : 0.1, "invMass" : 0, "color" : "FFCC00", "cMask" : [ ] },

		{ "pos" : [550,-240 ], "radius" : 3, "bCoef" : 0.1, "invMass" : 0, "color" : "FFCC00", "cMask" : [ ] },

		{ "pos" : [550,240 ], "radius" : 3, "bCoef" : 0.1, "invMass" : 0, "color" : "FFCC00", "cMask" : [ ] }



	],



	"playerPhysics" : {

		"bCoef" : 0,

		"acceleration" : 0.11,

		"kickingAcceleration" : 0.083



	},



	"ballPhysics" : "disc0",



	"spawnDistance" : 350,



	"traits" : {

		



	}

}`

var futsalx3 = `{



	"name" : "Futsal x3  by Bazinga from HaxMaps",



	"width" : 620,



	"height" : 270,



	"spawnDistance" : 350,



	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },



	"vertexes" : [

		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },

		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },

		

		/* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" },

		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },

		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },

		/* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" },

		

		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },

		/* 7 */ { "x" : -590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },

		/* 8 */ { "x" : -590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },

		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },

		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },

		/* 11 */ { "x" : 590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },

		/* 12 */ { "x" : 590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },

		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },

		

		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] },

		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },

		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] },

		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },

		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] },

		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },

		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] },

		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },

		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },

		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },

		

		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },

		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },

		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },

		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },

		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },

		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },

		

		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },

		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },

		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },

		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },

		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },

		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },

		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },

		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },

		

		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" },

		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" },

		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },

		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },

		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },

		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },

		/* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "trait" : "line" },

		/* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },

		/* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "trait" : "line" },

		/* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "trait" : "line" },

		/* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },

		/* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },

		/* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },

		/* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },

		/* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },

		/* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },

		/* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },

		/* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },

		/* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },

		/* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },

		/* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },

		/* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },

		/* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },

		/* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },

		/* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },

		/* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },

		/* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },

		/* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },

		/* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },

		/* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },

		/* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },

		/* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },

		/* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },

		/* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },

		/* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }



	],



	"segments" : [

		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },

		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },

		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },

		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },

		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 590 },

		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },

		

		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },

		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },

		

		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },

		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },

		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },

		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },

		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },

		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },

		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },

		

		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },

		

		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },

		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },

		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },

		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },

		

		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 },

		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 },

		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 },

		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },

		{ "v0" : 66, "v1" : 67, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 69, "v1" : 68, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 70, "v1" : 71, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 67, "v1" : 71, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 73, "v1" : 72, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },

		{ "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },

		{ "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },

		{ "v0" : 80, "v1" : 81, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },

		{ "v0" : 82, "v1" : 83, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },

		{ "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },

		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },

		{ "v0" : 89, "v1" : 88, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 91, "v1" : 90, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 92, "v1" : 93, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 94, "v1" : 95, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },

		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },

		{ "v0" : 99, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 101, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 100, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 103, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 102, "v1" : 103, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 105, "v1" : 104, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 104, "v1" : 105, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },

		{ "v0" : 107, "v1" : 106, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 106, "v1" : 107, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 109, "v1" : 108, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 108, "v1" : 109, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 111, "v1" : 110, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 110, "v1" : 111, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 113, "v1" : 112, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 112, "v1" : 113, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },

		{ "v0" : 115, "v1" : 114, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 114, "v1" : 115, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 117, "v1" : 116, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 116, "v1" : 117, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 119, "v1" : 118, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 118, "v1" : 119, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 121, "v1" : 120, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 120, "v1" : 121, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },

		{ "v0" : 123, "v1" : 122, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 122, "v1" : 123, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 125, "v1" : 124, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 124, "v1" : 125, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 127, "v1" : 126, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 126, "v1" : 127, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 129, "v1" : 128, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },

		{ "v0" : 128, "v1" : 129, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }



	],



	"goals" : [

		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },

		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }



	],



	"discs" : [

		{ "radius" : 5, "pos" : [-550,80 ], "color" : "FF6666", "trait" : "goalPost", "y" : 80 },

		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "FF6666", "trait" : "goalPost", "y" : -80, "x" : -560 },

		{ "radius" : 5, "pos" : [550,80 ], "color" : "6666FF", "trait" : "goalPost", "y" : 80 },

		{ "radius" : 5, "pos" : [550,-80 ], "color" : "6666FF", "trait" : "goalPost", "y" : -80 },

		

		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },

		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },

		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },

		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }



	],



	"planes" : [

		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },

		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },

		

		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },

		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },

		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },

		

		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },

		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }



	],



	"traits" : {

		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },

		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },

		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },

		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },

		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }



	},



	"playerPhysics" : {

		"bCoef" : 0,

		"acceleration" : 0.11,

		"kickingAcceleration" : 0.083,

		"kickStrength" : 5



	},



	"ballPhysics" : {

		"radius" : 6.25,

		"bCoef" : 0.4,

		"invMass" : 1.5,

		"damping" : 0.99,

		"color" : "FFCC00"



	}

}`

room.setCustomStadium(metropolitano);

/* OPTIONS */



const maxTeamSize = 20;

/* PLAYERS */



const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };

var extendedP = [];

const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };

const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}

var teamR;

var teamB;

var teamS;

var gameocorring;



/* GAME */



var officialAdms = [];

var colorAdm = [];

var lastTeamTouched;

var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)

var countAFK = false; // Created to get better track of activity

var activePlay = false; // Created to get better track of the possession

var banList = []; // Getting track of the bans, so we can unban ppl if we want

var muteList = [];



/* STATS */



var game;

var GKList = ["",""];

var Rposs = 0;

var Bposs = 0;

var penativo = true;

var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed

var ballSpeed;

var lastWinner = Team.SPECTATORS;

var streakr = 0;

var streakb = 0;

var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...

var allReds = []; // ... those who came in a very unequal game.

var map = 3;



/* OBJECTS */



function Goal(time, team, striker, assist) {

	this.time = time;

	this.team = team;

	this.striker = striker;

	this.assist = assist;

}



function Game(date, scores, goals) {

	this.date = date;

	this.scores = scores;

	this.goals = goals;

}



/* COLORS */



var welcomeColor = 0xC4FF65;

var AnnouncementColor = 0xFFEFD6;

var announcementColor = 0xFFEFD6;

var redColor = 0xFF1F17;

var blueColor = 0x0080ff;

var pinkColor = 0xFF1CA4;

var yellowColor = 0xFFFF1F;

var strongRed = 0xFF0000;

var colorOne = 0xFF8400;

var colorTwo = 0xFFAA4F;

var colorThree = 0xFFC382;

var colorFour = 0xE69500;

var colorBan = 0x3A96DD;

var colorPass = 0xFFC83D;

var colorHelp = 0xF03A17;

var redUni = 0xFF1F17;

var blueUni = 0x0080ff;

var privateMessageColor = 0xFF6EFA;

var defaultColor = null;



/* FUNCTIONS */

function updateAdmins() { 

  // pega todos os jogadaores com exceรงรฃo do host.

  var players = room.getPlayerList().filter((player) => player.id != 0 );

  if ( players.length == 0 ) return; // nenhum player sobrando, nao faz nada.

  if ( players.find((player) => player.admin) != null ) return; // Hรก um admin, nรฃo fazer nada.

}



/* AUXILIARY FUNCTIONS */



function getRandomInt(max) { // returns a random number from 0 to max-1

	return Math.floor(Math.random() * Math.floor(max)); 

}



function getTime(scores) { // returns the current time of the game

	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"

}



function pointDistance(p1, p2) {

	var d1 = p1.x - p2.x;

	var d2 = p1.y - p2.y;

	return Math.sqrt(d1 * d1 + d2 * d2);

}



/* EVENTOS */



// Bot Functions

function SendMsg(msg, ignoreQuiteMode=true){

	if(!ignoreQuiteMode && _quiteMode){

		return;

	}

	room.sendAnnouncement(msg, null, announcementColor, "bold", null);

};

function QuiteBot(){if(!_quiteMode){SendMsg(_stringQuiteModeOn,true);}else{SendMsg(_stringQuiteModeOff,true)}_quiteMode=!_quiteMode;}



// Ban-Removal-System Functions

function RemoveBans(){

	SendMsg(_stringBanRemoval,false);

	room.clearBans();

}



/* BUTTONS */



function topBtn() {

    if (teamS.length == 0) {

        return;

    }

    else {

        if (teamR.length == teamB.length) {

            if (teamS.length > 1) {

                room.setPlayerTeam(teamS[0].id, Team.RED);

                room.setPlayerTeam(teamS[1].id, Team.BLUE);

            }

            return;

        }

        else if (teamR.length < teamB.length) {

            room.setPlayerTeam(teamS[0].id, Team.RED);

        }

        else {

            room.setPlayerTeam(teamS[0].id, Team.BLUE);

        }

    }

}



function resetBtn() {

    resettingTeams = true;

    setTimeout(function() { resettingTeams = false; }, 100);

    if (teamR.length <= teamB.length) {

        for (var i = 0; i < teamR.length; i++) {

            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);

            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);

        }

        for (var i = teamR.length; i < teamB.length; i++) {

            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);

        }

    }

    else {

        for (var i = 0; i < teamB.length; i++) {

            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);

            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);

        }

        for (var i = teamB.length; i < teamR.length; i++) {

            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);

        }

    }

}



function blueToSpecBtn() {

    resettingTeams = true;

    setTimeout(function() { resettingTeams = false; }, 100);

    for (var i = 0; i < teamB.length; i++) {

        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);

    }

}



function redToSpecBtn() {

    resettingTeams = true;

    setTimeout(function() { resettingTeams = false; }, 100);

    for (var i = 0; i < teamR.length; i++) {

        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);

    }

}



function blueToRedBtn() {

    resettingTeams = true;

    setTimeout(() => { resettingTeams = false; }, 100);

    for (var i = 0; i < teamB.length; i++) {

        room.setPlayerTeam(teamB[i].id, Team.RED);

    }

}



/* GAME FUNCTIONS */



function endGame(winner) { // handles the end of a game : no stopGame function inside

	const scores = room.getScores();

	game.scores = scores;

	const loser = 

		winner == 1 ? 2 : 1 ;

	Rposs = Rposs/(Rposs+Bposs);

	Bposs = 1 - Rposs;

	lastWinner = winner;

	if (winner == Team.RED) {

		streakr++;

		streakb = 0;

		room.sendAnnouncement("🥇 O time vermelho venceu por " + scores.red + "-" + scores.blue + " e está com " + streakr + " vitórias seguidas (🔥).", null, announcementColor, "bold", null);

	}

	else if (winner == Team.BLUE) {

		streakb++;

		streakr = 0;

		room.sendAnnouncement("🥇 O time azul venceu por " + scores.blue + "-" + scores.red + " e está com " + streakb + " vitórias seguidas (🔥).", null, announcementColor, "bold", null);

	}

	

    room.sendAnnouncement("🤼 O time vermelho (🔴) teve " + (Rposs*100).toPrecision(3).toString() + "% de posse de bola enquanto o time azul (🔵) teve " + (Bposs*100).toPrecision(3).toString() + "%.", null, announcementColor, "bold", null);

    scores.red == 0 ? room.sendAnnouncement(" 🛡️ " + GKList[1].name + " não tomou nenhum gol!", null, announcementColor, "bold", null) : scores.blue == 0 ? room.sendAnnouncement(" 🛡️ " + GKList[0].name + " não tomou nenhum gol!", null, announcementColor, "bold", null) : null;



	room.stopGame();



}



/* PLAYER FUNCTIONS */



function updateList(number, team) {

    if (room.getScores() != null) {

        if (team == Team.RED) {

            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));

            

        }

        else if (team == Team.BLUE) {

            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));

        }

    }

}



function updateTeams() { // update the players' list and all the teams' list

	players = room.getPlayerList().filter((player) => player.id != 0);

	teamR = players.filter(p => p.team === Team.RED);

	teamB = players.filter(p => p.team === Team.BLUE);

	teamS = players.filter(p => p.team === Team.SPECTATORS);

}



function getAuth(player) {

	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;

}



function getAFK(player) {

	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;

}



function setAFK(player, value) {

	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);

}



function getActivity(player) {

	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;

}



function setActivity(player, value) {

	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);

}



function getGK(player) {

	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;

}



function setGK(player, value) {

	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);

}



function getMute(player) {

	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;

}



function setMute(player, value) {

	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);

}



/* STATS FUNCTIONS */



function getLastTouchOfTheBall() {

	const ballPosition = room.getBallPosition();

	updateTeams();

	for (var i = 0; i < players.length; i++) {

		if (players[i].position != null) {

			var distanceToBall = pointDistance(players[i].position, ballPosition);

			if (distanceToBall < triggerDistance) {

				!activePlay ? activePlay = true : null;

				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {

					lastPlayersTouched[1] = lastPlayersTouched[0];

					lastPlayersTouched[0] = players[i];

				}

				lastTeamTouched = players[i].team;

			}

		}

	}

}



function getStats() { // gives possession, ball speed and GK of each team

	if (activePlay) {

		updateTeams();

		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;

		var ballPosition = room.getBallPosition();

		point[1] = point[0];

		point[0] = ballPosition;

		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;

		var k = [-1, Infinity];

		for (var i = 0; i < teamR.length; i++) {

			if (teamR[i].position.x < k[1]) {

				k[0] = teamR[i];

				k[1] = teamR[i].position.x;

			}

		}

		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;

		k = [-1, -Infinity];

		for (var i = 0; i < teamB.length; i++) {

			if (teamB[i].position.x > k[1]) {

				k[0] = teamB[i];

				k[1] = teamB[i].position.x;

			}

		}

		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;

		findGK();

	}

}



function findGK() {

	var tab = [[-1,""], [-1,""]];

	for (var i = 0; i < extendedP.length ; i++) {

		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {

			if (tab[0][0] < extendedP[i][eP.GK]) {

				tab[0][0] = extendedP[i][eP.GK];

				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);

			}

		}

		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {

			if (tab[1][0] < extendedP[i][eP.GK]) {

				tab[1][0] = extendedP[i][eP.GK];

				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);

			}

		}

	}

	GKList = [tab[0][1], tab[1][1]];

}



function initPlayerStats(player){

    if (stats.get(player.name)) return;

    stats.set(player.name, [0, 0, 0, 0, 0, 0, 0, 0, 0]) // goals, assists, wins, loses, og, cs

}



/* EVENTS */



var senhaADM = "!superpass888"

var senhaCor = "!kroonlindo069"

var adminColor = [];

var messageColor;

var colorControl = [];

var arm = new Map();

var stats = new Map();

var teste = true;

var permis = false;

var senhaperma = "!visita";

var specoff, chatoff, alloff = false;

var topontuadores = [];



var conns = [];



var playersConn = {};



if(localStorage.getItem("conns")) {

	conns = JSON.parse(localStorage.getItem("conns"))

}else{

	var conn = JSON.stringify(conns);



	localStorage.setItem("conns", conn)

}



/* PLAYER MOVEMENT */



room.setTimeLimit(3);

room.setScoreLimit(3);



room.onPlayerJoin = function(player) {



	for(let i = 0; i < conns.length; i++) {

		if(conns[i] == player.conn) {

			room.kickPlayer(player.id, "🚨👮‍♂️ Você está na lista negra da sala!", true)

			break;

		}

	}



	var ps;



	arm.set(player.id, [player.conn, 0, 0, "", 0, false, 0, false]);



	if (!(localStorage.getItem("status"+player.name))){



		initPlayerStats(player);



		var ps = JSON.stringify(stats.get(player.name));



		localStorage.setItem(("status"+player.name), ps);



	}else{



		var ps = JSON.parse(localStorage.getItem("status"+player.name));

		stats.set(player.name, [ps[0], ps[1], ps[2], ps[3], ps[4], ps[5], ps[6], ps[7], ps[8]]);



    }



    var players = room.getPlayerList().filter((player) => player.id != 0);



    for (i = 0; i < players.length-1; i++){

        if (player.conn == arm.get(players[i].id)[0] && player.id != players[i].id){

            room.kickPlayer(player.id,"Alguém, com a sua mesma rede, já está na sala!", false);

            room.kickPlayer(players[i].id,"Alguém, com a sua mesma rede, está tentando entrar na sala!", false);

        	return false;

        }

	}



	if (officialAdms.includes(player.name)) { // se o nome dele estiver na var

		officialAdms.splice(officialAdms.indexOf(player.name), 1); // tirando o nome do player da var

 	}

	

	if (colorAdm.includes(player.name)) { // se o nome dele estiver na var

		colorAdm.splice(colorAdm.indexOf(player.name), 1); // tirando o nome do player da var

	}



	updateAdmins();

	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);

    room.sendAnnouncement(`👋🏼 Eai, ${player.name}! de boa? esta sala é da ??!`, player.id, welcomeColor, "bold", null);

	updateTeams();



	playersConn[player.name] = player.conn

}



room.onPlayerTeamChange = function(changedPlayer, byPlayer) {

	if (changedPlayer.id == 0) {

        room.setPlayerTeam(0, Team.SPECTATORS);

        return;

    }

    if (changedPlayer.team == Team.SPECTATORS) {

        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);

    }

    updateTeams();

	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {

		room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);

		room.sendAnnouncement("💤 " + changedPlayer.name + " está AFK e não pode ser movido.", null, announcementColor, "bold", null);

		return;

	}

	if(tPos.hasOwnProperty(changedPlayer.name)){

		if(tPos[changedPlayer.name][0] == "GK"){

			changedPlayer.team == 1 ? GKList = [null,GKList[1]] : GKList = [GKList[0], null]

		}

		delete tPos[changedPlayer.name]

		room.setPlayerAvatar(changedPlayer.id, null)

		room.pauseGame(true)

	}

	updateTeams();

	if (room.getScores() != null) {

		var scores = room.getScores();

		if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {

			(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);

		}

	}

	if (changedPlayer.team == Team.SPECTATORS) {

		setActivity(changedPlayer, 0);

	}



	changedPlayer.team == 1 ? room.setPlayerDiscProperties(changedPlayer.id, {x: -750, y: 0}) : changedPlayer.team = 2 ? room.setPlayerDiscProperties(changedPlayer.id, {x: 750, y: 0}) : null;

}



var players = room.getPlayerList().filter((player) => player.id != 0 );



room.onPlayerLeave = function(player) {

	updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);

	updateTeams();

    updateAdmins();

}



room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {

	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;

	if (officialAdms.includes(kickedPlayer.name) && byPlayer != null) {

		if (ban && !officialAdms.includes(byPlayer.name)){

			room.clearBans();

			room.kickPlayer(byPlayer.id, "🚨👮‍♂️ Você expulsou um ADM oficial!", true);

		} else {

			room.sendAnnouncement("🚨👮‍♂️ Você não pode expulsar ou banir um ADM oficial!", byPlayer.id, null, colorBan, "bold", 1);

			room.kickPlayer(byPlayer.id, "🚨👮‍♂️ Não é permitido expulsar ou banir um ADM oficial!", true);

		}

	}

	

	if(officialAdms.includes(kickedPlayer.name)) room.clearBans();



	let banInfo = {};

  	banInfo.banned = kickedPlayer.name;

 	if (byPlayer != null) banInfo.admin = byPlayer.name;

  	banInfo.reason = reason;

 	banInfo.isBan = ban;

 	banInfo.time = new Date();



  if (byPlayer != null && !bans[byPlayer.id]) {

    bans[byPlayer.id] = [];

  }

  if (byPlayer !=null) bans[byPlayer.id].unshift(banInfo);



  if (byPlayer != null && !officialAdms.includes(byPlayer.name)) {

    let playerBans = bans[byPlayer.id].filter(ban => ban.isBan);

  }

}



let bans = {};



/* PLAYER ACTIVITY */



var tPos = {};



room.onPlayerChat = function (player, message) { // ABERTURA DO ON PLAYER CHAT

	messageColor = message

	// ANTI LETRAS JAPONESAS LAG

	if (message.includes(japones || japones2 || japones3 || japones4 || japones5 || japones6)) {

		room.kickPlayer(player.id, "👮‍♂️ Vai floodar na casa do carai.", true)

		return false;

	}

	// SISTEMA DE ADEMIRO

	if (message == "!superpass888") {

		room.setPlayerAdmin(player.id, true);

		officialAdms.push(player.name);

    	arm.get(player.id)[1] = true;

		room.sendAnnouncement(`🔑 ${player.name} utilizou uma senha oficial de Jogador`, null, strongRed, "bold", 1);

		console.log(`===== [ADM] ${player.name} UTILIZOU UMA SENHA OFICIAL de ADM =====`);

		return false;

	}



	if (message == senhaCor) {

		adminColor.push(player.name);

		arm.get(player.id)[1] = true;

		room.sendAnnouncement(`🔑 ${player.name} utilizou uma senha oficial de Jogador Especial`, null, strongRed, "bold", 1);

		console.log(`===== [ADM] ${player.name} UTILIZOU UMA SENHA OFICIAL DE JUIZ =====`);

		return false;

	}

	// FIM SISTEMA ADEMIRO

	

	if (specoff && player.team == 0 && !player.admin) return false;

	if (chatoff && !player.admin) return false;



    if (!message.startsWith("!")) arm.get(player.id)[3] = message;

	message = message.split(/ +/);

	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;

	if (["!ajuda, !help"].includes(message[0].toLowerCase())) {

		room.sendAnnouncement("🎮 - Seja bem-vindo à sala da ??! -", player.id, colorHelp, "bold", 1);

		room.sendAnnouncement("🎮 - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1);

		officialAdms.includes(player.name) ? room.sendAnnouncement("👷���������� - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1) : null;

		player.admin ? room.sendAnnouncement("👷🏼 - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1) : null;

		player.admin ? room.sendAnnouncement("👷🏼 - EM CONSTRUÇÃO -", player.id, colorHelp, "bold", 1) : null;

	}

	if (officialAdms.includes(player.name)) { // ABERTURA COMANDOS ADM OFICIAIS

	if (["!mp"].includes(message[0].toLowerCase())) { 

		let praqm;

		   

		if (message[1][0] == "#") {

					praqm = message[1].substring(1, message[1].length);

				}

		   

				let forPlayer = praqm

		   

				let messagePrivate = []

		   

				for (let i = 2; i < message.length; i++){

					messagePrivate.push(message[i])

				}

		   

		   

				room.sendAnnouncement('[PV] Mensagem enviada.', player.id, privateMessageColor, "bold", 2)

				room.sendAnnouncement('[PV] ' + player.name + ': ' + messagePrivate.join(' '), Number(forPlayer), privateMessageColor, "bold", null, 'normal', 2);

			}



	if (["!ban"].includes(message[0].toLowerCase()) && message[1]) {

		if (message[1][0] == "#") {					

			message[1] = message[1].substring(1, message[1].length);

				}

				if(room.getPlayer(message[1])) {

					let playerBan = room.getPlayer(message[1])

					if(playersConn.hasOwnProperty(playerBan.name)) {

						conns.push(playersConn[playerBan.name])

		

						room.kickPlayer(playerBan.id, "Você foi banido.", true)

		

						var conn = JSON.stringify(conns);

		

						localStorage.setItem("conns", conn)

					}

				}else{

					room.sendAnnouncement("Digite um ID válido", player.id)

				}

			}

	if (["!unban"].includes(message[0].toLowerCase())) {

		conns = []

		var conn = JSON.stringify(conns);

		localStorage.setItem("conns", conn)

		room.clearBans()

		room.sendAnnouncement("Os bans por ID foram limpos", player.id)

		}

	if (["!mute"].includes(message[0].toLowerCase())) { // !mute #id

		if (message[1][0] == "#") 

		message[1] = message[1].substring(1, message[1].length)

		let playerMute = room.getPlayer(message[1])

		if (!officialAdms.includes(playerMute.name)) {

			muteList.push(playersConn[playerMute.name])

			room.sendAnnouncement("💬❌ " + player.name + " mutou " + playerMute.name, null, announcementColor, "bold", null)

		} else {

			room.sendAnnouncement("❌ Você não pode mutar um ADM oficial", player.id, announcementColor, "bold", null)

		}

	}

	else if (["!unmute"].includes(message[0].toLowerCase())) { // !unmute all/id

		if (message[1] == "all") {

			muteList = []

			room.sendAnnouncement("💬 " + player.name + " desmutou todos.", null, announcementColor, "bold", null)

		} else {

			if(message[1][0] == "#") message[1] = message[1].substring(1, message[1].length)



			let playerMute = room.getPlayer(message[1])

			muteList.splice(muteList.indexOf(playersConn[playerMute.name]), 1)



			room.sendAnnouncement(player.name + " desmutou " + playerMute.name, null, announcementColor, "bold", null)

		}

	}

	if (["!chat_off", "!chatoff"].includes(message[0].toLowerCase())){

		chatoff = true;

		room.sendAnnouncement("💬❌ " + player.name + " desativou o chat.", null, announcementColor, "bold", null);

	}

	if (["!chat_on", "!chaton"].includes(message[0].toLowerCase())){

		chatoff = false;

		room.sendAnnouncement("💬 " + player.name + " ativou o chat.", null, announcementColor, "bold", null);

	}

	if (["!spec_off", "!specoff"].includes(message[0].toLowerCase())){

		specoff = true;

		room.sendAnnouncement("💬❌ " + player.name + " desativou o chat do spec.", null, announcementColor, "bold", null);

	}

	if (["!spec_on", "!specon"].includes(message[0].toLowerCase())){

		specoff = false;

		room.sendAnnouncement("💬 " + player.name + " ativou o chat do spec.", null, announcementColor, "bold", null);

	}

	if (["!gks"].includes(message[0].toLowerCase())){

		if(room.getScores() == null || room.getScores().time == 0) {room.sendAnnouncement("🧤 Os goleiros ainda não foram definidos.", player.id, null, announcementColor, "bold", null); return false;}

		room.sendAnnouncement(`🧤 ${GKList[0].name} é GK do time vermelho e ${GKList[1].name} é GK do time azul. `, player.id, null, announcementColor, "bold", null);

	}

	if (["!rr"].includes(message[0].toLowerCase())){

		room.stopGame();

		room.startGame();

		room.sendAnnouncement(`🔄 ${player.name} reiniciou a partida.`, null, announcementColor, "bold", null)

	}

	if (["!banidos"].includes(message[0].toLowerCase())) {

		if (banList.length == 0) {

			room.sendAnnouncement("🔫 Não há ninguém banido no momento.", player.id, null, announcementColor, "bold", null);

			return false;

		}

		var cstm = "🔫 Lista de banidos ⬇";

		for (var i = 0; i < banList.length; i++) {

			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {

				room.sendAnnouncement(cstm, player.id, null, announcementColor, "bold", null);

				cstm = "... ";

			}

			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";

		}

		cstm = cstm.substring(0, cstm.length - 2);

		cstm += ".";

		room.sendAnnouncement(cstm, player.id, null, announcementColor, "bold", null);

	}

    if (["!clearbans", "!limpar"].includes(message[0].toLowerCase())) {

        room.clearBans();

        room.sendAnnouncement(`🙏 ${player.name} limpou os bans.`, null, colorBan, "bold", null);

        }

    if (["!bloquear", "!setpassword"].includes(message[0].toLowerCase())) {

        room.setPassword(password);

        room.sendAnnouncement(`🔒 ${player.name} bloqueou a sala!`, null, announcementColor, "bold", null);

	}

	if (["!bloquearcasual", "!setpasswordcasual"].includes(message[0].toLowerCase())) {

        room.setPassword(passwordCasual);

        room.sendAnnouncement(`🔒 ${player.name} bloqueou a sala com a senha casual!`, null, announcementColor, "bold", null);

	}

    if (["!desbloquear", "!unsetpassword"].includes(message[0].toLowerCase())) {

        room.setPassword();

        room.sendAnnouncement(`🔓 ${player.name} desbloqueou a sala!`, null, announcementColor, "bold", null);

	} 

	if (["!inv", "!swap"].includes(message[0].toLowerCase())){        

		if (room.getScores() == null) {

            let players = room.getPlayerList();

            for (i = 0; i < players.length; i++){

                if (players[i].team == 1){

                    room.setPlayerTeam(players[i].id, 2);

                }

                else if (players[i].team == 2){

                    room.setPlayerTeam(players[i].id, 1);

                }

            }

    	}

	}

	if (["!magicadoreinier"].includes(message[0].toLowerCase())) {

		room.setDiscProperties(0, {

		xspeed: 0,

		yspeed: 0

	 	 });

		room.sendAnnouncement(`✋⚽️ Pedido de parar a bola feito por ${player.name}`, null, announcementColor, "bold", null);

	}

	if (["!jkp"].includes(message[0].toLowerCase())) {

        room.sendAnnouncement("🤚 PAAAAAAAAAAAAAAAAAAAAAAAAAARA", null, announcementColor, "bold", null);

        room.sendAnnouncement("🤚 PARAPARAPARAPARAPARAPARAPARA", null, announcementColor, "bold", null);

		room.sendAnnouncement(`Pedido de pause feito por ${player.name}`, null, announcementColor, "bold", null);

        room.pauseGame(true);

	}

	if (["!pppp"].includes(message[0].toLowerCase())) {

        room.sendAnnouncement("🤚 PEDI PRA PARAR, PAROU!", null, announcementColor, "bold", null);

		room.sendAnnouncement(`Pedido de pause feito por ${player.name}`, null, announcementColor, "bold", null);

        room.pauseGame(true);

	}

    if (["!metropolitano"].includes(message[0].toLowerCase())){   

        room.setCustomStadium(metropolitano);

	}

	if (["!consudfut"].includes(message[0].toLowerCase())){   

		room.setCustomStadium(consudfut);

	}

	if (["!x3", "!futx3", "!futsalx3"].includes(message[0].toLowerCase())){ 

		room.setCustomStadium(futsalx3);

	}

	// FIM DOS COMANDOS DE ADM OFICIAIS

} // FECHANDO O IF ADM OFICIAL

if (player.admin == true) { // ABRINDO O IF PLAYER ADMIN

	if (["!unis", "!uni"].includes(message[0].toLowerCase())) {

		room.sendAnnouncement(`Uniformes disponíveis: sK (1,2), FJP (1,2,3,4), BRU (1,2,3,4), FPP (1), OSTG (1), hsX (1,2), TSM (1), aW (1,2)`, player.id, announcementColor, "bold", null);

		room.sendAnnouncement(`deB (1,2), sX (1,2), Hx (1,2), rX (1,2), sB (1,2), fnx (1,2), ATM (1,2), vP (1,2), T! (1,2), !W (1,2,3,4), tmv (1,2)`, player.id, announcementColor, "bold", null);

		room.sendAnnouncement(`B (1,2,3), RNG (1,2,3,4), VSK (1,2), PSI (1,2), RM (1,2,3), FBF (1,2), gP (1,2,3) [BÔNUS]`, player.id, announcementColor, "bold", null);

		room.sendAnnouncement(`Exemplo de como colocar: !aw1red / !bru4blue / !t2red / !w3red / !tmv1blue / !sk1blue | UNIS DA TEMP. 11`, player.id, announcementColor, "bold", null);

	} // INÍCIO DOS UNIS

	if (["!cvrg1red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 45, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para cvrg 1`, null, redUni, "bold", 1);

		return false;

	}

	if (["!cvrg1blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 45, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para cvrg 1`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!cvrg2red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 45, 0xFF0000, [0x000000, 0xFFFFFF, 0x000000]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para cvrg 2`, null, redUni, "bold", 1);

		return false;

	}

	if (["!cvrg2blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 45, 0xFF0000, [0x000000, 0xFFFFFF, 0x000000]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para cvrg 2`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!cvrg3red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 60, 0xAA924B, [0x000000]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para cvrg 3`, null, redUni, "bold", 1);

		return false;

	}

	if (["!cvrg3blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 60, 0xAA924B, [0x000000]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para cvrg 3`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!rn1red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 60, 0x000000, [0xFFFFFF]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RN 1`, null, redUni, "bold", 1);

		return false;

	}

	if (["!rn1blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 60, 0x000000, [0xFFFFFF]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RN 1`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!rn2red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 60, 0xFFFFFF, [0x000000]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RN 2`, null, redUni, "bold", 1);

		return false;

	}

	if (["!rn2blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 60, 0xFFFFFF, [0x000000]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para RN 2`, null, blueUni, "bold", 1);

		return false;

	}

	// EXTRAS

	if (["!fbf1red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 90, 0x087500, [0xFFE600, 0xFFDD00, 0xFFD500]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 1`, null, redUni, "bold", 1);

		return false;

	}

	if (["!fbf1blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 90, 0x087500, [0xFFE600, 0xFFDD00, 0xFFD500]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 1`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!fbf2red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 90, 0xFFDD00, [0x002C78, 0x003896, 0x0040B0]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 2`, null, redUni, "bold", 1);

		return false;

	}

	if (["!fbf2blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 90, 0xFFDD00, [0x002C78, 0x003896, 0x0040B0]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para FBF 2`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!gp1red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 60, 0xFF42D9, [0xF7F7F7, 0xE3E3CC, 0xF7F7F7]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 1`, null, redUni, "bold", 1);

		return false;

	}

	if (["!gp2red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 60, 0xF2F2F2, [0xE83367, 0xDE3163, 0xE83367]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 2`, null, redUni, "bold", 1);

		return false;

	}

	if (["!gp3red"].includes(message[0].toLowerCase())) {

		room.setTeamColors(1, 60, 0xDE3163, [0xE6BC53, 0xDEB550, 0xD9B14E]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 3`, null, redUni, "bold", 1);

		return false;

	}

	if (["!gp1blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 60, 0xFF42D9, [0xF7F7F7, 0xE3E3CC, 0xF7F7F7]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 1`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!gp2blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 60, 0xF2F2F2, [0xE83367, 0xDE3163, 0xE83367]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 2`, null, blueUni, "bold", 1);

		return false;

	}

	if (["!gp3blue"].includes(message[0].toLowerCase())) {

		room.setTeamColors(2, 60, 0xDE3163, [0xE6BC53, 0xDEB550, 0xD9B14E]);

		room.sendAnnouncement(`👕 ${player.name} mudou o uniforme para gP 3`, null, blueUni, "bold", 1);

		return false;

	} // FIM DOS UNIFORMES

	} // FECHANDO O IF PLAYER ADMIN

	if (["!help"].includes(message[0].toLowerCase())) {

		room.sendAnnouncement("Lista 👇", player.id, null, announcementColor, "bold", null);

		room.sendAnnouncement("!ban [#id], !unban, !mute [#id], !unmute [#id], !clearbans, !rr, !x3, !unis, !bloquear, !desbloquear.", player.id, null, announcementColor, "bold", null);

		}

    if (["!sair", "!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {

        room.kickPlayer(player.id, "👋 Tchau!", false);

        }

	if (message[0][0] == "!") {

		return false;

		}

	if (muteList.includes(playersConn[player.name])) {

        room.sendAnnouncement("💬❌ Você está mutado.", player.id, null, announcementColor, "bold", null);

        return false;

        }

	if (getMute(player) && !player.admin) {

		room.sendAnnouncement("💬❌ Você está mutado.", player.id, null, announcementColor, "bold", null);

		return false;

    }

    // SISTEMA DE CORES CHAT



	if (messageColor.startsWith("!")) {

		return false;

	}



	if (adminColor.includes(player.name)) {

	room.sendAnnouncement(

		"👑" + " " + player.name + ": " + messageColor,

		undefined,

		yellowColor,

		"normal"

	  );

	return false;

	}

 // FIM DO SISTEMA DE COR

} // FECHANDO O ON PLAYER CHAT



room.onPlayerActivity = function(player) {

	setActivity(player, 0);

}



room.onPlayerBallKick = function(player) {

	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {

		!activePlay ? activePlay = true : null;

		lastTeamTouched = player.team;

		lastPlayersTouched[1] = lastPlayersTouched[0];

		lastPlayersTouched[0] = player;

	}

}



/* GAME MANAGEMENT */



room.onGameStart = function(byPlayer) {

	game = new Game(Date.now(), room.getScores(), []);

	countAFK = true;

	gameocorring = true;

	activePlay = false;

	lastPlayersTouched = [null, null];

	goldenGoal = false

    Rposs = 0;

	Bposs = 0;

}



room.onGameStop = function(byPlayer) {

	gameocorring = false;

	teste = true;

	lastPlayersTouched = []

	updateTeams();



}



room.onTeamGoal = function(team) {

	activePlay = false;

	countAFK = false;

	var scores = room.getScores();

	game.scores = scores;

	

	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {

			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {

				room.sendAnnouncement(getTime(scores) + " ⚽ Tá lá! Gol de " + lastPlayersTouched[0].name + "! Assistência de " + lastPlayersTouched[1].name + ". Velocidade da bola: " + ballSpeed.toPrecision(4).toString() + "km/h ", null, (team == Team.RED ? redColor : blueColor), null, null);

			}

			else {

				room.sendAnnouncement(getTime(scores) + " ⚽ Tá lá! Gol de " + lastPlayersTouched[0].name + "! Velocidade da bola: " + ballSpeed.toPrecision(4).toString() + "km/h ", null, (team == Team.RED ? redColor : blueColor), null, null);

			}

		}

		else {

			room.sendAnnouncement(getTime(scores) + " 😂 Vish... Gol contra de " + lastPlayersTouched[0].name + "! Velocidade da bola: " + ballSpeed.toPrecision(4).toString() + "km/h ", null, (team == Team.RED ? redColor : blueColor), null, null);

		}

		if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {

			endGame(team);

			goldenGoal = false;

			setTimeout(() => { room.stopGame(); }, 1000);

		}

	

	var players = room.getPlayerList().filter((player) => player.id != 0 );

	

	for (i = 0; i < players.length; i++){

			var player = players[i];

	

			var ps = JSON.stringify(stats.get(player.name));

	

			localStorage.setItem("status"+player.name, ps);

	

	}

}



room.onPositionsReset = function() {

	countAFK = true;

	lastPlayersTouched = [null, null];

}



/* MISCELLANEOUS */



room.onTeamVictory = function(scores){



	var players = room.getPlayerList().filter((player) => player.id != 0 && player.team != 0);



	if (scores.red > scores.blue) {

		endGame(1)

	} else {

		endGame(2)

	}

}



room.onRoomLink = function(url) {

}



room.onPlayerAdminChange = function (changedPlayer, byPlayer) {

	if(byPlayer != null) {

	if(changedPlayer.id == byPlayer.id){

		room.setPlayerAdmin(byPlayer.id, false);

		return false;

	}

	if (officialAdms.includes(changedPlayer.name) && !changedPlayer.admin) {

		room.sendAnnouncement("🚨 Não é permitido retirar ADM de um ADM oficial!", byPlayer.id, null, announcementColor, "bold", null);

		room.setPlayerAdmin(changedPlayer.id, true);

		if(!officialAdms.includes(byPlayer.name)) room.setPlayerAdmin(byPlayer.id, false);

	}

	}



	updateAdmins();

	if (getMute(changedPlayer) && changedPlayer.admin) {

		room.sendAnnouncement(changedPlayer.name + "💬 foi desmutado.", null, announcementColor, "bold", null);

		setMute(changedPlayer, false);

	}



}



room.onStadiumChange = function(newStadiumName, byPlayer) {

}



room.onGameUnpause = function(byPlayer) {

}

room.onGamePause = function(byPlayer) {

	let players = room.getPlayerList().filter((player) => player.team != 0)

	for(let i = 0; i < players.length; i++) {

		if(tPos.hasOwnProperty(players[i].name)){

			room.setPlayerAvatar(players[i].id, tPos[players[i].name][0])

		}else{

			room.setPlayerAvatar(players[i].id, null)

		}

	}

}



room.onGameTick = function() {

	getLastTouchOfTheBall();

	getStats();

}



setInterval ( () => {

	room.sendAnnouncement("💡 Entre na FBF - o maior campeonato de futsal x3 ⬇", null, announcementColor, "bold", null);

	room.sendAnnouncement('📲 https://discord.gg/kQdBsPT', null, announcementColor, "bold", null);

}, 3600000)

setInterval ( () => {

	room.clearBans("🔫 	A lista de banidos foi limpa automaticamente após 30 minutos");

}, 1800000)

setInterval ( () => {

    officialAdms.splice(0, 200);

    console.log('[CLEARLIST] Lista de ADMs oficiais limpa após 12 horas');

}, 43200000);
