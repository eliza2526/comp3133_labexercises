const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/Restaurant');

router.get('/', (req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(404).json({ norecordsfound: 'No records found' }));
});

router.get('/cuisine/:cuisine', (req, res) => {
    Restaurant.find({ cuisine: req.params.cuisine })
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(404).json({ norecordsfound: 'No records found for this cuisine' }));
  });

router.get('/', (req, res) => {
    const sortOrder = req.query.sortBy === 'DESC' ? -1 : 1;
  
    Restaurant.find({}, 'cuisine name city restaurant_id')
      .sort({ restaurant_id: sortOrder })
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(404).json({ norecordsfound: 'No records found' }));
  });

router.get('/restaurants/Delicatessen', (req, res) => {
    Restaurant.find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } }, 'cuisine name city')
      .sort({ name: 1 })
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(404).json({ norecordsfound: 'No records found' }));
  });

module.exports = router;