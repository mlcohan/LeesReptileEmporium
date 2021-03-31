const sequelize = require('../config/connection');
const { User, Animal, Cart } = require('../models');

const userData = require('./userData.json');
const animalData = require('./animal.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
  });

  const animals = await Animal.bulkCreate(animalData);

  process.exit(0);
};

seedDatabase();
