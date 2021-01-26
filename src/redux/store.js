import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { routerMiddleware } from 'connected-react-router'
import { history } from '../history'
import {persistDataToLocalstorage, validateData} from './middlewares'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger, persistDataToLocalstorage, validateData)
const store = createStore(reducer, enhancer)

export default store