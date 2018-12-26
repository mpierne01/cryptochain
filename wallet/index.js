const { STARTING_BALANCE } = require('../config');
// Will need
const { ec, cryptoHash } = require('../util');

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;



module.exports = Wallet;
