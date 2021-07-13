const { Recommendation } = require('../models')

const recommendationData = [
    {
        "recommendationTxt": "UNESCO-listed archeological area",
        "trip_id":"1"
    },
    {
        "recommendationTxt": "Johannesburg Zoo",
        "trip_id":"1"
    },
    {
        "recommendationTxt": "Lion Park",
        "trip_id":"1"
    },
    {
        "recommendationTxt": "Mandela House",
        "trip_id":"1"
    },
    {
        "recommendationTxt": "Visit the Aït-Ben-Haddou",
        "trip_id":"2"
    },
    {
        "recommendationTxt": "Africa's large marketplaces",
        "trip_id":"2"
    },
    {
        "recommendationTxt": "Ride a 4x4 at the Erg Chebbi sand dunes",
        "trip_id":"2"
    },
    {
        "recommendationTxt": "stare up at the Atlas Mountains",
        "trip_id":"2"
    },
    {
        "recommendationTxt": "Big 5 Safari, Lounge in Nairobi",
        "trip_id":"3"
    },
    {
        "recommendationTxt": "Visit Traverse Maasai Mara National Park",
        "trip_id":"3"
    },
    {
        "recommendationTxt": "hang out with giraffes at the Rothschild’s Giraffe Environmental Conservation Centre",
        "trip_id":"3"
    },
    {
        "recommendationTxt": "Africa’s Great Rift Valley",
        "trip_id":"3"
    },
    {
        "recommendationTxt": "Cruise for 3 nights and 4 days on the world’s most famous river, the Nile",
        "trip_id":"4"
    },
    {
        "recommendationTxt": "Visit the tomb of King Tut and dozens of other pharaohs in the Valley of the Kings",
        "trip_id":"4"
    },
    {
        "recommendationTxt": "Explore the Old City of Jerusalem",
        "trip_id":"5"
    },
    {
        "recommendationTxt": "Float weightlessly in the Dead Sea",
        "trip_id":"5"
    },
    {
        "recommendationTxt": "Visit ancient Al-Khazneh temple at Jordan’s world-famous Petra ruins",
        "trip_id":"5"
    },
    {
        "recommendationTxt": "Ride a 4x4 through the  Wadi Rum Desert Valley",
        "trip_id":"5"
    },
    {
        "recommendationTxt": "Times Square",
        "trip_id":"6"
    },
    {
        "recommendationTxt": "Statue of Liberty",
        "trip_id":"6"
    },
    {
        "recommendationTxt": "Broadway Show",
        "trip_id":"6"
    },
    {
        "recommendationTxt": "Museum of Modern Art",
        "trip_id":"6"
    },
    {
        "recommendationTxt": "Gaze into the great void of the Grand Canyon",
        "trip_id":"7"
    },
    {
        "recommendationTxt": "Stroll the Las Vegas strip",
        "trip_id":"7"
    },
    {
        "recommendationTxt": "walk through Zion National Park in Utah",
        "trip_id":"7"
    },
    {
        "recommendationTxt": "Canyonlands National Park and Bryce Canyon National Park.",
        "trip_id":"7"
    },
    {
        "recommendationTxt": "Gawk at the 80 ft Rainbow Falls",
        "trip_id":"8"
    },
    {
        "recommendationTxt": "zipline above the treetops in Hilo",
        "trip_id":"8"
    },
    {
        "recommendationTxt": "visit the Hawaii Volcanoes National Park",
        "trip_id":"8"
    },
    {
        "recommendationTxt": " Watch sea turtles at Punalu’u Black Sand Beach",
        "trip_id":"8"
    },
    {
        "recommendationTxt": "Enjoy Banff National Park, Banff Upper Hot Springs",
        "trip_id":"9"
    },
    {
        "recommendationTxt": "Banff Gondola, drive through the Canadian Rockies and view Revelstoke and Glacier National Park",
        "trip_id":"9"
    },
    {
        "recommendationTxt": "trek through Glacier National Park",
        "trip_id":"9"
    },
    {
        "recommendationTxt": "Tour the city of Vancouver",
        "trip_id":"9"
    },
    {
        "recommendationTxt": "Watch the northern lights",
        "trip_id":"10"
    },
    {
        "recommendationTxt": "Hike to the Sun Gate for epic views of Machu Picchu",
        "trip_id":"11"
    },
    {
        "recommendationTxt": "Explore the Sacred Valley of the Incas",
        "trip_id":"11"
    },
    {
        "recommendationTxt": "rich in Peruvian tradition",
        "trip_id":"11"
    },
    {
        "recommendationTxt": "Pet llamas and alpacas",
        "trip_id":"11"
    },
    {
        "recommendationTxt": "Venture into Cotopaxi National Park and hike around the snow-capped Cotopaxi Volcano",
        "trip_id":"12"
    },
    {
        "recommendationTxt": "Swim with many, many, many seals on San Cristobal Island",
        "trip_id":"12"
    },
    {
        "recommendationTxt": "Visit a cacao plantation",
        "trip_id":"12"
    },
    {
        "recommendationTxt": "Explore jungles, mountains, beaches, and more",
        "trip_id":"12"
    },
    {
        "recommendationTxt": "Explore the Xunantunich Ruins",
        "trip_id":"13"
    },
    {
        "recommendationTxt": "Enjoy the relaxed Caribbean beach atmosphere of San Pedro",
        "trip_id":"13"
    },
    {
        "recommendationTxt": "Zipline and cave-tube deep in the jungle of Central America",
        "trip_id":"13"
    },
    {
        "recommendationTxt": "Snorkel off the coasts of San Pedro and Hol Chan",
        "trip_id":"13"
    },
    {
        "recommendationTxt": "zipline above the rainforest canopy",
        "trip_id":"14"
    },
    {
        "recommendationTxt": "Lounge on world class beaches",
        "trip_id":"14"
    },
    {
        "recommendationTxt": "walk high above the clouds in Santa Elena Cloud Forest",
        "trip_id":"14"
    },
    {
        "recommendationTxt": "enjoy the freshest coffee of your life with a plantation tour and sampling",
        "trip_id":"14"
    },
    {
        "recommendationTxt": "Immerse yourself in the remote wilderness of Patagonia’s mountains and glaciers",
        "trip_id":"15"
    },
    {
        "recommendationTxt": "enjoy Chile’s three Torres del Paine granite pillars",
        "trip_id":"15"
    },
    {
        "recommendationTxt": "Trek to the foot of the world-famous Mt. Fitz Roy",
        "trip_id":"15"
    },
    {
        "recommendationTxt": "Walk on (frozen) water at El Perito Moreno glacie",
        "trip_id":"15"
    },
    {
        "recommendationTxt": "Step into the Renaissance in Florence",
        "trip_id":"16"
    },
    {
        "recommendationTxt": "Endulge in Italian foos and wine",
        "trip_id":"16"
    },
    {
        "recommendationTxt": "Explore the Colosseum and Roman Forum",
        "trip_id":"16"
    },
    {
        "recommendationTxt": "Hike to the top of Athens'Acropolis",
        "trip_id":"16"
    },
    {
        "recommendationTxt": "Pour the perfect pint of Guinness in Dublin",
        "trip_id":"17"
    },
    {
        "recommendationTxt": "Enjoy Ireland's pub scene and local music",
        "trip_id":"17"
    },
    {
        "recommendationTxt": "Explore the Cliffs of Moher",
        "trip_id":"17"
    },
    {
        "recommendationTxt": "Blarnery Castle",
        "trip_id":"17"
    },
    {
        "recommendationTxt": "Immerse yourself in Spanish culture",
        "trip_id":"18"
    },
    {
        "recommendationTxt": "Live your best life in Ibiza's nightlife",
        "trip_id":"18"
    },
    {
        "recommendationTxt": "Taste-test the tapas",
        "trip_id":"18"
    },
    {
        "recommendationTxt": "Relax on Valencia's world class beaches",
        "trip_id":"18"
    },
    {
        "recommendationTxt": "Sweat it out during hikes in Switzerland, France, and Italy",
        "trip_id":"19"
    },
    {
        "recommendationTxt": "Hike through Lavaux Vineyard Terraces that overlook Lake Geneva",
        "trip_id":"19"
    },
    {
        "recommendationTxt": "Climb towards the iconic",
        "trip_id":"19"
    },
    {
        "recommendationTxt": "pyramid-shaped Matterhorn mountain",
        "trip_id":"19"
    },
    {
        "recommendationTxt": "Watch the Changing of the Guard at Buckingham Palace",
        "trip_id":"20"
    },
    {
        "recommendationTxt": "Taste the local cuisine",
        "trip_id":"20"
    },
    {
        "recommendationTxt": "Float along the Seine River",
        "trip_id":"20"
    },
    {
        "recommendationTxt": "Watch the Eiffel Tower sparker inthe Champ de Mars",
        "trip_id":"20"
    },
    {
        "recommendationTxt": "Meditate with Buddhist monks in the Mount Koya Monastery",
        "trip_id":"21"
    },
    {
        "recommendationTxt": "enjoy fresh-made sake",
        "trip_id":"21"
    },
    {
        "recommendationTxt": "Walk across the world’s busiest crosswalk at Shibuya",
        "trip_id":"21"
    },
    {
        "recommendationTxt": "the Times Square of Tokyo",
        "trip_id":"21"
    },
    {
        "recommendationTxt": "Get your fill of Thai street food and wander through famous night markets",
        "trip_id":"22"
    },
    {
        "recommendationTxt": "Dance the nights away on the beaches of Phuket",
        "trip_id":"22"
    },
    {
        "recommendationTxt": " Lounge in the sun on white sand beaches and snorkel in crystal-clear waters",
        "trip_id":"22"
    },
    {
        "recommendationTxt": "Cruise through the 42 islands of Phang Nga Bay",
        "trip_id":"22"
    },
    {
        "recommendationTxt": "Marvel at the Taj Mahal",
        "trip_id":"23"
    },
    {
        "recommendationTxt": "Explore palaces and relics of colonial powers past in vibrant Delhi",
        "trip_id":"23"
    },
    {
        "recommendationTxt": " Partake traditional Indian cooking demonstration",
        "trip_id":"23"
    },
    {
        "recommendationTxt": "Suspend your disbelief at Jal Mahal palace floating in a lake, spot the elusive Bengal tigers of Ranthambore National Park",
        "trip_id":"23"
    },
    {
        "recommendationTxt": "Mingle with the locals",
        "trip_id":"24"
    },
    {
        "recommendationTxt": "Get your blood pumping during a canyon tubing adventure",
        "trip_id":"24"
    },
    {
        "recommendationTxt": "relax on some of the world’s finest beaches",
        "trip_id":"24"
    },
    {
        "recommendationTxt": "Balinese food culture at a traditional cooking class, Enjoy the abundance of magnificent Hindu temples in Bali",
        "trip_id":"24"
    },
    {
        "recommendationTxt": "Snorkel with sea turtles and over 1,500 species of fish in the Great Barrier Reef",
        "trip_id":"25"
    },
    {
        "recommendationTxt": "Learn to surf at Bondi Beach",
        "trip_id":"25"
    },
    {
        "recommendationTxt": "Cruise the Sydney Harbor",
        "trip_id":"25"
    },
    {
        "recommendationTxt": "Take advantage of the adventurous side of Queenstown",
        "trip_id":"25"
    }

];

const seedRecommendation = () => Recommendation.bulkCreate(recommendationData);

module.exports = seedRecommendation