import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducers';



const intialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    products:productReducer
}),
intialState,
composeEnhancer(applyMiddleware(thunk))
);

export default store;