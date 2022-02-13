require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rebel rural unusual hunt credit frame gather'; 
let testAccounts = [
"0x2aa06887d7642c703982f4e3f74736a5e35f1ff9529b2d7e40c2af821cc62910",
"0x3f1613ecc37ae9c1888cbd1d3e797a24b71ee8326f6bdc8cf273a99ab227ee0a",
"0xa2e3209e98ad2b8aee9863cc9757a2230a78b138e13e5b1df24bbe030e4819fa",
"0x90a74de749a340102965bc134608fb5721dd5fc0599dd976606caae4637858c9",
"0x72b4fa260cca91d0ba76cebdc80bc52f395f5a0ed09b736398735bf7ed2d051f",
"0xccac5e59fef252b0e3128e20471cfd171be2cebba30394731f23a084e2e00871",
"0x9625b0d8ef59b51fb37b68acd4883a6b4885a89cdb9ce201c0c0778195c85efe",
"0x8ff9d1e2c351a71933d80e96b4999f0eb0ab8a6a9dd15a4d63addc701b4b35f2",
"0x93861384b113dac84743c298bc18cbcb93091b60b54bc2398ea6223301db0fd8",
"0x3be86d809048d077d9cbd131b661a67576fef9d24200ce6dab1f6ba96192029e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

