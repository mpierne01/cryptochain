# cryptochain


## The Block Chain Backend
- Create the Block Class with tests - Constructor
- Create Genesis block tests
- Genesis block to pass/function - Factory
- Mine Blocks tests
- Mine Block to pass/function
- Crypto Hash and SHA-256 tests
- Crypto Hash and SHA-256 to pass/function
- Hash in Mine block tests + functional code

## The Chain
- block chain tests
- block chain to pass/function
- chain validation tests
- chain validation to pass/function
- chain replacement
- adding stubs to the tests jest mock and error mineBlock

## Proof of work
- difficulty and the nonce tests
- difficulty and nonce pass/function
- adding dynamic difficulty and mine rate tests
- adding dynamic difficulty and mine rate pass/function
- adjust the difficulty in the mine block tests
- adjust the difficulty in the mine block pass/function

## Average work test
- average work performed to mine

## Proof of Work Enhancements
- binary hashes
- binary hash refactor
- prevent difficulty jumps tests + functionality
(reason: Prevented a potential difficulty jump attack by adding extra validation for the blockchain.)

## API and Network
- Set up Express API
- Add first get request
- Redis Publisher (pub) / Subscriber (sub) class redis Server --daemonize yes
- Broad Cast Chain ( multiple chains interacting)
- Start Peers and broad cast chain on API Mine multiple ports
- sync on connection

## Wallet and Keys
- Create Wallet Test Classes
- key pair and public key address (256)  ((EC curve))
- verify wallet signature

## Transactions
- Transaction tests
- Tests to pass/function
- Validate Transactions
- Adding transaction update tests
- Transaction Pool Tests
- Transaction Pool API work to pass
- build mine reward

## Mine Transactions
- Transactons miner class
- Validation tests
- Reward Transactions
- Clear Blockchain Transactions
- Mine Transactions Endpoint
- Clear Recorded Transactions
- Calculate Wallet Balance
- Validate transaction blocks, transaction data, inputs, and transaction chain
