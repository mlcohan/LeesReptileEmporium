const User = require('./User');
const Animal = require('./Animal');
const Cart = require('./Cart');

User.hasMany(Animal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Animal.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Animal, Cart };
