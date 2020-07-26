import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewarers = [logger] 

const store = createStore(rootReducer, applyMiddleware(...middlewarers))

export default store