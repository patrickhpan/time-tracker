import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import counter from './counter';
import grid from './grid';


export default combineReducers({
    router: routerReducer,
    user,
    counter,
    grid
})