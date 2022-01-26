require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stool response sad around inner nation equal gaze'; 
let testAccounts = [
"0x8c455fb9fa4c089e692788db2049177b8835a87d74658d951c1a030bccab6f7f",
"0x2767735518d1f0b99da3df3a17bebf05d2af8741332b7785919f54b15cf197c4",
"0xe94e43d0d8e899a5213a150199d68fb6f60d3f4ddc1446a793059b771bc627a8",
"0x5f2974691fa6beecd711a2e32bde82fa3ee3592db12283fe9deafa84400d9276",
"0x5c53028fc2d7e537a95dabca9079c8d3a2cd8231a7ab134837a42535f00839d5",
"0xc055a5e70fd652b67ddfd5ab979e34c7e46f2c6b758d214d44cd5722b73ed4f7",
"0x67a717c30522275b322ff0c00d3fba25a548b1596b1319bb866c2c940373c12f",
"0x46698f6e76bc113060184cffe0f1bc7c0aa796c6c5fca622a91158a2e62cea6f",
"0x00a210de727d7580254a0011ccb1807c80cb877fd918c5c232dd5b59fd2c7214",
"0x368c61d9cf42e895bdcc97e72c19671729f1a2531202b4a27563333a16bd2ed8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


