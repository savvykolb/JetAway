const { Trip } = require('../models');

const tripData = [
    {
      "destination_name": "JOHANNESBURG, SOUTH AFRICA",
      "url": "https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626020634/johannesburg_qkspuu.jpg",
        "description": "Johannesburg is the biggest city in South Africa and the most visited in all the safari land of the continent. Boosting 40+ art galleries and studios, Johannesburg is a great place for travelers looking to immerse themselves in culture.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 3
    },
    {
        "destination_name": "Highlights of Morocco",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1625943740/morocco_sn9wiy.jpg",
         "description": "There’s the colors you never knew existed in its Islamic architecture, the spices that will wake up taste buds you didn’t know you had, the French emphasis on art, the Spanish influence on enjoying yourself, and the combination of exotic landscapes you never thought to be compatible. Ride some sand dunes, barter your face off, rock the kasbahs, and allow the vast grandeur of this Saharan paradise to remind you that we’re all just a single chickpea in this great big hummus that we call life.",
         "departure":"1",
         "arrival":"2",
         "continent_id": 3
    },
      {
        "destination_name": "Kenya: African Safari",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1625943696/1g2_ts94f2.jpg",
        "description": "Kenya is where the wild things are. So much so that you’ll wonder if you’re secretly in a well-planned nature documentary. No, that’s not us summoning that herd of giraffes perfectly into your view, or cueing the zebras at just the right time. That’s just the magic of this country. It’s the continent’s crown jewel safari destination, and one of the best places on Earth to see the Big 5—lions, elephants, leopards, rhinos, and Cape buffalo—which you’ll seek out on five game drives across the national parks. No need to be pinched. We promise none of this is staged—this is just Kenya.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 3
        
      },
      {
        "destination_name": "Egypt: Cruise the Nile",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626021350/egypt_zqetbb.jpg",
        "description": "The Great Pyramids, the Sphinx, sailing through Aswan, the Nile River, mummies, Pharaohs, crocodiles, the list goes on. All these world-famous sights and experiences could be yours on this adventure through Egypt and the Nile River. Picture yourself in a world of ancient wonders where you’ll discover the lands behind the legends. Walk past towering stone icons, through avenues of sphinxes, and into royal valleys amid the desert sands. And if walking’s not your style, cruise down the Nile, anchoring at remote islands and beside the Theban Hills. End your adventure in Cairo, where historic mosques mingle with today’s modern bustle.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 3
      },
      {
        "destination_name": "Israel & Jordan: Deserts & the Dead Sea",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626021552/jordan_bxvvts.jpg",
        "description": "Israel & Jordan—from poppin’ Tel Aviv to the outer reaches of otherworldly deserts—are like no other destination you can dream of. Nothing else can compare to the feeling of standing before good-as-new ancient ruins from a long-lost kingdom in Jordan. Or floating effortlessly across the Dead Sea’s medicinal waters that literally give you life. Or experiencing firsthand the most important religious sites of Judaism, Christianity, and Islam, among others. Or trekking through the desert—be it by camelback or heavy duty all-terrain vehicle (spoiler: you’ll do both). Or stuffing your face with shawarma, and hummus, and baked lamb, and olives, and falafel, and OMG is that baklava? Yes, it is. Or, well… you get it.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 3
      },
    {
        "destination_name": "NYC: City of Lights",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937767/North%20America/49668996087_adab5644c7_h_frpriq.jpg",
        "description": "It shouldn’t come as a shock that New York is the most visited spot in North America. Offering among the best places in entertainment thanks to the famous Broadway Theater District and shopping and dining districts, the hustle and bustle is one of a kind.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 5
    },
    {
        "destination_name": "US National Parks",
        "url": "https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937977/North%20America/50772013126_48d59acdeb_h_i0whid.jpg",
        "description": "If you want to live in the moment, ignite your curiosity, and explore the national parks containing the tallest trees, driest deserts, and colossal-est canyons in the continental U.S.A., then this trip is for you. Experience the best of the west on this 11-day road trip from Salt Lake City to Phoenix.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 5
      },
      {
        "destination_name": "Hawaii: Big Island Adventure",
        "url": "https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937043/North%20America/Hawaii.jpg",
        "description": "Hawaii is one of the world’s most popular island destinations for a reason. It’s the only U.S. state that produces coffee. The only state with a royal palace. And the only place you can swim with dolphins, hike the world’s largest volcano, and relax with a fresh-caught bowl of poké and an ice-cold mai tai…all in one day. So if you want to say “oooh” and “ahhh” and “wow, a double rainbow!” at unprecedented rates, waft permanently mango-scented air, and meet the most laid-back people, Hawaii is the place for you.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 5
      },
      {
        "destination_name": "Canadian Rockies: Banff to Vancouver",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937395/North%20America/31052500095_a0ea4ea238_h_tjj8fg.jpg",
        "description": "Spend nine days exploring the glittering lakes, sky-high peaks, and seaside cities that make up southwest Canada. From rugged Banff National Park to coastal Vancouver, discover the diversity of Canada and why it is simultaneously the hottest and coolest place to be. After hiking past glaciers, lakes, and peaks in Banff, head to the Canadian Rockies for unmatched views of jagged ice-capped peaks. Once you have your fill of fresh air, go west toward Kelowna and Vancouver for a taste of Okanagan wine country and seaport-metropolis living.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 5
      },
      {
        "destination_name": "Alaska: Northern Adventure",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625937513/North%20America/14610433823_3b819ae057_h_kur7gk.jpg", 
        "description": "They say everything’s bigger in Texas. Well they have clearly never been to Alaska. Sometimes it takes looking at a map to appreciate just how big it truly is (more than double the size of Texas). But Alaska is more than just a big state. It’s the great outdoors served on top of a 23,000-year-old glacier next to a snow-capped mountain with a bald eagle flying into the sunset and a grizzly bear fishing for salmon right behind you. This trip is the adventure of a lifetime. This is U.S. travel like you’ve never seen it.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 5
      },
    

  
    {
        "destination_name": "MACHU PICCHU, PERU – SOUTH AMERICA",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626024241/peru_c78xqq.jpg",
        "description": "Nestled high in the beautiful Andes Mountains, Machu Picchu is South America’s most iconic archeological site sprawling with ancient Inca ruins that draw millions of visitors every year. Jam packed with temples, towers, terraces, walls and more – most of which defy laws of architecture thanks to their mortar-free construction – Machu Picchu isn’t just a cultural hotspot, it’s one of the most breathtaking places in the world.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 6
    },
    {
        "destination_name": "Ecuador & The Galapagos",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626022566/ecuador_qkcfbk.webp",
        "description": "Ecuador is four different worlds, straddling two different hemispheres, with one set of islands (re: the Galápagos Islands) that are unlike anywhere else you’ve been. Get closer to giant tortoises and seals than you ever thought possible, climb volcanoes, swim in some of the most picturesque places, and hike through the Amazon Rainforest. It’s Mother Nature meets Animal Planet meets secluded paradise. It’s the feeling you get when you clean your room, take a step back, and it seems like no one has ever lived there—that’s Ecuador and the Galápagos. Untouched. Unbelievable. Unparalleled to anywhere else in the world.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 6
      },
      {
        "destination_name": "Belize: Rainforests, Reefs & Ruins",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023313/belize1_tlop7w.jpg",
        "description": "This trip is land, air, and sea to the tropical max. Where else can you zoom through the jungle canopy suspended on a zipline at nearly 50 mph? Or trek inland to San Ignacio to unearth the treasures of Mayan ruins at Xunantunich? And once you’ve caught your breath from flying through the air, and properly observed leg day by climbing the temple stairs: sprawl out on some of the best beaches in the world, tube down a lazy river, snorkel, swim, and splash in the crystal-clear water until the Belizean sea cows come home.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 6
      },
      {
        "destination_name": "Costa Rica Adventure",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023913/costa_rica_iyfvg3.jpg",
        "description": "Pura Vida. The unofficial motto of Costa Rica translates to “the simple life.” But it’s less about going off the grid, and more about living a life jam-packed with rainforest hiking, whitewater rafting, ziplining above the clouds, and splashing around coral reefs under the waves. Pura vida is an always optimistic outlook fueled by delicious Mesoamerican-inspired cuisine, the freshest coffee, and the occasional guaro sour cocktail. If you’re looking for all that and a little quality face time with sloths, monkeys, and dolphins, this is the trip for you.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 6
      },
      {
        "destination_name": "Patagonia Trek: Chile & Argentina",
        "url":"https://res.cloudinary.com/dw8zecnb1/image/upload/c_fill,g_auto,h_250,w_970/v1626023642/chile_metewz.jpg",
        "description": "Ever wonder why your favorite outdoorsy clothing brand named themselves after a remote region at the tip of South America? Take one look around this magical place, from the fjords to the glacial lagoons to the towering granite mountains and you’ll see exactly why. And once you’re done looking, start trekking — we’ve got a lot of ground to cover and a lot of places to audibly say “woah” at. So if your boots were made for hiking and you always thought that birds flying south had the right idea, this is the trip for you. Your story begins at the end of the world.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 6
      },
    {
        "destination_name": "Italy & The Greek Islands",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625938091/Europe/40168492674_4f83929f1e_h_zthbom.jpg",
        "description": "Ancient history meets epic parties on Italy and the Greek Islands. See Michelangelo’s David up close and personal in Florence, envision yourself as a Gladiator in the Colosseum of Ancient Rome and travel back in time to where Western Civilization began on the Acropolis of Athens. After all that history, unwind on a white sand beach, drink in hand, on two of Greece’s most iconic islands: Paros and Santorini.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 1
    },
    {
        "destination_name": "Grand Tour of Ireland",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625938430/Europe/client-code_mxougf.jpg",
        "description": "From the Cliffs of Moher and lush green fields of the countryside, to massive urban parks, the Emerald Isle takes beautiful scenery to the next level. But there’s more to Ireland than being really, really, ridiculously good looking. Have a pint at the Guinness Storehouse, feel like royalty atop Blarney Castle, and learn Irish history at every step of the way. At night, the pubs abound with live music to keep the good times going in one of the most photogenic and friendly countries in the world.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 1
      },
      {
        "destination_name": "Ibiza, Barcelona and Valencia",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939058/Europe/13970686237_abc3a6b78a_h_qw0pot.jpg",
        "description": "Everyone knows that Spain is a land where people eat dinner late at night and sleep during the day. But until you actually go and experience it for yourself you can’t know what it feels like to taste patatas bravas on chopitos on albóndigas on chorizo in Barcelona’s tapas bars, or to dance yourself clean to the intoxicating bass music in Ibiza’s legendary night clubs, or to crunch the sand under your feet at one of Valencia’s Mediterranean beaches. So lace up your eating shoes, put on your swankiest swim suit, and start rolling your “r’s.” You’re going to Spain.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 1
      },
      {
        "destination_name": "Hike Europe: The Alps",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939568/Europe/46438249065_40a4d44db8_o_1_b5nc4v.jpg",
        "description": "When you think of Europe, you’re probably thinking old churches, busy shopping streets, and monuments of the past. This trip is none of that. Instead, think walking, hiking, sweating, and breathing heavier than normal through the parts of Europe that not many people get to experience. In just 12 days, you’ll visit three countries, hike through vineyards, by glaciers, and up some of Europe’s most famous mountains. You might even see a cow or two. Because this trip is all about the great outdoors. Where the air is cleaner, the sounds are calming, and you can eat endless amounts of Swiss chocolate (or cheese, for those lunatics that don’t like chocolate) to counteract all the calories you’re going to burn.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 1
      },
      {
        "destination_name": "London & Paris Escape",
        "url":"https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625939797/Europe/25439344572_c538a944d8_h_i0qlxh.jpg",
        "description": "We’ve all heard that schoolyard rhyme about “seeing London and seeing France.” Laugh if you want, but there’s a lot of merit to doing exactly that. London is a posh playground of medieval history and futuristic skyscrapers, with pubs, parks, and world-class museums. Paris is a wonderland for anyone trying to soak up a little culture—and a lot of wine and cheese. Anyone looking for a jam-packed adventure through two of Europe’s greatest metropolises ought to look no further than this.",
        "departure":"1",
        "arrival":"2",
        "continent_id": 1
      },
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
    {
      "destination_name": "Australia & New Zealand Adventure",
      "url": "https://res.cloudinary.com/dtk7zh09m/image/upload/c_fill,g_auto,h_250,w_970/v1625941503/Asia/Screen_Shot_2021-07-10_at_2.24.38_PM_wvkzkx.png",
      "departure":"1",
      "arrival":"2",
      "description": "Chill out on the world’s best beaches before amping up the adrenaline in action sports heaven. Snorkel through shipwrecks, lounge on ship decks and feel the salt-spray and sun rays as you splash through waves. Big cities promise nightlife as wild as the outback, and outdoor adventures are even more extreme with Middle Earth as the backdrop. Whether you want to live it up or lounge in style, there’s something for everyone Down Under.",
      "continent_id": 4
    }
    
  ];

  const seedTrips = () => Trip.bulkCreate(tripData);

module.exports = seedTrips