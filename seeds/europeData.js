const { Europe } = require('../models');

const europeData = [
  
      
    {
        "destination_name": "Italy & The Greek Islands",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625938091/Europe/40168492674_4f83929f1e_h_zthbom.jpg",
        "description": "Ancient history meets epic parties on Italy and the Greek Islands. See Michelangelo’s David up close and personal in Florence, envision yourself as a Gladiator in the Colosseum of Ancient Rome and travel back in time to where Western Civilization began on the Acropolis of Athens. After all that history, unwind on a white sand beach, drink in hand, on two of Greece’s most iconic islands: Paros and Santorini.",
        "departure":"04/21/2022",
        "arrival":"04/27/2022",
        "continent_id": 1
    },
    {
        "destination_name": "Grand Tour of Ireland",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625938430/Europe/client-code_mxougf.jpg",
        "description": "From the Cliffs of Moher and lush green fields of the countryside, to massive urban parks, the Emerald Isle takes beautiful scenery to the next level. But there’s more to Ireland than being really, really, ridiculously good looking. Have a pint at the Guinness Storehouse, feel like royalty atop Blarney Castle, and learn Irish history at every step of the way. At night, the pubs abound with live music to keep the good times going in one of the most photogenic and friendly countries in the world.",
        "departure":"05/05/2022",
        "arrival":"05/11/2022",
        "continent_id": 1
      },
      {
        "destination_name": "Ibiza, Barcelona and Valencia",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939058/Europe/13970686237_abc3a6b78a_h_qw0pot.jpg",
        "description": "Everyone knows that Spain is a land where people eat dinner late at night and sleep during the day. But until you actually go and experience it for yourself you can’t know what it feels like to taste patatas bravas on chopitos on albóndigas on chorizo in Barcelona’s tapas bars, or to dance yourself clean to the intoxicating bass music in Ibiza’s legendary night clubs, or to crunch the sand under your feet at one of Valencia’s Mediterranean beaches. So lace up your eating shoes, put on your swankiest swim suit, and start rolling your “r’s.” You’re going to Spain.",
        "departure":"05/22/2022",
        "arrival":"06/01/2022",
        "continent_id": 1
      },
      {
        "destination_name": "Hike Europe: The Alps",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939568/Europe/46438249065_40a4d44db8_o_1_b5nc4v.jpg",
        "description": "When you think of Europe, you’re probably thinking old churches, busy shopping streets, and monuments of the past. This trip is none of that. Instead, think walking, hiking, sweating, and breathing heavier than normal through the parts of Europe that not many people get to experience. In just 12 days, you’ll visit three countries, hike through vineyards, by glaciers, and up some of Europe’s most famous mountains. You might even see a cow or two. Because this trip is all about the great outdoors. Where the air is cleaner, the sounds are calming, and you can eat endless amounts of Swiss chocolate (or cheese, for those lunatics that don’t like chocolate) to counteract all the calories you’re going to burn.",
        "departure":"6/10/2022",
        "arrival":"6/22/2022",
        "continent_id": 1
      },
      {
        "destination_name": "London & Paris Escape",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939797/Europe/25439344572_c538a944d8_h_i0qlxh.jpg",
        "description": "We’ve all heard that schoolyard rhyme about “seeing London and seeing France.” Laugh if you want, but there’s a lot of merit to doing exactly that. London is a posh playground of medieval history and futuristic skyscrapers, with pubs, parks, and world-class museums. Paris is a wonderland for anyone trying to soak up a little culture—and a lot of wine and cheese. Anyone looking for a jam-packed adventure through two of Europe’s greatest metropolises ought to look no further than this.",
        "departure":"06/23/2022",
        "arrival":"07/05/2022",
        "continent_id": 1
      },

    
  ];

  const seedEurope = () => Europe.bulkCreate(europeData);

module.exports = seedEurope