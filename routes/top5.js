const router = require('express').Router();
const { trip, recommendations, pictures } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
      const dbGalleryData = await Gallery.findAll({
        include: [
          {
            model: Painting,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
  
      res.render('homepage', {
        galleries,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });