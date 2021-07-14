const router = require('express').Router();
const { Trip,Continent } = require('../models');
const { Asia, Africa, Australia, South, Europe } = require('../models');
const { North } = require('../models');


// Load HOME PAGE
  router.get('/', async (req, res) => {
    res.render('homepage');
    });
  
// Display destinations by continents 
    //Africa
      router.get('/africa', async (req, res) => {
         const africaData = await Africa.findAll().catch((err) => {
          res.join(err);
       });
        const destination = africaData.map((africa) => africa.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 
    //Asia
      router.get('/asia', async (req, res) => {
        const asiaData = await Asia.findAll().catch((err) => {
          res.join(err);
        });
        const destination = asiaData.map((asia) => asia.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 

    //Australia
      router.get('/australia', async (req, res) => {
        const australiaData = await Australia.findAll().catch((err) => {
          res.join(err);
        });
        const destination = australiaData.map((australia) => australia.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 
    
    //South America
     router.get('/south', async (req, res) => {
       const southData = await South.findAll().catch((err) => {
           res.join(err);
            });
       const destination = southData.map((south) => south.get({ plain: true }));
       res.render('africa', { destination });
       console.log('ITS WORKING!!!!', destination)
              }); 
      
    //Europe
      router.get('/europe', async (req, res) => {
        const europeData = await Europe.findAll().catch((err) => {
          res.join(err);
        });
        const destination = europeData.map((europe) => europe.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 
    
    //North America

      router.get('/north', async (req, res) => {
        const northData = await North.findAll().catch((err) => {
          res.join(err);
        });
        const destination = northData.map((north) => north.get({ plain: true }));
        res.render('africa', { destination });
        console.log('ITS WORKING!!!!', destination)
          }); 

//Display Itinerary Page by Individual Distination


//       router.get('/itinerary/:id', async (req, res) => {
//         const europeData = await Africa.find().catch((err) => {
//           res.join(err);
//         });
//         const destination = europeData.map((europe) => europe.get({ plain: true }));
//         res.render('itinerary', { destination });
//         console.log('ITS WORKING!!!!', destination)
//           }); 


          
//           router.get('/itinerary/:id', async (req, res) => {
//             const africaData = await Africa.findAll().catch((err) => {
//               res.join(err);
//             });
//             const destination = africaData.map((africa) => africa.get({ plain: true }));
//             res.render('itinerary', { destination });
//             console.log('ITS WORKING!!!!', destination)
//               }); 
    
      // router.get('/itinerary/:id', async (req, res) => {
      //   const africaData = await Africa.fin().catch((err) => {
      //     res.join(err);
      //   });
      //   const destination = africaData.map((africa) => africa.get({ plain: true }));
      //   res.render('itinerary', { destination });
      // router.get('/itinerary/:id', async (req, res) => {
      //   try {
      //     const sameData = await Africa.findByPk(req.params.id, {
          
      //     });
      
      //     const destination = sameData.get({ plain: true });
      //     res.render('itinerary', { destination });
      //   } catch (err) {
      //     console.log(err);
      //     res.status(500).json(err);
      //   }
      // });      //   console.log('ITS WORKING!!!!', destination)
      //     });



      // practice//
  // router.get('/itinerary/:id', async (req, res) => {
  //       try {
  //         const someData = await Africa.findByPk({ where: { destination_name: req.body.destination_name } });
  //         res.render('itinerary', { destination });
  //         console.log('thisssss!!!!', someData);
  //       } catch (err) {
  //         res.status(400).json(err);
  //       }
  //       });
      

  // router.get('/itinerary', async (req, res) => {
  // res.render('itinerary');
  // });

  // router.get('/itinerary/:lookupName', async (req, res) => {
  //   try {
  //     const dData = await Africa.findAll({ 
  //       where: { lookupName: req.params.lookupName } 
  //     });
  //     const destination = dData.map((iData) => iData.get({ plain: true }));
  //     res.render('itinerary', { destination });
  //     console.log('ITINERARY DATA!!!!!!!!!!', destination);
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });

  // router.get('/destination/:lookupName', function (req, res) {
  //   const obj = JSON.parse(JSON.stringify(req.params, {
  //     include: [
  //       {
  //         model: Africa, Asia, Australia, Europe, North, South,
  //         attributes: 
  //       },
  //     ],
  //   }));
  //   res.render('itinerary', obj)
  //   console.log('LOOOOK!!!!!!!!', obj)
  // })
    

//   router.get('/destination/:lookupName', async (req, res) => {
//     try {
//       const destinationData = await Africa.findOne({
//         where: {
//           lookupName: req.params.lookupName
//         }
//       },
//       res.render.json(destinationData));
//       console.log('destinationData:', destinationData)
//       }catch (err) {
//         res.status(500).json(err);
//       }
//     }),


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



module.exports = router;