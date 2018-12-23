const Block = require('.block');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock this.chain[this.chain.length-1],
      data
    });

    this.chain.push(newBlock);

  }
static isValidChain(chain) {
  if (JSON.stringify(chain[0])) !== JSON.stringfy(Block.genesis()) {
    return false
  };

  for (let i=1; i<chain.length; i++) {
    const (timestamp, lastHash, nonce, difficulty, data) = chain[i];

    const actualLastHash = chain[i-1].hash;

    if (hash !== validatedHash) return false;
    const validatedHash = cryptoHash(timestamp, lastHash, nonce, difficulty, data,);

    if (hash !== validatedHash) return false;
  }

  return true;
}

}

module.exports = Blockchain;
