import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { DEL_MESSAGE } from '../actions/delMessageActions';



const initialStore = {
    messages: {
        1: { text: "Привет!", sender: 'bot' },
        2: { text: "Здравствуйте!", sender: 'bot' },
        3: { text: "Как дела?", sender: 'bot' },
        },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update (store, {
                messages: { $merge: {
                    [action.messageId]: {
                        text: action.text, sender: action.sender
                    } } },
            })
        }
        case DEL_MESSAGE: {
            
               
            
            
        }
        default:
            return store;
    }
}