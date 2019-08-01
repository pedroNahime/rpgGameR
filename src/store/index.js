import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reactotron from 'reactotron-react-js'

import sagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMonitor = Reactotron.createSagaMonitor

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const store = createStore(reducers, { }, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(sagas)

export default store