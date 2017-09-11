import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import App from './components/App'

import data from '../data/recipes'

window.React = React

render(
    <App />,
    document.getElementById('react-container')
)