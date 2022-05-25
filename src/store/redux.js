import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

// ==============================|| REDUX - MAIN STORE ||============================== //

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));
const persister = 'Free';

export { store, persister };
