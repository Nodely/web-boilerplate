/**
 * Created by Ivan Soloviev <info@nodely.ru>
 * Date: 02/13/2018
 *
 * Copyright @ Nodely, 2018
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Nodely from 'nodely-libs'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Nodely>
    <App />
  </Nodely>, document.getElementById('root'))

// temporary disable this feature due to conflicts between multiple service workers
// registerServiceWorker()
