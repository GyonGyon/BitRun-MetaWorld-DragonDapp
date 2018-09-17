const nervos = require('../config/nervos')
const { abi, address } = require('./dragonballCompiled')

const transaction = require('../config/transaction')
const dragonBallContract = new nervos.appchain.Contract(abi, address)

module.exports = {
  transaction,
  dragonBallContract,
}
