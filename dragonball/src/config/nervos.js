const { default: Nervos } = require('@nervos/chain')

const config = require('.')

if (typeof window.nervos !== 'undefined') {
  window.nervos = Nervos(window.nervos.currentProvider)
  window.nervos.currentProvider.setHost(config.chain)
} else {
  console.log('No Nervos web3? You should consider trying Neuron!')
  window.nervos = Nervos(config.chain)
}

const nervos = window.nervos

module.exports = nervos
