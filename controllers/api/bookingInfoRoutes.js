const router = require('express').Router();
const { BookingInfo } = require('../../models');


router.post('/book', (req, res) => {
  console.log(req.body)
  BookingInfo.create(req.body)
    .then((bookingInfo) => {
      res.status(200).json(bookingInfo)
    })      
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });

    module.exports = router;

   