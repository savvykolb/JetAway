const router = require('express').Router();
const { Trip, Continent } = require('../models');
const seedTrips = require('../seeds/tripData.js');
const tripData = require('../seeds/tripData.js');

// module.exports = (db) => {
  // Load register page
  // router.get('/register', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     res.redirect('/profile');
  //   } else {
  //     res.render('register');
  //   }
  // });

  // // Load profile page
  // router.get('/profile', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     db.User.findOne({
  //       where: {
  //         id: req.session.passport.user.id
  //       }
  //     }).then(() => {
  //       const user = {
  //         userInfo: req.session.passport.user,
  //         isloggedin: req.isAuthenticated()
  //       };
  //       console.log(user);
  //       res.render('profile', user);
  //     });
  //   } else {
  //     res.redirect('/');
  //   }
  // });

  // // Load dashboard page
  // router.get('/', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     const user = {
  //       user: req.session.passport.user,
  //       isloggedin: req.isAuthenticated()
  //     };
  //     res.render('dashboard', user);
  //   } else {
  //     res.render('dashboard');
  //   }
  // });

  // // Load dashboard page
  // router.get('/dashboard', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     const user = {
  //       user: req.session.passport.user,
  //       isloggedin: req.isAuthenticated()
  //     };
  //     res.render('dashboard', user);
  //   } else {
  //     res.render('dashboard');
  //   }
  // });

  // Load HOME PAGE
  router.get('/', async (req, res) => {
    res.render('homepage');
    });
  //  router.get('/register', async (req, res) => {
  //     res.render('register');
  //       });
  router.get('/africa', async (req, res) => {
    const tripData = await Trip.findAll().catch((err) => {
      res.join(err);
    });
    const destination = tripData.map((trip) => trip.get({ plain: true }));
    res.render('africa', { destination });
    console.log('ITS WORKING!!!!', destination)
      }); 

      
//  router.get('/europe', async (req, res) => {
//     res.render('europe');
//       });
  // router.get('/itinerary', async (req, res) => {
  //       res.render('itinerary');
  //         });
  // router.get('/form', async (req, res) => {
  //       res.render('form');
  //         });
  // router.get('/end', async (req, res) => {
  //           res.render('end');
  //             });
  // router.get('/homepage', async (req, res) => {
  //         res.render('homepage');
  //                 });
  // Load example page and pass in an example by id
  // router.get('/example/:id', function (req, res) {
  //   if (req.isAuthenticated()) {
  //     db.Example.findOne({ where: { id: req.params.id }, raw: true }).then(function (dbExample) {
  //       res.render('example-detail', {
  //         userInfo: req.session.passport.user,
  //         isloggedin: req.isAuthenticated(),
  //         example: dbExample
  //       });
  //     });
  //   } else {
  //     res.redirect('/');
  //   }
  // });

  // Logout
  // router.get('/logout', (req, res, next) => {
  //   req.logout();
  //   req.session.destroy((err) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.clearCookie('connect.sid', { path: '/' });
  //     res.redirect('/');
  //   });
  // });

  // Render 404 page for any unmatched routes
  // router.get('*', function (req, res) {
  //   res.render('404');
  // });

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