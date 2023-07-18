// routes/api/Foods.js

const express = require('express');
const router = express.Router();

// Load Food model
const Food = require('../../models/Foods');

// @route GET api/Foods/test
// @description tests Foods route
// @access Public
router.get('/test', (req, res) => res.send('Food route testing!'));

// @route GET api/Foods
// @description Get all Foods
// @access Public
router.get('/', (req, res) => {
  Food.find()
    .then(Foods => res.json(Foods))
    .catch(err => res.status(404).json({
			noFoodsfound: 'No Foods found' 
		})
	);
});

// @route GET api/Foods/:id
// @description Get single Food by id
// @access Public
router.get('/:id', (req, res) => {
  Food.findById(req.params.id)
    .then(Food => res.json(Food))
    .catch(err => res.status(404).json({ noFoodfound: 'No Food found' }));
});

// @route GET api/Foods
// @description add/save Food
// @access Public
router.post('/', (req, res) => {
  Food.create(req.body)
    .then(Food => res.json({ msg: 'Food added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Food' }));
});

// @route GET api/Foods/:id
// @description Update Food
// @access Public
router.put('/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body)
    .then(Food => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/Foods/:id
// @description Delete Food by id
// @access Public
router.delete('/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, req.body)
    .then(Food => res.json({ mgs: 'Food entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Food' }));
});

module.exports = router;