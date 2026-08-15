/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Song, RitualDay } from '../../types';

// Asset references
import morningWallpaper from '../assets/images/chhath_morning_wallpaper_1786811448591.jpg';
import eveningWallpaper from '../assets/images/chhath_evening_wallpaper_1786811461986.jpg';
import soopOfferingImg from '../assets/images/chhath_soop_offering_1786811493927.jpg';
import devoteeArghyaImg from '../assets/images/chhath_devotee_arghya_1786811504776.jpg';
import sunriseGhatImg from '../assets/images/chhath_sunrise_ghat_1786812872693.jpg';
import sunsetArghyaImg from '../assets/images/chhath_sunset_arghya_1786812886246.jpg';
import kosiRitualImg from '../assets/images/chhath_kosi_ritual_1786812897512.jpg';
import sacredOfferingsImg from '../assets/images/chhath_sacred_offerings_1786812908473.jpg';

export {
  morningWallpaper,
  eveningWallpaper,
  soopOfferingImg,
  devoteeArghyaImg,
  sunriseGhatImg,
  sunsetArghyaImg,
  kosiRitualImg,
  sacredOfferingsImg
};

export const CHHATH_SONGS: Song[] = [
  {
    id: 'kewal-k-path-pr',
    title: 'Kelwa Ke Paat Par Ugalen Suraj Mal',
    hindiTitle: 'केलवा के पात पर उगेलन सूरज मल',
    singer: 'Padma Bhushan Sharda Sinha (स्वर कोकिला)',
    duration: '06:18',
    durationSec: 378,
    youtubeId: 'knZ8b5YnQiY',
    youtubeUrl: 'https://www.youtube.com/watch?v=knZ8b5YnQiY',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional / Raag Bhairav',
    description: 'The immortal anthem of Chhath Mahaparv. Describing the auspicious rising of the Sun God over fresh banana leaves, illuminating the holy river ghats and answering the devout prayers of the Vrati.',
    lyrics: [
      {
        time: 5,
        hindi: 'केलवा के पात पर उगेलन सूरज मल झाँके-झुके...',
        transliteration: 'Kelwa ke paat par ugalen suraj mal jhaanke jhuke...',
        meaning: 'Upon the verdant banana leaves, the radiant Sun God gently rises, showering golden divine rays...'
      },
      {
        time: 42,
        hindi: 'हे करा ना सुरुज देव निमिरन, अरघ के बेरा भईल...',
        transliteration: 'Hey kara na suruj dev nimiran, aragh ke bera bhayil...',
        meaning: 'Oh Sun God, heed our humble prayers, for the sacred moment of offering Arghya has arrived.'
      },
      {
        time: 85,
        hindi: 'कांच ही बांस के बहंगिया, बहंगी लचकत जाए...',
        transliteration: 'Kaanch hi baans ke bahangiya, bahangi lachkat jaaye...',
        meaning: 'The tender bamboo shoulder-pole sways gently under the holy weight of offerings for Chhathi Maiya.'
      },
      {
        time: 140,
        hindi: 'तू त आन्हर हउवे रे बटोहिया, बहंगी छठी माई के जाय!',
        transliteration: 'Tu ta aanhar hau re batohiya, bahangi Chhathi Maai ke jaay!',
        meaning: 'O innocent traveler, can you not see? This sacred Bahangi is headed to the holy river for Chhathi Maiya!'
      }
    ]
  },
  {
    id: 'kanch-ke-bans',
    title: 'Kaanch Hi Baans Ke Bahangiya',
    hindiTitle: 'काँच ही बाँस के बहंगिया बहँगी लचकत जाये',
    singer: 'Anuradha Paudwal / Sharda Sinha',
    duration: '05:42',
    durationSec: 342,
    youtubeId: 'Eyq7vfxu4iA',
    youtubeUrl: 'https://www.youtube.com/watch?v=Eyq7vfxu4iA',
    coverImage: soopOfferingImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: sunsetArghyaImg,
    tag: 'Folk Classic',
    ragaOrMood: 'Pure Traditional Folk / Purity & Devotion',
    description: 'A deeply moving hymn depicting the purity of carrying fresh bamboo baskets with prasad to the holy river bank with utmost reverence and unblemished sanctity.',
    lyrics: [
      {
        time: 8,
        hindi: 'काँच ही बाँस के बहंगिया, बहँगी लचकत जाये...',
        transliteration: 'Kaanch hi baans ke bahangiya, bahangi lachkat jaaye...',
        meaning: 'The green bamboo basket-pole sways gently as devotees walk to the river with devotion.'
      },
      {
        time: 48,
        hindi: 'बात जे पूछेला बटोहिया, बहँगी केकरा के जाय...',
        transliteration: 'Baat je poochhela batohiya, bahangi kekra ke jaay...',
        meaning: 'The curious traveler asks whose divine worship this holy procession serves.'
      },
      {
        time: 96,
        hindi: 'तू त आन्हर हउवे रे बटोहिया, बहँगी छठी माई के जाय...',
        transliteration: 'Tu ta aanhar hau re batohiya, bahangi Chhathi Maai ke jaay...',
        meaning: 'O traveler, open your spiritual eyes, this holy offering is for Mother Chhathi.'
      }
    ]
  },
  {
    id: 'pahile-pahile-baani',
    title: 'Pahile Pahile Baani Kaile Chhathi Maiya',
    hindiTitle: 'पहिले पहिल हम कईनी छठी मईया व्रत तोहार',
    singer: 'Padma Bhushan Sharda Sinha',
    duration: '06:55',
    durationSec: 415,
    youtubeId: 'cQ2eX4SrkNg',
    youtubeUrl: 'https://www.youtube.com/watch?v=cQ2eX4SrkNg',
    coverImage: devoteeArghyaImg,
    morningBackground: sacredOfferingsImg,
    eveningBackground: kosiRitualImg,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhakti Rasa / Emotional Soulful Prayer',
    description: 'An emotional masterpiece expressing the humble anxiety, devotion, and supreme faith of a devotee undertaking the sacred 36-hour nirjala fast for the first time.',
    lyrics: [
      {
        time: 10,
        hindi: 'पहिले पहिल हम कईनी छठी मईया व्रत तोहार...',
        transliteration: 'Pahile pahil hum kayeni Chhathi Maiya vrat tohaar...',
        meaning: 'For the very first time, O Mother Chhathi, I undertake your supreme fast with trembling reverence.'
      },
      {
        time: 55,
        hindi: 'करिहा क्षमा छठी मईया, भूल-चूक गलती हमार...',
        transliteration: 'Kariha kshama Chhathi Maiya, bhool-chook galati hamaar...',
        meaning: 'Forgive any unintentional mistakes or omissions, dear Mother, for my heart is pure in your devotion.'
      },
      {
        time: 110,
        hindi: 'गोदी के बालकवा के दीहा दीर्घायु वरदान...',
        transliteration: 'Godi ke balakwa ke deeha deerghayu vardaan...',
        meaning: 'Bless our children with health, long life, wisdom, and the light of truth.'
      }
    ]
  },
  {
    id: 'uga-he-surj-dev',
    title: 'Uga He Suruj Dev Bhel Bhinsarwa',
    hindiTitle: 'उगा हे सुरुज देव भेल भिनसरवा',
    singer: 'Sharda Sinha (स्वर कोकिला)',
    duration: '05:12',
    durationSec: 312,
    youtubeId: '6e6Hp6R5SVU',
    youtubeUrl: 'https://www.youtube.com/watch?v=6e6Hp6R5SVU',
    coverImage: morningWallpaper,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Dawn Invocation / Raag Bhairavi',
    description: 'Sung at dawn on the final morning while devotees stand in the cold river waters, awaiting the first golden ray of the rising Sun to offer Usha Arghya and complete their tapasya.',
    lyrics: [
      {
        time: 5,
        hindi: 'उगा हो सुरुज देव भेल भिनसरवा, अरघ के बेरा भईल...',
        transliteration: 'Uga ho suruj dev bhel bhinsarwa, aragh ke bera bhayil...',
        meaning: 'Rise, O Lord Surya! Dawn has broken over the horizon, and the hour of sacred Arghya has come.'
      },
      {
        time: 50,
        hindi: 'जल बिच ठाढ़े सभे बरतिया, आस लगावले तोहार...',
        transliteration: 'Jal bich thaadhe sabhe baratiya, aas lagawle tohaar...',
        meaning: 'Standing chest-deep in the holy waters, all fasting devotees eagerly await your divine darshan.'
      }
    ]
  },
  {
    id: 'ho-dinanath-jal-bich',
    title: 'Ho Deenanath, Jal Bich Thaadhe Barati',
    hindiTitle: 'हो दीनानाथ, जल बिच ठाढ़े बरती तोहार',
    singer: 'Padma Bhushan Sharda Sinha',
    duration: '06:30',
    durationSec: 390,
    youtubeId: 'f-WsraDBPnY',
    youtubeUrl: 'https://www.youtube.com/watch?v=f-WsraDBPnY',
    coverImage: eveningWallpaper,
    morningBackground: morningWallpaper,
    eveningBackground: sunsetArghyaImg,
    tag: 'Evening Arghya',
    ragaOrMood: 'Deep Devotional / Solemn Vedic Prayer',
    description: 'The monumental prayer addressing Lord Surya as "Deenanath" (protector of the humble), invoking his radiant blessings while standing in the sacred Ganges at sunset.',
    lyrics: [
      {
        time: 12,
        hindi: 'हो दीनानाथ, जल बिच ठाढ़े बरती तोहार...',
        transliteration: 'Ho Deenanath, jal bich thaadhe barati tohaar...',
        meaning: 'O Lord of the humble, your fasting devotees stand reverently in the river waters.'
      },
      {
        time: 60,
        hindi: 'अरघ के बेरा भईल सुरुज देव, दरशन दीहीं अपार...',
        transliteration: 'Aragh ke bera bhayil suruj dev, darshan deeheen apaar...',
        meaning: 'The hour of Arghya is here, O Sun God, bless us with your divine presence.'
      }
    ]
  },
  {
    id: 'jode-jode-supwa',
    title: 'Jode Jode Supwa Tora Chadaibo',
    hindiTitle: 'जोड़े जोड़े सुपवा तोरा चढ़ाइबो छठी माई',
    singer: 'Sharda Sinha / Pawan Singh',
    duration: '04:45',
    durationSec: 285,
    youtubeId: 'G3PMFpftpbg',
    youtubeUrl: 'https://www.youtube.com/watch?v=G3PMFpftpbg',
    coverImage: soopOfferingImg,
    morningBackground: sacredOfferingsImg,
    eveningBackground: kosiRitualImg,
    tag: 'Kharna',
    ragaOrMood: 'Festive Devotional / Rhythmic Gratitude',
    description: 'A joyful and rhythmic pledge of gratitude, offering pairs of sacred coconuts, fresh thekuas, and sugarcanes in devotion to Chhathi Maiya.',
    lyrics: [
      {
        time: 8,
        hindi: 'जोड़े जोड़े सुपवा तोहे चढ़ाएब छठी माई...',
        transliteration: 'Jode jode supva tohe chadhaayeb Chhathi Maai...',
        meaning: 'I shall offer pairs of decorated bamboo soops at your holy feet, O Divine Mother.'
      },
      {
        time: 45,
        hindi: 'दीप जलाएब गंगा के तीरे, मनवां में उमंग समाई...',
        transliteration: 'Deep jalaayeb Ganga ke teere, manwa mein umang samaayee...',
        meaning: 'We shall light rows of glowing lamps by the Ganga ghats with boundless joy in our hearts.'
      }
    ]
  },
  {
    id: 'patna-ke-ghat-par',
    title: 'Patna Ke Ghat Par Humhu Araghya Deb',
    hindiTitle: 'पटना के घाट पर हमहुँ अरघिया देब',
    singer: 'Sharda Sinha',
    duration: '05:30',
    durationSec: 330,
    youtubeId: '_RDu847nhmU',
    youtubeUrl: 'https://www.youtube.com/watch?v=_RDu847nhmU',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: sunsetArghyaImg,
    tag: 'Nahay Khay',
    ragaOrMood: 'Ghat Celebration / Traditional Folk',
    description: 'Captures the grandeur and spiritual splendor of lakhs of devotees gathering along the historic ghats of river Ganga in Patna to offer their collective Arghya.',
    lyrics: [
      {
        time: 10,
        hindi: 'पटना के घाट पर हमहुँ अरघिया देब सुरुज देव के...',
        transliteration: 'Patna ke ghaat par humhun aranghiya deb suruj dev ke...',
        meaning: 'On the sacred ghats of Patna, we too shall offer our Arghya to the Lord Sun.'
      },
      {
        time: 55,
        hindi: 'गंगा मईया के पावन तीरे सजल बा संसार...',
        transliteration: 'Ganga Maiya ke paavan teere sajal ba sansaar...',
        meaning: 'The entire universe seems adorned along the holy banks of Mother Ganga.'
      }
    ]
  },
  {
    id: 'chaar-pahar-hum-jal',
    title: 'Chaar Pahar Hum Jal Sevila',
    hindiTitle: 'चार पहर हम जल सेविले, सेविले चरण तोहार',
    singer: 'Padma Bhushan Sharda Sinha',
    duration: '06:10',
    durationSec: 370,
    youtubeId: 'VY5E1sCK6Ow',
    youtubeUrl: 'https://www.youtube.com/watch?v=VY5E1sCK6Ow',
    coverImage: morningWallpaper,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Folk Classic',
    ragaOrMood: 'Vedic Tapasya / Devotional Vigil',
    description: 'A sublime hymn depicting the 24-hour spiritual vigil in holy river waters, meditating on the cosmic energy of Aditya and Chhathi Maiya.',
    lyrics: [
      {
        time: 10,
        hindi: 'चार पहर हम जल सेविले, सेविले चरण तोहार हे दीनानाथ...',
        transliteration: 'Chaar pahar hum jal sevile, sevile charan tohaar hey Deenanath...',
        meaning: 'Through all four watches of night and day, we stand in holy waters serving your divine feet, O Lord.'
      },
      {
        time: 60,
        hindi: 'हमरो मनोरथ पूरण करिहा, दीहा निर्मल वरदान...',
        transliteration: 'Hamro manorath pooran kariha, deeha nirmal vardaan...',
        meaning: 'Fulfill our noble wishes and bless us with purity of heart and everlasting devotion.'
      }
    ]
  },
  {
    id: 'dukhwa-mitayin',
    title: 'Dukhwa Mitayin Chhathi Maiya',
    hindiTitle: 'दुखवा मिटाईं हे छठी मईया, सुख-शांति बरसाईं',
    singer: 'Sharda Sinha / Anuradha Paudwal',
    duration: '05:40',
    durationSec: 340,
    youtubeId: 'NkDiSj9c1EA',
    youtubeUrl: 'https://www.youtube.com/watch?v=NkDiSj9c1EA',
    coverImage: soopOfferingImg,
    morningBackground: sacredOfferingsImg,
    eveningBackground: sunsetArghyaImg,
    tag: 'Evening Arghya',
    ragaOrMood: 'Soulful Invocation / Compassion & Grace',
    description: 'A prayer invoking the boundless motherly compassion of Chhathi Maiya to dispel grief, suffering, and illness, replacing them with joy, peace, and health.',
    lyrics: [
      {
        time: 10,
        hindi: 'दुखवा मिटाईं हे छठी मईया, सुख-शांति बरसाईं...',
        transliteration: 'Dukhwa mitayeen hey Chhathi Maiya, sukh-shaanti barsaaee...',
        meaning: 'Dispel all sorrow, O Divine Mother Chhathi, and shower everlasting peace upon our lives.'
      },
      {
        time: 50,
        hindi: 'तोहरे भरोसे माई कटिहै जिनिगिया, शरण में रखिहा हमार...',
        transliteration: 'Tohre bharose maai katihai jinigiya, sharan mein rakhiha hamaar...',
        meaning: 'Placing our entire lives in your divine protection, keep us forever sheltered at your holy feet.'
      }
    ]
  },
  {
    id: 'jode-jode-falwa',
    title: 'Jode Jode Falwa Suruj Dev',
    hindiTitle: 'जोड़े जोड़े फलवा सुरुज देव, दउरा में सजाई',
    singer: 'Sharda Sinha',
    duration: '05:25',
    durationSec: 325,
    youtubeId: '2Uh-rMxhBLY',
    youtubeUrl: 'https://www.youtube.com/watch?v=2Uh-rMxhBLY',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: kosiRitualImg,
    tag: 'Kharna',
    ragaOrMood: 'Prasad Decoration / Festive Harmony',
    description: 'Describes the loving decoration of the sacred bamboo Daura with pairs of grapefruits (dhab), sugarcane stalks, ginger roots, turmeric pods, and golden thekua.',
    lyrics: [
      {
        time: 12,
        hindi: 'जोड़े जोड़े फलवा सुरुज देव, दउरा में सजाई के...',
        transliteration: 'Jode jode phalwa suruj dev, daura mein sajaayi ke...',
        meaning: 'Arranging pairs of holy seasonal fruits in the decorated bamboo daura with pure reverence...'
      },
      {
        time: 55,
        hindi: 'घाटे चलले सभे बरतिया, अरघिया लगाई के...',
        transliteration: 'Ghaate chalale sabhe baratiya, aranghiya lagaayi ke...',
        meaning: 'All devotees head in unison towards the sacred river to offer their prayers.'
      }
    ]
  },
  {
    id: 'chath-karab-hum-jaroor',
    title: 'Chhath Karab Hum Jaroor',
    hindiTitle: 'छठ करब हम जरूर, छठी मईया के आशीर्वाद से',
    singer: 'Sharda Sinha / Khesari Lal / Pawan Singh',
    duration: '05:50',
    durationSec: 350,
    youtubeId: 'ZC4mPzCtL5c',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZC4mPzCtL5c',
    coverImage: morningWallpaper,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Nahay Khay',
    ragaOrMood: 'Unwavering Resolution / Faith & Strength',
    description: 'An inspiring declaration of steadfast devotion, pledging to perform the sacred Chhath fast under all circumstances with the grace of Surya Dev and Chhathi Maiya.',
    lyrics: [
      {
        time: 10,
        hindi: 'छठ करब हम जरूर, छठी मईया के आशीर्वाद से...',
        transliteration: 'Chhath karab hum jaroor, Chhathi Maiya ke aashirvaad se...',
        meaning: 'We shall resolve to perform the sacred Chhath Mahaparv with the divine grace of Mother Chhathi.'
      },
      {
        time: 50,
        hindi: 'गंगा जी के तीरे सजइब दुअरिया, मनवां में आनंद अपार...',
        transliteration: 'Ganga ji ke teere sajaayib duariya, manwa mein aanand apaar...',
        meaning: 'We shall decorate the holy ghats of Ganga with joyful devotion filling our souls.'
      }
    ]
  },
  {
    id: 'kaune-khete-dhan',
    title: 'Kaune Khete Dhan Suruj Dev (कवने खेते धान)',
    hindiTitle: 'कवने खेते धान हे सुरुज देव, कवने खेते पान',
    singer: 'Padma Bhushan Sharda Sinha (स्वर कोकिला)',
    duration: '05:35',
    durationSec: 335,
    youtubeId: '-JgvXB9NT8M',
    youtubeUrl: 'https://www.youtube.com/watch?v=-JgvXB9NT8M',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: sunsetArghyaImg,
    tag: 'Morning Arghya',
    ragaOrMood: 'Aditya Vandana / Holy Harvest Gratitude',
    description: 'A classic and deeply resonant Chhath folk hymn expressing devotion to Lord Surya, celebrating the sacred paddy harvest, betel offerings, and the divine grace bestowed upon Mother Earth.',
    lyrics: [
      {
        time: 8,
        hindi: 'कवने खेते धान हे सुरुज देव, कवने खेते पान...',
        transliteration: 'Kaune khete dhaan hey suruj dev, kaune khete paan...',
        meaning: 'In which sacred field does the golden rice grow, O Sun God, and in which holy soil does the betel thrive?'
      },
      {
        time: 48,
        hindi: 'कवने खेते उपजेले लाले-लाल सुरुज देव...',
        transliteration: 'Kaune khete upjele laale laal suruj dev...',
        meaning: 'In which blessed harvest do the divine offerings blossom with the auspicious golden crimson glow of the Sun...'
      },
      {
        time: 95,
        hindi: 'पूरब खेते धान हे दीनानाथ, पश्चिम खेते पान...',
        transliteration: 'Poorab khete dhaan hey deenanath, paschim khete paan...',
        meaning: 'In the East golden paddies flourish for the Lord, in the West sacred leaves grow for divine Arghya.'
      }
    ]
  }
];

