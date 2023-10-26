import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './redux/reducers/usersReducers';

//create reducers
const rootReducer = combineReducers({
  userList: userReducer,
});

//inital State
const initalState = {};

//middlewares
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
