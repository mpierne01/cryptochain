const { GENESIS_DATA } = require('./config');
const { cryptoHash } = require('./crypto-hash');

class Block {
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
  this.timestamp = timestamp;
  this.lastHash = lastHash;
  this.hash = hash;
  this.data = data;
  this.nonce = nonce;
  this.difficulty = difficulty;
  }

  static genesis() {
   return new this(GENESIS_DATA);
 }
 static mineBlock({ lastBlock, data }) {
     const lastHash = lastBlock.hash;
     let hash, timestamp;
     let { difficulty } = lastBlock;
     let nonce = 0;

// bigger fan of for each and for loops, but do while works here well.
     do {
       nonce++;
       timestamp = Date.now();
       difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
       hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
     } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

     return new this({ timestamp, lastHash, data, difficulty, nonce, hash });
   }
   });
 }

module.exports = Block
