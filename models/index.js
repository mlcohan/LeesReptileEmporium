const User = require('./User');
const Animal = require('./Animal');
const Cart = require('./Cart');

User.belongsToMany(Animal, {
  through: { 
    model: Cart,
    unique: false
  },
  as: 'shopping_cart'
})

Animal.belongsToMany(User, {
  through: { 
    model: Cart,
    unique: false
  },
  as: 'users_shopping'
});

module.exports = { User, Animal, Cart };