export const RITUAL_DAYS: RitualDay[] = [
  {
    dayNumber: 1,
    title: 'Nahay Khay',
    hindiTitle: 'नहाय-खाय (पवित्र स्नान व सात्विक भोजन)',
    dayType: 'Day 1 of 4: Purification & Beginning',
    description: 'The auspicious start of Chhath Mahaparv. Devotees take a holy dip in the river or sacred water, cleanse their home thoroughly, and consume a single satvik meal prepared in earthen pots or brass vessels.',
    rituals: [
      'Holy bath in river Ganga or sanctified fresh water',
      'Cooking with pure ghee, rock salt (Sendha Namak), and unadulterated spices',
      'The Vrati eats only after offering prayer to the Sun God',
      'All family members partake in the remaining prasad'
    ],
    prasad: ['Kaddu Bhaat (Bottle Gourd Curry)', 'Chana Dal (Bengal Gram)', 'Arua Rice (Parboiled Rice)'],
    significance: 'Signifies bodily and spiritual purification before undertaking the intense tapasya.',
    mantra: 'ॐ सूर्याय नमः | ॐ भास्कराय नमः',
    mantraHindi: 'हे सूर्य देव! हमारे शरीर और मन को पवित्र कर इस महाव्रत को पूर्ण करने की शक्ति दें।'
  },
  {
    dayNumber: 2,
    title: 'Kharna / Lohanda',
    hindiTitle: 'खरना / लोहंडा (आत्मिक शुद्धि व अखंड उपवास का प्रारंभ)',
    dayType: 'Day 2 of 4: The 36-Hour Nirjala Fast Begins',
    description: 'Devotees observe a strict waterless fast throughout the day. In the evening, after sunset, a special kheer made of jaggery and sugarcane juice is prepared on a traditional mud stove (Chulha) using mango wood.',
    rituals: [
      'Full day fast without food and water',
      'Preparation of Rasiya Kheer and Roti on sacred earthen stove',
      'Quiet puja offered to Chhathi Maiya and Surya Dev at twilight',
      'After this evening prasad, the unbroken 36-hour fast commences'
    ],
    prasad: ['Rasiya Kheer (Jaggery-Milk-Rice Pudding)', 'Ghee-smeared Rotis / Puris', 'Fresh Banana & Seasonal Fruits'],
    significance: 'Cultivates unwavering willpower, inner detachment, and supreme concentration on the divine.',
    mantra: 'ॐ मित्राय नमः | ॐ रवये नमः',
    mantraHindi: 'हे प्रत्यक्ष देव सूर्य! आपके तेज से हमारे जीवन का अज्ञान और क्लेश दूर हो।'
  },
  {
    dayNumber: 3,
    title: 'Sandhya Arghya',
    hindiTitle: 'संध्या अर्घ्य (डूबते सूर्य को प्रथम अर्घ्य)',
    dayType: 'Day 3 of 4: The Evening River Procession',
    description: 'Devotees, accompanied by singing families carrying bamboo Daura and Soop on their heads, proceed to the river Ghat. Standing knee-deep in holy water, they offer milk and water arghya to the setting sun (Pratyaksha Dev).',
    rituals: [
      'Grand musical procession carrying Daura to the river Ghat',
      'Standing in holy river water as the crimson sun touches the horizon',
      'Offering Arghya with bamboo soop filled with Thekua, coconut, and fruits',
      'Kosi Bharai ritual with 24 sugarcane sticks and earthen diyas at night'
    ],
    prasad: ['Traditional Thekua', 'Whole Coconuts', 'Sugarcane Stalks', 'Kasari & Bodhi', 'Grapefruit (Dhab)'],
    significance: 'Unique Vedic tradition of worshipping the setting sun first—acknowledging that sunset is not the end, but the promise of rebirth and new dawn.',
    mantra: 'ॐ खगाय नमः | ॐ पूष्णे नमः | ॐ हिरण्यगर्भाय नमः',
    mantraHindi: 'एहि सूर्य सहस्त्रांशो तेजोराशे जगत्पते। अनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर॥'
  },
  {
    dayNumber: 4,
    title: 'Usha Arghya & Paran',
    hindiTitle: 'उषा अर्घ्य व पारण (उगते सूर्य को अर्घ्य व व्रत समापन)',
    dayType: 'Day 4 of 4: The Glorious Sunrise & Blessings',
    description: 'Before dawn (Bhinserwa), devotees reassemble at the ghats. As the crimson-gold sun rises above the horizon (Usha Bela), the final Arghya is offered with immense jubilation, followed by touching elders\' feet and breaking the fast.',
    rituals: [
      'Gathering at the river ghat in the misty pre-dawn darkness with lit diyas',
      'Singing "Uga Ho Suruj Dev Bhel Bhinsarwa" in chorus',
      'Offering the morning Arghya as the first golden sunray pierces the river mist',
      'Applying orange sindoor (vermilion) from nose tip to hairline for longevity and auspiciousness',
      'Breaking the 36-hour fast with ginger, raw sugar, and prasad (Paran)'
    ],
    prasad: ['Thekua Mahaprasad', 'Adrak (Ginger) with Jaggery', 'Panchamrit', 'Holy Chhath Fruits'],
    significance: 'Welcomes cosmic energy, vitality, health, and enlightenment, concluding the world\'s most austere festival of gratitude to nature.',
    mantra: 'ॐ आदित्याय नमः | ॐ सवित्रे नमः | ॐ अर्काय नमः | ॐ भास्कराय नमः',
    mantraHindi: 'ॐ जपाकुसुम संकाशं काश्यपेयं महाद्युतिम्। तमोरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम्॥'
  }
];

export const DEVOTIONAL_QUOTES = [
  {
    hindi: 'सूरज के रथ पर सवार, छठी मईया के आशीर्वाद अपार।',
    english: 'Riding upon the golden chariot of the Sun, Mother Chhathi showers boundless grace upon all.'
  },
  {
    hindi: 'नहाय-खाय से उषा अर्घ्य तक, पवित्रता और आस्था का अनुपम संगम।',
    english: 'From Nahay-Khay to Usha Arghya, an unparalleled union of supreme purity, sacrifice, and faith.'
  },
  {
    hindi: 'गंगा के पावन जल में, डूबते और उगते सूर्य की वंदना प्रकृति के प्रति कृतज्ञता है।',
    english: 'Worshipping the setting and rising Sun in holy waters is humanity’s deepest thanksgiving to Nature.'
  },
  {
    hindi: 'कांच ही बांस के बहंगिया लचकत जाए, छठी माई की कृपा सब पर सदा बनी रहे।',
    english: 'May the divine benevolence of Mother Chhathi reside forever in every home and heart.'
  }
];
