
const { Australia } = require('../models');

const australiaData = [

    {
      "destination_name": "Australia & New Zealand Adventure",
      "url": "https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941503/Asia/Screen_Shot_2021-07-10_at_2.24.38_PM_wvkzkx.png",
      "departure":"10/08/2022",
      "arrival":"10/17/2022",
      "description": "Chill out on the world’s best beaches before amping up the adrenaline in action sports heaven. Snorkel through shipwrecks, lounge on ship decks and feel the salt-spray and sun rays as you splash through waves. Big cities promise nightlife as wild as the outback, and outdoor adventures are even more extreme with Middle Earth as the backdrop. Whether you want to live it up or lounge in style, there’s something for everyone Down Under.",
      "continent_id": 4
    }
    
  ];

  const seedAustralia = () => Australia.bulkCreate(australiaData);

module.exports = seedAustralia