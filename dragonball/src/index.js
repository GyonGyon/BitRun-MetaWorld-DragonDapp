import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './utils/registerServiceWorker'

const main = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
  registerServiceWorker()
}

main()
