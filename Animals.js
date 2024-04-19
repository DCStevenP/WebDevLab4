// model/Animal.js
const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  zoo: { type: String, required: true },
  scientificName: { type: String, required: true },
  commonName: { type: String, required: true },
  givenName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number, required: true },
  isTransportable: { type: Boolean, required: true },
});

module.exports = mongoose.model('Animal', AnimalSchema);

const Animal = require('./model/Animal');

// Generate mock data
const mockData = require('./mockData.json');

// Function to insert mock data into the database
async function seedDatabase() {
  try {
    await Animal.insertMany(mockData);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

// Call the function
seedDatabase();

// routes/animal.js
const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Define routes
router.get('/', animalController.getAllAnimals);
router.get('/:id/edit', animalController.getAnimalById);
router.post('/', animalController.createAnimal);
router.post('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;
