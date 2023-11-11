import {combineReducers} from 'redux' 
import {postReducer} from './postReducer';
import commentReducer from './commentReducer';

const reducers =  combineReducers({
    postReducer,
    comments: commentReducer,       
});
export default reducers;