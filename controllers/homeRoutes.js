const router = require('express').Router();
const { Asia, Africa, Australia, South, Europe } = require('../models');
const { North } = require('../models');


// Load HOME PAGE
  router.get('/', async (req, res) => {
    res.render('homepage');
    });
  
// Display Book Now Route
  router.get('/booknow', async (req, res) => {
  res.render('booknow');
  });
     
  //end session 
  router.get('/end', async (req, res) => {
    res.render('end');
    });
  
    //return to homepage at the end screen
  router.get('/homepage', async (req, res) => {
    res.render('homepage');
  });

    //check to see if created account prior to booking, otherwise, create an account
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/booknow')
    } else {
      res.render('register')
    }
  })


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



module.exports = router;




    
     







