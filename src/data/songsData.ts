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
import kharnaImg from '../assets/images/kharnaAnimated.jfif'

export {
  morningWallpaper,
  eveningWallpaper,
  soopOfferingImg,
  devoteeArghyaImg,
  sunriseGhatImg,
  sunsetArghyaImg,
  kosiRitualImg,
  sacredOfferingsImg,
  kharnaImg
};

export const CHHATH_SONGS: Song[] = [
  
  // ============================================================
  // KHARNA
  // ============================================================
  {
    id: 'jode-jode-supwa',
    title: 'Jode Jode Supwa Tora Chadaibo',
    hindiTitle: 'जोड़े जोड़े सुपवा तोरा चढ़ाइबो छठी माई',
    singer: 'Sharda Sinha / Pawan Singh',
    duration: '04:45',
    durationSec: 285,
    youtubeId: 'G3PMFpftpbg',
    youtubeUrl: 'https://www.youtube.com/watch?v=G3PMFpftpbg',
    coverImage: kharnaImg,
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
    coverImage: kharnaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: sunsetArghyaImg,
    tag: 'Kharna',
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
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
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
    id: 'jode-jode-falwa',
    title: 'Jode Jode Falwa Suruj Dev',
    hindiTitle: 'जोड़े जोड़े फलवा सुरुज देव, दउरा में सजाई',
    singer: 'Sharda Sinha',
    duration: '05:25',
    durationSec: 325,
    youtubeId: '2Uh-rMxhBLY',
    youtubeUrl: 'https://www.youtube.com/watch?v=2Uh-rMxhBLY',
    coverImage: kharnaImg,
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
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
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
  },
  {
    id: 'gaay-ke-gobara',
    title: 'Gaay Ke Gobara',
    hindiTitle: 'गाय के गोबरा',
    singer: 'Traditional Bhojpuri Chhath Geet',
    duration: '',
    durationSec: 0,
    youtubeId: 'tzSXN3UuEUI',
    youtubeUrl: 'https://www.youtube.com/watch?v=tzSXN3UuEUI',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Traditional Bhojpuri Folk',
    description: 'A traditional household Chhath song reflecting the ritual purification and preparation associated with the festival.',
    lyrics: []
  },

  {
    id: 'angana-mein-kosi',
    title: 'Angana Mein Kosi',
    hindiTitle: 'अंगना में कोसी',
    singer: 'Kalpana',
    duration: '05:30',
    durationSec: 330,
    youtubeId: '7tiJCczXSUE',
    youtubeUrl: 'https://www.youtube.com/watch?v=7tiJCczXSUE',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional Chhath geet associated with the Kosi ritual and the intimate household traditions surrounding Chhath Puja.',
    lyrics: []
  },

  {
    id: 'gajmoti-chounka-purailein',
    title: 'Gajmoti Chounka Purailein',
    hindiTitle: 'गजमोती चौका पुरइले',
    singer: 'Kalpana Patowary',
    duration: '04:15',
    durationSec: 255,
    youtubeId: '9Jmeu2P4YUc',
    youtubeUrl: 'https://www.youtube.com/watch?v=9Jmeu2P4YUc',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional folk devotional describing the preparation and sanctity of the Chhath household ritual space.',
    lyrics: []
  },

  {
    id: 'chhathi-maiya-aayi-na-duaariya',
    title: 'Chhathi Maiya Aayi Na Duaariya',
    hindiTitle: 'छठी मईया आई ना दुआरिया',
    singer: 'Sharda Sinha',
    duration: '09:01',
    durationSec: 541,
    youtubeId: 'x29zMOYncqs',
    youtubeUrl: 'https://www.youtube.com/watch?v=x29zMOYncqs',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A heartfelt invocation inviting Chhathi Maiya into the devotee’s home and seeking her divine blessings.',
    lyrics: []
  },

  {
    id: 'hey-chhathi-maiya',
    title: 'Hey Chhathi Maiya',
    hindiTitle: 'हे छठी मईया',
    singer: 'Sharda Sinha',
    duration: '04:57',
    durationSec: 297,
    youtubeId: 'x9_3sARy_Kw',
    youtubeUrl: 'https://www.youtube.com/watch?v=x9_3sARy_Kw',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional invocation to Chhathi Maiya expressing faith, surrender and prayer.',
    lyrics: []
  },

  {
    id: 'tuhi-babu-daurua',
    title: 'Tuhi Babu Daurua',
    hindiTitle: 'तूही बाबू दउरा',
    singer: 'Sharda Sinha',
    duration: '06:04',
    durationSec: 364,
    youtubeId: 'NkDiSj9c1EA',
    youtubeUrl: 'https://www.youtube.com/watch?v=NkDiSj9c1EA',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional Chhath folk song depicting preparation and carrying of sacred offerings.',
    lyrics: []
  },

  {
    id: 'bartin-ke-angna',
    title: 'Bartin Ke Angna',
    hindiTitle: 'बरतिन के अंगना',
    singer: 'Sharda Sinha',
    duration: '07:52',
    durationSec: 472,
    youtubeId: 'BC5I-33GNDA',
    youtubeUrl: 'https://www.youtube.com/watch?v=BC5I-33GNDA',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional devotional song focusing on the vratin and the sacred atmosphere surrounding the Chhath observance.',
    lyrics: []
  },

  {
    id: 'suna-chhathi-maai',
    title: 'Suna Chhathi Maai',
    hindiTitle: 'सुना छठी माई',
    singer: 'Kavita Paudwal',
    duration: '04:33',
    durationSec: 273,
    youtubeId: 'er0EO-Zp904',
    youtubeUrl: 'https://www.youtube.com/watch?v=er0EO-Zp904',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A prayerful appeal to Chhathi Maiya seeking blessings and protection for the devotee and family.',
    lyrics: []
  },

  {
    id: 'chhathi-maiya-ke',
    title: 'Chhathi Maiya Ke',
    hindiTitle: 'छठी मईया के',
    singer: 'Manoj Tiwari',
    duration: '05:21',
    durationSec: 321,
    youtubeId: 'JsgCa55_aJw',
    youtubeUrl: 'https://www.youtube.com/watch?v=JsgCa55_aJw',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A popular Bhojpuri devotional rendering dedicated to Chhathi Maiya.',
    lyrics: []
  },

  {
    id: 'aye-balam-jee',
    title: 'Aye Balam Jee',
    hindiTitle: 'ऐ बलम जी',
    singer: 'Kalpana',
    duration: '06:20',
    durationSec: 380,
    youtubeId: 'H4l6ss-HkYk',
    youtubeUrl: 'https://www.youtube.com/watch?v=H4l6ss-HkYk',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk',
    description: 'A folk-style Chhath song portraying the family and emotional dimensions of the festival.',
    lyrics: []
  },

  {
    id: 'supawo-naa-mile-maai',
    title: 'Supawo Naa Mile Maai',
    hindiTitle: 'सुपवा ना मिले माई',
    singer: 'Sharda Sinha',
    duration: '06:00',
    durationSec: 0,
    youtubeId: 'Y--BclhdHJk',
    youtubeUrl: 'https://www.youtube.com/watch?v=Y--BclhdHJk',
    coverImage: kharnaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Kharna',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional folk song built around the sacred soop and preparations for Chhath offerings.',
    lyrics: []
  },


  // ============================================================
  // SANDHYA/EVENING ARGHYA
  // ============================================================

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
    tag: 'Evening Arghya',
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
    id: 'aadit-manaila',
    title: 'Aadit Manaila',
    hindiTitle: 'आदित मनइला',
    singer: 'Anuradha Paudwal',
    duration: '',
    durationSec: 0,
    youtubeId: '',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Aadit+Manaila+Anuradha+Paudwal+Chhath',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional offering to Aaditya, the Sun God, suited to the sacred Arghya atmosphere.',
    lyrics: []
  },

  {
    id: 'aragh-ke-ber',
    title: 'Aragh Ke Ber',
    hindiTitle: 'अरघ के बेर',
    singer: 'Sharda Sinha',
    duration: '03:11',
    durationSec: 191,
    youtubeId: 'PcVCSloFYRI',
    youtubeUrl: 'https://www.youtube.com/watch?v=PcVCSloFYRI',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional song centered on the sacred moment and anticipation of offering Arghya.',
    lyrics: []
  },

  {
    id: 'saat-hin-ghodwa-surujdev',
    title: 'Saat Hin Ghodwa Surujdev',
    hindiTitle: 'सात ही घोड़वा सूरुजदेव',
    singer: 'Traditional',
    duration: '05:09',
    durationSec: 309,
    youtubeId: 'usdgRYlkd2E',
    youtubeUrl: 'https://www.youtube.com/watch?v=usdgRYlkd2E',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Traditional Bhojpuri Folk',
    description: 'A traditional invocation of Surya Dev and the seven-horse chariot of the Sun.',
    lyrics: []
  },

  {
    id: 'goad-khaduaan-ae-aaditmal',
    title: 'Goad Khaduaan Ae Aaditmal',
    hindiTitle: 'गोद खड़ुआन ए आदितमल',
    singer: 'Sharda Sinha',
    duration: '04:40',
    durationSec: 280,
    youtubeId: 'c8B5q6-bLgE',
    youtubeUrl: 'https://www.youtube.com/watch?v=c8B5q6-bLgE',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional devotional song invoking Aaditya during Chhath worship.',
    lyrics: []
  },

  {
    id: 'kopi-kopi-bole-le-surajdev',
    title: 'Kopi Kopi Bole Le Surajdev',
    hindiTitle: 'कोपी कोपी बोले ले सूरजदेव',
    singer: 'Sharda Sinha',
    duration: '06:25',
    durationSec: 385,
    youtubeId: 'YVrZBmI9_ag',
    youtubeUrl: 'https://www.youtube.com/watch?v=YVrZBmI9_ag',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A folk devotional addressed to Suraj Dev and carrying the characteristic narrative style of Chhath songs.',
    lyrics: []
  },

  {
    id: 'kartik-maas-ijoriya',
    title: 'Kartik Maas Ijoriya',
    hindiTitle: 'कार्तिक मास इजोरिया',
    singer: 'Sharda Sinha',
    duration: '06:47',
    durationSec: 407,
    youtubeId: 'JcCjw_P_gaM',
    youtubeUrl: 'https://www.youtube.com/watch?v=JcCjw_P_gaM',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional Kartik devotional song evoking the luminous atmosphere of Chhath.',
    lyrics: []
  },

  {
    id: 'baanjhi-kewdwa-dhaile-thaadh',
    title: 'Baanjhi Kewdwa Dhaile Thaadh',
    hindiTitle: 'बाँझी केवड़वा धइले ठाढ़',
    singer: 'Sharda Sinha',
    duration: '09:54',
    durationSec: 594,
    youtubeId: 'IJkVHjMt4fM',
    youtubeUrl: 'https://www.youtube.com/watch?v=IJkVHjMt4fM',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional Chhath folk narrative carrying prayers and family aspirations.',
    lyrics: []
  },

  {
    id: 'katik-mahinava-ke',
    title: 'Katik Mahinava Ke',
    hindiTitle: 'कातिक महिनवा के',
    singer: 'Sharda Sinha',
    duration: '09:11',
    durationSec: 551,
    youtubeId: 'L-lzSCH50Cg',
    youtubeUrl: 'https://www.youtube.com/watch?v=L-lzSCH50Cg',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A Kartik-month devotional song associated with the sacred season of Chhath.',
    lyrics: []
  },

  {
    id: 'kehan-samaiya-aele',
    title: 'Kehan Samaiya Aele',
    hindiTitle: 'केहन समइया अइले',
    singer: 'Sharda Sinha',
    duration: '08:11',
    durationSec: 491,
    youtubeId: 'YUR3_SdxImE',
    youtubeUrl: 'https://www.youtube.com/watch?v=YUR3_SdxImE',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional devotional folk song reflecting on the sacred arrival of Chhath.',
    lyrics: []
  },

  {
    id: 'jode-jode-nariyal',
    title: 'Jode Jode Nariyal',
    hindiTitle: 'जोड़े जोड़े नारियल',
    singer: 'Devi',
    duration: '07:25',
    durationSec: 445,
    youtubeId: '2fFXDHk2TLs',
    youtubeUrl: 'https://www.youtube.com/watch?v=2fFXDHk2TLs',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional song centered on coconuts and sacred offerings prepared for Chhathi Maiya.',
    lyrics: []
  },

  {
    id: 'kerawa-ke-paat',
    title: 'Kerawa Ke Paat',
    hindiTitle: 'केरवा के पात',
    singer: 'Devi',
    duration: '08:34',
    durationSec: 514,
    youtubeId: 'knZ8b5YnQiY',
    youtubeUrl: 'https://www.youtube.com/watch?v=knZ8b5YnQiY',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional folk devotional describing natural imagery and sacred offerings of Chhath.',
    lyrics: []
  },

  {
    id: 'ganga-jee-ke',
    title: 'Ganga Jee Ke',
    hindiTitle: 'गंगा जी के',
    singer: 'Devi',
    duration: '05:00',
    durationSec: 300,
    youtubeId: 'BP_Gg0B77Ls',
    youtubeUrl: 'https://www.youtube.com/watch?v=BP_Gg0B77Ls',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional song invoking the sacred Ganga and holy waters where Chhath Arghya is offered.',
    lyrics: []
  },

  {
    id: 'binee-binee-genhua',
    title: 'Binee Binee Genhua',
    hindiTitle: 'बीनी बीनी गेन्हुआ',
    singer: 'Devi',
    duration: '06:16',
    durationSec: 376,
    youtubeId: 'rX3X1PkOg54',
    youtubeUrl: 'https://www.youtube.com/watch?v=rX3X1PkOg54',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional Chhath folk song connected with grain, harvest and sacred offerings.',
    lyrics: []
  },

  {
    id: 'kanhiya-pa-ukh-maathe',
    title: 'Kanhiya Pa Ukh Maathe',
    hindiTitle: 'कनिहवा पा ऊख माथे',
    singer: 'Bharat Sharma Vyas',
    duration: '06:21',
    durationSec: 381,
    youtubeId: '_dCUafssffg',
    youtubeUrl: 'https://www.youtube.com/watch?v=_dCUafssffg',
    coverImage: devoteeArghyaImg,
    morningBackground: morningWallpaper,
    eveningBackground: eveningWallpaper,
    tag: 'Evening Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional Bhojpuri folk devotional featuring sugarcane, an important Chhath offering.',
    lyrics: []
  },


  // ============================================================
  // MORNING / USHA ARGHYA 
  // ============================================================
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
    id: 'ugihen-suraj-gosaiyan',
    title: 'Ugihen Suraj Gosaiyan Hey',
    hindiTitle: 'उगीहें सूरज गोसइयाँ हे',
    singer: 'Sharda Sinha',
    duration: '04:42',
    durationSec: 282,
    youtubeId: 'v=CqKat91cXWs',
    youtubeUrl: 'https://www.youtube.com/watch?v=CqKat91cXWs',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Dawn Invocation / Bhojpuri Folk',
    description: 'A dawn prayer calling upon the Sun God to rise and accept the devotees’ final Arghya.',
    lyrics: []
  },

  {
    id: 'uga-ho-suruj',
    title: 'Uga Ho Suruj',
    hindiTitle: 'उगा हो सूरुज',
    singer: 'Devi',
    duration: '05:52',
    durationSec: 352,
    youtubeId: '6e6Hp6R5SVU',
    youtubeUrl: 'https://www.youtube.com/watch?v=6e6Hp6R5SVU',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A direct dawn invocation to the rising Sun God.',
    lyrics: []
  },

  {
    id: 'ugi-hey-dinanath',
    title: 'Ugi Hey Dinanath',
    hindiTitle: 'उगी हे दीनानाथ',
    singer: 'Kalpana',
    duration: '05:52',
    durationSec: 352,
    youtubeId: 'FGQ0SCK1AtE',
    youtubeUrl: 'https://www.youtube.com/watch?v=FGQ0SCK1AtE',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional dawn song requesting Dinanath Surya Dev to appear and bless the devotees.',
    lyrics: []
  },

  {
    id: 'roje-roje-ugela',
    title: 'Roje Roje Ugela',
    hindiTitle: 'रोजे रोजे उगेला',
    singer: 'Bharat Sharma Vyas',
    duration: '05:32',
    durationSec: 376,
    youtubeId: 'Rk9js7IoNXU',
    youtubeUrl: 'https://www.youtube.com/watch?v=Rk9js7IoNXU',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A folk devotional celebrating the daily rising of the Sun and its divine presence.',
    lyrics: []
  },

  {
    id: 'paatar-suraj-dev-ho',
    title: 'Paatar Suraj Dev Ho',
    hindiTitle: 'पातर सूरज देव हो',
    singer: 'Traditional Chhath Version',
    duration: '07:45',
    durationSec: 332,
    youtubeId: 'o5W3BPtRdCI',
    youtubeUrl: 'https://www.youtube.com/watch?v=o5W3BPtRdCI',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Traditional Bhojpuri Folk',
    description: 'A traditional sunrise invocation sung as devotees wait for the first rays of Surya Dev.',
    lyrics: []
  },

  {
    id: 'tukur-tukur-aadit-ke',
    title: 'Tukur Tukur Aadit Ke',
    hindiTitle: 'टुकुर टुकुर आदित के',
    singer: 'Bharat Sharma Vyas',
    duration: '05:33',
    durationSec: 333,
    youtubeId: 'WUwlne-cPwA',
    youtubeUrl: 'https://www.youtube.com/watch?v=WUwlne-cPwA',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional folk song centered on Aaditya and the anticipation of sunrise.',
    lyrics: []
  },

  {
    id: 'aanchaara-pa-uga',
    title: 'Aanchaara Pa Uga',
    hindiTitle: 'अँचरा पर उगा',
    singer: 'Bharat Sharma Vyas',
    duration: '04:42',
    durationSec: 282,
    youtubeId: 'it0TljDouMI',
    youtubeUrl: 'https://www.youtube.com/watch?v=it0TljDouMI',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A traditional devotional image of the rising Sun woven into the emotional world of the devotee.',
    lyrics: []
  },

  {
    id: 'chhathi-maiya-sunia',
    title: 'Chhathi Maiya Sunia',
    hindiTitle: 'छठी मईया सुनिअ',
    singer: 'Sharda Sinha',
    duration: '06:57',
    durationSec: 417,
    youtubeId: 'vTomFg4LgSA',
    youtubeUrl: 'https://www.youtube.com/watch?v=vTomFg4LgSA',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A prayer asking Chhathi Maiya to listen to the devotee’s wishes and bless the family.',
    lyrics: []
  },

  {
    id: 'aadit-deen-dayal',
    title: 'Aadit Deen Dayal',
    hindiTitle: 'आदित दीन दयाल',
    singer: 'Traditional Chhath Version',
    duration: '05:32',
    durationSec: 332,
    youtubeId: 'X7Y3OX6TY4U',
    youtubeUrl: 'https://www.youtube.com/watch?v=X7Y3OX6TY4U',
    coverImage: devoteeArghyaImg,
    morningBackground: sunriseGhatImg,
    eveningBackground: eveningWallpaper,
    tag: 'Morning Arghya',
    ragaOrMood: 'Bhojpuri Folk Devotional',
    description: 'A devotional morning prayer praising Aaditya as the compassionate giver of light and life.',
    lyrics: []
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
