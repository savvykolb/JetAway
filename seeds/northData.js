const { North } = require('../models');

const northData = [
    
    {
        "destination_name": "NYC: City of Lights",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937767/North%20America/49668996087_adab5644c7_h_frpriq.jpg",
        "description": "It shouldn’t come as a shock that New York is the most visited spot in North America. Offering among the best places in entertainment thanks to the famous Broadway Theater District and shopping and dining districts, the hustle and bustle is one of a kind.",
        "departure":"11/06/2021",
        "arrival":"11/14/2021",
        "continent_id": 5
    },
    {
        "destination_name": "US National Parks",
        "url": "https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937977/North%20America/50772013126_48d59acdeb_h_i0whid.jpg",
        "description": "If you want to live in the moment, ignite your curiosity, and explore the national parks containing the tallest trees, driest deserts, and colossal-est canyons in the continental U.S.A., then this trip is for you. Experience the best of the west on this 11-day road trip from Salt Lake City to Phoenix.",
        "departure":"11/23/2021",
        "arrival":"12/01/2021",
        "continent_id": 5
      },
      {
        "destination_name": "Hawaii: Big Island Adventure",
        "url": "https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937043/North%20America/Hawaii.jpg",
        "description": "Hawaii is one of the world’s most popular island destinations for a reason. It’s the only U.S. state that produces coffee. The only state with a royal palace. And the only place you can swim with dolphins, hike the world’s largest volcano, and relax with a fresh-caught bowl of poké and an ice-cold mai tai…all in one day. So if you want to say “oooh” and “ahhh” and “wow, a double rainbow!” at unprecedented rates, waft permanently mango-scented air, and meet the most laid-back people, Hawaii is the place for you.",
        "departure":"12/04/2021",
        "arrival":"12/10/2021",
        "continent_id": 5
      },
      {
        "destination_name": "Canadian Rockies: Banff to Vancouver",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937395/North%20America/31052500095_a0ea4ea238_h_tjj8fg.jpg",
        "description": "Spend nine days exploring the glittering lakes, sky-high peaks, and seaside cities that make up southwest Canada. From rugged Banff National Park to coastal Vancouver, discover the diversity of Canada and why it is simultaneously the hottest and coolest place to be. After hiking past glaciers, lakes, and peaks in Banff, head to the Canadian Rockies for unmatched views of jagged ice-capped peaks. Once you have your fill of fresh air, go west toward Kelowna and Vancouver for a taste of Okanagan wine country and seaport-metropolis living.",
        "departure":"12/24/2021",
        "arrival":"12/30/2021",
        "continent_id": 5
      },
      {
        "destination_name": "Alaska: Northern Adventure",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937513/North%20America/14610433823_3b819ae057_h_kur7gk.jpg", 
        "description": "They say everything’s bigger in Texas. Well they have clearly never been to Alaska. Sometimes it takes looking at a map to appreciate just how big it truly is (more than double the size of Texas). But Alaska is more than just a big state. It’s the great outdoors served on top of a 23,000-year-old glacier next to a snow-capped mountain with a bald eagle flying into the sunset and a grizzly bear fishing for salmon right behind you. This trip is the adventure of a lifetime. This is U.S. travel like you’ve never seen it.",
        "departure":"01/08/2022",
        "arrival":"01/19/2022",
        "continent_id": 5
      },
    

  
  ];

  const seedNorth = () => North.bulkCreate(northData);

module.exports = seedNorth