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

Candy.prototype.increment = function() {
  return this.increment('quantity');
};

Candy.prototype.decrement = function() {
  return this.decrement('quantitiy');
};

module.exports = Candy;
