import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer'

const middlewarers = [logger] 

export const store = createStore(rootReducer, applyMiddleware(...middlewarers))

export const persistor = persistStore(store);

export default {store, persistor};