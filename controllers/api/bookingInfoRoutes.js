const router = require('express').Router();
const { BookingInfo } = require('../../models');


router.post('/book', (req, res) => {
  BookingInfo.create(req.body)
    .then((bookingInfo) => {
      res.status(200).json(bookingInfo)
    })      
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });


 // task -- add middleware/auth
// Book trip Info
// router.post('/booknow', async (req, res) => {
//     try {
//       const dbBookingInfoData = await bookingInfo.create({
//       address: req.body.address,
//       cityTown: req.body.cityTown,
//       state: req.body.state,
//       country: req.body.country,
//       zipcode: req.body.zipcode,
//       Bday: req.body.Bday,
//       emergencyFirstName: req.body.emergencyFirstName,
//       emergencyLastName: req.body.emergencyLastName,
//       emergencyRelationship: req.body.emergencyRelationship,
//       emergencyPhoneNumber: req.body.emergencyPhoneNumber
//         });
         
//         req.session.save(() => {
//             req.session.loggedIn = true;
//             res.status(200).json(dbBookingInfoData);
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//     });

    module.exports = router;

   