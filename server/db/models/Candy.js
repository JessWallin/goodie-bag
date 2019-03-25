const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowEmpty: false,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowEmpty: false,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    min: 0,
    max: 10,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://target.scene7.com/is/image/Target/GUEST_9766bfa7-3fcb-4f4c-9576-15e17ccc1044?wid=488&hei=488&fmt=pjpeg',
  },
});

Candy.beforeUpdate((candyInstance, options) => {
  console.log('this.quantity');
  if (candyInstance.quantity > 10) {
    candyInstance.quantity = 10;
    throw new Error("You can't have more than 10 of each candy!");
  } else if (candyInstance.quantity < 0) {
    candyInstance.quantity = 0;
    throw new Error("You can't have negative candy!");
  }
});

// Candy.beforeUpdate(candy => {
//   if (candy.quantity > 10 || candy.quantity < 1) {
//     throw new Error('Please pick a quantity between one and 10');
//   }
// });

Candy.prototype.increment = function() {
  return this.increment('quantity');
};

Candy.prototype.decrement = function() {
  return this.decrement('quantitiy');
};

module.exports = Candy;
