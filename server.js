//express boilerplate code  
var express = require('express');
var app = express();
const Web3 = require('web3');
const contract = require('truffle-contract');
const artifacts = require('./build/Counter.json');
const cors = require('cors');
var routes = require('./routes');
const req = require('express/lib/request');

app.use(express.json());
app.use(cors())
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
  } else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}
const LMS = contract(artifacts)
LMS.setProvider(web3.currentProvider)
const setSolidityContract = async () => {
    const accounts = await web3.eth.getAccounts();
    const lms = await LMS.deployed();
    routes(app, lms, accounts, accounts[0]);

    //listen on port 3000
    app.listen(3000, function () {
    console.log('app listening on port 3000!');
    }   
);
}
setSolidityContract()

