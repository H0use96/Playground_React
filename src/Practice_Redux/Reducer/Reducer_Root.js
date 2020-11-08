import {combineReducers} from 'redux';
import counter from './Reducer_Count';
import todo from "./Reducer_Todo";

const rootReducer = combineReducers({
    counter,
    todo
});

export default rootReducer;