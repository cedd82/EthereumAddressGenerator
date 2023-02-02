const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const Web3 = require('web3');
const web3 = new Web3();

// Generate a new key pair
const keyPair = ec.genKeyPair();
const privateKey = keyPair.getPrivate('hex');
const publicKey = keyPair.getPublic('hex');

console.log("Private Key: ", privateKey);
console.log("Public Key: ", publicKey);


// Get the address of the new wallet

// this was removed and nolonger works:
// const walletAddress = web3.eth.accounts.publicKeyToAddress(publicKey);

// instead dervie an address  from the hash of the public key
const hash = web3.utils.sha3(publicKey);

// Get the address of the new wallet
const walletAddress = '0x' + hash.slice(24);

console.log("Quorum Address: ", walletAddress);