import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'rdux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// a strore
const reducer = combineReducers({})

const initialState = {}

const store = createStore(reducer, initialState)