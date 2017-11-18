import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { audienceReducer, } from './audience';
import { broadcastsReducer, } from './broadcasts';
import { sequencesReducer, } from './sequences';
const history = createHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const rootReducer = combineReducers({
  routing: routerReducer,
  audience: audienceReducer,
  broadcasts: broadcastsReducer,
  sequences: sequencesReducer,
});

const store = createStore(
  rootReducer,
  composedEnhancers,
);

export {
  store,
  history,
};
