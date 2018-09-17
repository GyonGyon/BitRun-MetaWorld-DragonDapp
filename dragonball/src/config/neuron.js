const getAccount = () => {
  return '0x46a23E25df9A0F6c18729ddA9Ad1aF3b6A131160'
}

const getPrivateKey = () => {
  return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
}

const neuron = {
  getAccount,
  getPrivateKey,
}

const initNeuron = () => {
  window.neuron = neuron
}

export { initNeuron }
