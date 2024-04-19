// controllers/animalController.js
const Animal = require('../models/Animal');

exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.render('all-animals', { animals });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
};

// Implement other controller methods similarly
