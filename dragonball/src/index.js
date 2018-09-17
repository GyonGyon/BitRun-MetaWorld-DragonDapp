import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './utils/registerServiceWorker'
import { initNeuron } from './config/neuron'

const main = () => {
  initNeuron()
  ReactDOM.render(<App />, document.getElementById('root'))
  registerServiceWorker()
}

main()
