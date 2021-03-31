const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const exoticsData = require('./exoticsData.json');
const frogsData = require('./frogs.json');
const lizardsData = require('./lizards.json');
const snakesData = require('./snakes.json');
const turtlesData = require('./turtles.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
