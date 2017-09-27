import { createStore, combineReducers } from 'redux'
import { colors, sort } from './reducers'
import stateData from '../../data/initialState'

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})

const logState = () => {
    console.log('next state', store.getState())
}

const unsubscribeLogger = store.subscribe(logState)

const store = createStore(
    combineReducers({ colors, sort }),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        {}
)