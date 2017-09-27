import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import storeFactory from './store'
import { addColor, removeColor, rateColor, sortColors } from './actions'

const store = storeFactory()

window.React = React
window.store = store

render(
    <App store={store} />,
    document.getElementById('react-container')
)