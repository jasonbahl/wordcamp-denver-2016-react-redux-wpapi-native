/**
 * External Dependencies
 */
import { Platform } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';


/**
 * State reducers
 *
 * These reducers make up the subtrees of the Rexux store
 */
import articles from './reducers/articles';
import route from './reducers/route';
import settings from './reducers/settings';
import sites from './reducers/sites';

/**
 * Combine all our reducers into one rootReducer
 * This creates all the subtrees within the state tree, where
 * each subtree has it's own reducers
 */
const rootReducer = combineReducers({
	articles,
	route,
	settings,
	sites,
});

/**
 * Create the logger middleware
 */
const loggerMiddleware = createLogger();

/**
 * This configures the store, and applies thunk and logger middlewares
 * Additionally, this sets up support for the devToolsExtension
 */
export default function configureStore( initialState = {} ) {

	return createStore( rootReducer, initialState, compose(
		applyMiddleware( thunk, loggerMiddleware )
	));
}