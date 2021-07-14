const { Africa } = require('../models');

const africaData = [
    {
      "destination_name": "JOHANNESBURG, SOUTH AFRICA",
      "lookupName": "Johannesburg",
      "url": "https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626020634/johannesburg_qkspuu.jpg",
        "description": "Johannesburg is the biggest city in South Africa and the most visited in all the safari land of the continent. Boosting 40+ art galleries and studios, Johannesburg is a great place for travelers looking to immerse themselves in culture.",
        "departure":"08/16/2021",
        "arrival":"08/26/2021",
        
    },
    {
        "destination_name": "Highlights of Morocco",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1625943740/morocco_sn9wiy.jpg",
         "description": "There’s the colors you never knew existed in its Islamic architecture, the spices that will wake up taste buds you didn’t know you had, the French emphasis on art, the Spanish influence on enjoying yourself, and the combination of exotic landscapes you never thought to be compatible. Ride some sand dunes, barter your face off, rock the kasbahs, and allow the vast grandeur of this Saharan paradise to remind you that we’re all just a single chickpea in this great big hummus that we call life.",
         "departure":"08/29/2021",
         "arrival":"09/09/2021",
    
    },
      {
        "destination_name": "Kenya: African Safari",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1625943696/1g2_ts94f2.jpg",
        "description": "Kenya is where the wild things are. So much so that you’ll wonder if you’re secretly in a well-planned nature documentary. No, that’s not us summoning that herd of giraffes perfectly into your view, or cueing the zebras at just the right time. That’s just the magic of this country. It’s the continent’s crown jewel safari destination, and one of the best places on Earth to see the Big 5—lions, elephants, leopards, rhinos, and Cape buffalo—which you’ll seek out on five game drives across the national parks. No need to be pinched. We promise none of this is staged—this is just Kenya.",
        "departure":"09/11/2021",
        "arrival":"09/22/2021",
     
        
      },
      {
        "destination_name": "Egypt: Cruise the Nile",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626021350/egypt_zqetbb.jpg",
        "description": "The Great Pyramids, the Sphinx, sailing through Aswan, the Nile River, mummies, Pharaohs, crocodiles, the list goes on. All these world-famous sights and experiences could be yours on this adventure through Egypt and the Nile River. Picture yourself in a world of ancient wonders where you’ll discover the lands behind the legends. Walk past towering stone icons, through avenues of sphinxes, and into royal valleys amid the desert sands. And if walking’s not your style, cruise down the Nile, anchoring at remote islands and beside the Theban Hills. End your adventure in Cairo, where historic mosques mingle with today’s modern bustle.",
        "departure":"09/29/2021",
        "arrival":"10/08/2021",
        
      },
      {
        "destination_name": "Israel & Jordan: Deserts & the Dead Sea",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626021552/jordan_bxvvts.jpg",
        "description": "Israel & Jordan—from poppin’ Tel Aviv to the outer reaches of otherworldly deserts—are like no other destination you can dream of. Nothing else can compare to the feeling of standing before good-as-new ancient ruins from a long-lost kingdom in Jordan. Or floating effortlessly across the Dead Sea’s medicinal waters that literally give you life. Or experiencing firsthand the most important religious sites of Judaism, Christianity, and Islam, among others. Or trekking through the desert—be it by camelback or heavy duty all-terrain vehicle (spoiler: you’ll do both). Or stuffing your face with shawarma, and hummus, and baked lamb, and olives, and falafel, and OMG is that baklava? Yes, it is. Or, well… you get it.",
        "departure":"10/14/2021",
        "arrival":"10/21/2021",
        
      },
    ];
    const seedAfrica = () => Africa.bulkCreate(africaData);

    module.exports = seedAfrica