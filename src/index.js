import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import storeFactory from './store'
import { addColor, removeColor, rateColor, sortColors } from './actions'

const store = storeFactory()

const render = () =>
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('react-container')
    )

store.subscribe(render)
render()