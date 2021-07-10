module.exports = (db) => {
        db.trip.create({
            destinationName: 'JOHANNESBURG, SOUTH AFRICA',
            description: 'Johannesburg is the biggest city in South Africa and the most visited in all the safari land of the continent. Boosting 40+ art galleries and studios, Johannesburg is a great place for travelers looking to immerse themselves in culture.',
            continentId: 3
        }).then(() => {
            db.trip.create({
                destinationName: 'Highlights of Morocco',
                description: 'There’s the colors you never knew existed in its Islamic architecture, the spices that will wake up taste buds you didn’t know you had, the French emphasis on art, the Spanish influence on enjoying yourself, and the combination of exotic landscapes you never thought to be compatible. Ride some sand dunes, barter your face off, rock the kasbahs, and allow the vast grandeur of this Saharan paradise to remind you that we’re all just a single chickpea in this great big hummus that we call life.',
                continentId: 3
            }).then(() => {
                db.trip.create({
                    destinationName: 'Kenya: African Safari',
                    description: 'Kenya is where the wild things are. So much so that you’ll wonder if you’re secretly in a well-planned nature documentary. No, that’s not us summoning that herd of giraffes perfectly into your view, or cueing the zebras at just the right time. That’s just the magic of this country. It’s the continent’s crown jewel safari destination, and one of the best places on Earth to see the Big 5—lions, elephants, leopards, rhinos, and Cape buffalo—which you’ll seek out on five game drives across the national parks. No need to be pinched. We promise none of this is staged—this is just Kenya.',
                    continentId: 3
                }).then(() => {
                    db.trip.create({
                        destinationName: 'Egypt: Cruise the Nile',
                        description: 'The Great Pyramids, the Sphinx, sailing through Aswan, the Nile River, mummies, Pharaohs, crocodiles, the list goes on. All these world-famous sights and experiences could be yours on this adventure through Egypt and the Nile River. Picture yourself in a world of ancient wonders where you’ll discover the lands behind the legends. Walk past towering stone icons, through avenues of sphinxes, and into royal valleys amid the desert sands. And if walking’s not your style, cruise down the Nile, anchoring at remote islands and beside the Theban Hills. End your adventure in Cairo, where historic mosques mingle with today’s modern bustle.',
                        continentId: 3
                    }).then(() => {
                        db.trip.create({
                            destinationName: 'Israel & Jordan: Deserts & the Dead Sea',
                            description: 'Israel & Jordan—from poppin’ Tel Aviv to the outer reaches of otherworldly deserts—are like no other destination you can dream of. Nothing else can compare to the feeling of standing before good-as-new ancient ruins from a long-lost kingdom in Jordan. Or floating effortlessly across the Dead Sea’s medicinal waters that literally give you life. Or experiencing firsthand the most important religious sites of Judaism, Christianity, and Islam, among others. Or trekking through the desert—be it by camelback or heavy duty all-terrain vehicle (spoiler: you’ll do both). Or stuffing your face with shawarma, and hummus, and baked lamb, and olives, and falafel, and OMG is that baklava? Yes, it is. Or, well… you get it.',
                            continentId: 3
                        }).then(() => {
                            db.trip.create({
                                destinationName: 'NYC: City of Lights',
                                description: 'It shouldn’t come as a shock that New York is the most visited spot in North America. Offering among the best places in entertainment thanks to the famous Broadway Theater District and shopping and dining districts, the hustle and bustle is one of a kind.',
                                continentId: 5
                            }).then(() => {
                                db.trip.create({
                                    destinationName: 'US National Parks',
                                    description: 'If you want to live in the moment, ignite your curiosity, and explore the national parks containing the tallest trees, driest deserts, and colossal-est canyons in the continental U.S.A., then this trip is for you. Experience the best of the west on this 11-day road trip from Salt Lake City to Phoenix.',
                                    continentId: 5
                                }).then(() => {
                                    db.trip.create({
                                        destinationName: 'Hawaii: Big Island Adventure',
                                        description: 'Hawaii is one of the world’s most popular island destinations for a reason. It’s the only U.S. state that produces coffee. The only state with a royal palace. And the only place you can swim with dolphins, hike the world’s largest volcano, and relax with a fresh-caught bowl of poké and an ice-cold mai tai…all in one day. So if you want to say “oooh” and “ahhh” and “wow, a double rainbow!” at unprecedented rates, waft permanently mango-scented air, and meet the most laid-back people, Hawaii is the place for you.',
                                        continentId: 5
                                    }).then(() => {
                                        db.trip.create({
                                            destinationName: 'Canadian Rockies: Banff to Vancouver',
                                            description: 'Spend nine days exploring the glittering lakes, sky-high peaks, and seaside cities that make up southwest Canada. From rugged Banff National Park to coastal Vancouver, discover the diversity of Canada and why it is simultaneously the hottest and coolest place to be. After hiking past glaciers, lakes, and peaks in Banff, head to the Canadian Rockies for unmatched views of jagged ice-capped peaks. Once you have your fill of fresh air, go west toward Kelowna and Vancouver for a taste of Okanagan wine country and seaport-metropolis living.',
                                            continentId: 5
                                        }).then(() => {
                                            db.trip.create({
                                                destinationName: 'Alaska: Northern Adventure',
                                                description: 'They say everything’s bigger in Texas. Well they have clearly never been to Alaska. Sometimes it takes looking at a map to appreciate just how big it truly is (more than double the size of Texas). But Alaska is more than just a big state. It’s the great outdoors served on top of a 23,000-year-old glacier next to a snow-capped mountain with a bald eagle flying into the sunset and a grizzly bear fishing for salmon right behind you. This trip is the adventure of a lifetime. This is U.S. travel like you’ve never seen it.',
                                                continentId: 5
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
;