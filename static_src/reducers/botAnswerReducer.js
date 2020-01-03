import update from 'react-addons-update';
import { BOT_ANSWER } from '../constants/chat-constants'

const initialStore = {
    bgStyle: 'none',
};


export default function botAnswerReducer(store = initialStore, action) {
    switch (action.type) {
        case BOT_ANSWER : {
                return update(store, {$set: {bgStyle: 'red' }}),
                setTimeout(() => update(store, {$set : {bgStyle: 'none'}}),1000  )
            

        }  
        default:
            return store; 
    }
    
}