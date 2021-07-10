const router = require('express').Router();
const { bookingInfo } = require('../models');

// Book trip Info
router.post('/', async (req, res) => {
    try {
      const dbBookingInfoData = await bookingInfo.create({
      address: req.body.address,
      cityTown: req.body.cityTown,
      state: req.body.state,
      country: req.body.country,
      zipcode: req.body.zipcode,
      Bday: req.body.Bday,
        });
         
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbBookingInfoData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

    module.exports = router;