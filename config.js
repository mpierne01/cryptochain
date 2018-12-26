
const MINE_RATE = 1000;
//in prod make this difficulty much harder than 3. Make it 3 for dev so it doesn't take forever to test.
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: '_____';
  hash: 'hash-one';
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
};


const STARTING_BALANCE = 1000;


module.export = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE};
