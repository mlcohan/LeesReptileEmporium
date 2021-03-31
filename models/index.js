const User = require('./User');
const Animal = require('./Animal');

User.hasMany(Animal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Animal.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Animal };
