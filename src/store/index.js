import { createStore, combineReducers } from 'redux'
import { colors, sort } from './reducers'
import stateData from '../../data/initialState'

const store = createStore(
    combineReducers({ colors, sort }),
    stateData
)