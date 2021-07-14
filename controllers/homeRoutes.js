const router = require('express').Router();
const { Trip, Continent } = require('../models');

  // Load HOME PAGE
  router.get('/', async (req, res) => {
    res.render('homepage');
    });
 
    router.get('/itinerary', async (req, res) => {
      res.render('itinerary');
      });
    // We are needing to render data to the Travel Destination page by continent id dependent on what continent the user clicks.
    // 1. Right now, we have it pulling data into the console log with the exception of the continent id (not sure why that isnt pulling too).
    //2. Our hdlbrs for africa page are not correct in displaying the pulled data. The route shows only main hndlbars => no africa.handlebars content is showing. 


  router.get('/africa', async (req, res) => {
    const tripData = await Trip.findAll().catch((err) => {
      res.join(err);
    });
    const destination = tripData.map((trip) => trip.get({ plain: true }));
    res.render('africa', { destination });
    console.log('ITS WORKING!!!!', destination)
      }); 


// Create new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//testing
// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//end of user


  // router.get('/africa', async (req, res) => {
  //   try {
  //     const africaResults = await Trip.findAll({
  //     include: [
  //       {
  //         // model: Trip,
  //         attributes: ['destination_name', 'url', 'description', 'departure', 'arrival'],
  //       },
  //     ]
  //   })
  //     const newResults = africaResults.map((result) =>
  //     result.get({ plain: true })
  //     );
  //     console.log('FIND ME!!!!!!!', newResults)
  //     res.render('africa', {
  //       newResults,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });




module.exports = router;