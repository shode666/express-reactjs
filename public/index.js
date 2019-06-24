import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom'

import reducers from './src/reducers';
import App from './src/app'
import './index.css'
const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}> <App/> </Provider>,document.getElementById('root'))