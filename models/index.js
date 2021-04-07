const User = require('./User');
const Animal = require('./Animal');
const Cart = require('./Cart');

User.belongsToMany(Animal, {
  through: {
    model: Cart,
    unique: false
  },
  as: 'shoppingCart'
})

Animal.belongsToMany(User, {
  through: {
    model: Cart,
    unique: false
  },
  as: 'usersShopping'
});

module.exports = { User, Animal, Cart };
