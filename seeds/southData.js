const { South } = require('../models');

const southData = [

  
    {
        "destination_name": "MACHU PICCHU, PERU – SOUTH AMERICA",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626024241/peru_c78xqq.jpg",
        "description": "Nestled high in the beautiful Andes Mountains, Machu Picchu is South America’s most iconic archeological site sprawling with ancient Inca ruins that draw millions of visitors every year. Jam packed with temples, towers, terraces, walls and more – most of which defy laws of architecture thanks to their mortar-free construction – Machu Picchu isn’t just a cultural hotspot, it’s one of the most breathtaking places in the world.",
        "departure":"01/25/2022",
        "arrival":"01/30/2022",
        "continent_id": 6
    },
    {
        "destination_name": "Ecuador & The Galapagos",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626022566/ecuador_qkcfbk.webp",
        "description": "Ecuador is four different worlds, straddling two different hemispheres, with one set of islands (re: the Galápagos Islands) that are unlike anywhere else you’ve been. Get closer to giant tortoises and seals than you ever thought possible, climb volcanoes, swim in some of the most picturesque places, and hike through the Amazon Rainforest. It’s Mother Nature meets Animal Planet meets secluded paradise. It’s the feeling you get when you clean your room, take a step back, and it seems like no one has ever lived there—that’s Ecuador and the Galápagos. Untouched. Unbelievable. Unparalleled to anywhere else in the world.",
        "departure":"02/11/2022",
        "arrival":"02/19/2022",
        "continent_id": 6
      },
      {
        "destination_name": "Belize: Rainforests, Reefs & Ruins",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023313/belize1_tlop7w.jpg",
        "description": "This trip is land, air, and sea to the tropical max. Where else can you zoom through the jungle canopy suspended on a zipline at nearly 50 mph? Or trek inland to San Ignacio to unearth the treasures of Mayan ruins at Xunantunich? And once you’ve caught your breath from flying through the air, and properly observed leg day by climbing the temple stairs: sprawl out on some of the best beaches in the world, tube down a lazy river, snorkel, swim, and splash in the crystal-clear water until the Belizean sea cows come home.",
        "departure":"02/25/2022",
        "arrival":"03/07/2022",
        "continent_id": 6
      },
      {
        "destination_name": "Costa Rica Adventure",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023913/costa_rica_iyfvg3.jpg",
        "description": "Pura Vida. The unofficial motto of Costa Rica translates to “the simple life.” But it’s less about going off the grid, and more about living a life jam-packed with rainforest hiking, whitewater rafting, ziplining above the clouds, and splashing around coral reefs under the waves. Pura vida is an always optimistic outlook fueled by delicious Mesoamerican-inspired cuisine, the freshest coffee, and the occasional guaro sour cocktail. If you’re looking for all that and a little quality face time with sloths, monkeys, and dolphins, this is the trip for you.",
        "departure":"03/08/2022",
        "arrival":"03/19/2022",
        "continent_id": 6
      },
      {
        "destination_name": "Patagonia Trek: Chile & Argentina",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023642/chile_metewz.jpg",
        "description": "Ever wonder why your favorite outdoorsy clothing brand named themselves after a remote region at the tip of South America? Take one look around this magical place, from the fjords to the glacial lagoons to the towering granite mountains and you’ll see exactly why. And once you’re done looking, start trekking — we’ve got a lot of ground to cover and a lot of places to audibly say “woah” at. So if your boots were made for hiking and you always thought that birds flying south had the right idea, this is the trip for you. Your story begins at the end of the world.",
        "departure":"04/03/2022",
        "arrival":"04/10/2022",
        "continent_id": 6
      },
   
  ];

  const seedSouth = () => South.bulkCreate(southData);

module.exports = seedSouth