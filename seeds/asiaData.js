const { Asia } = require('../models');

const asiaData = [
 {
    "destination_name": "Highlights of Japan",
    "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625940193/Asia/Screen_Shot_2021-07-10_at_1.58.27_PM_jnnv52.png",
    "description": "Japan is a country not to be judged by its cover. Sure, this cover happens to have ancient traditions and temples, snow-capped mountains, and abnormally polite citizens that rival any Midwestern state. So what more can there be to love? Oh, only about a million things. As you explore Japan, you’ll find another world taking part below the surface. Talking toilets. Bowing wars. Cuddle cafes. This is a trip to discover the best of both worlds and experience the unexpected.",
    "departure":"1",
    "arrival":"2",
    "continent_id": 2
  },
  {
      "destination_name": "Thailand Getaway",
      "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625940693/Asia/Screen_Shot_2021-07-10_at_2.10.50_PM_dnnxmx.png",
      "description": "In less time than it would take you to re-watch all the seasons of Friends, you could hit the hotspots of the Thai Islands with some actual friends you’ll make along the way. Yeah, let that sink it. Then, let your toes sink into the white sands, your mouth sink into epic street food, and the island sun sink into your skin…but don’t forget the sunscreen. This trip is sightseeing, meets cultural immersion, meets spicy noodles, meets turquoise waters, meets friendly elephants, meets the best 11 days of your life. This is Thailand.",
      "departure":"1",
      "arrival":"2",
      "continent_id": 2
    },
    {
      "destination_name": "India: The Golden Triangle",
      "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941089/Asia/client-code_sqnlxf.jpg",
      "description": "Not all that glitters is gold, but India’s Golden Triangle doesn’t just glitter. Break out your sunglasses because the trifecta of Delhi, Jaipur, and Agra shines bright. This trip is the Taj Mahal at sunset and yoga (in its birthplace!) at sunrise. It’s peeping for Bengal tigers on a safari, and strolling ancient palaces in eclectic cities. India is unlike any other country you’ve ever experienced before, and it’s about to rock your world, Bollywood-style.",
      "departure":"1",
      "arrival":"2",
      "continent_id": 2
    },
    {
      "destination_name": "Bali: Tropical Escape",
      "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941231/Asia/Screen_Shot_2021-07-10_at_2.20.06_PM_kif7qa.png",
      "departure":"1",
      "arrival":"2",
      "continent_id": 2
    }, 
    
];
    const seedAsia = () => Asia.bulkCreate(asiaData);

    module.exports = seedAsia