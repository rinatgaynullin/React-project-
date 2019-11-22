
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatReducer';
import messageReducer from './messageReducer'
import profileReducer from './profileReducer'
import botAnswerReducer from './botAnswerReducer'


export default (history) => combineReducers({
    router: connectRouter(history), 
    chatReducer,
    messageReducer,
    profileReducer,
    botAnswerReducer,

});
