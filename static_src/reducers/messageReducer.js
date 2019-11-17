import update from 'react-addons-update';
import { 
    SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';
import {
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../actions/chatActions';
import { DEL_MESSAGE } from '../actions/delMessageActions';




const initialStore = {
    messages: {},
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
            const messageId = action.messageId
            let messages = Object.assign({}, store.messages)
            delete messages[messageId]
            return update(store, { $set: { messages } })
            
        }
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true},
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const messages = {};
            action.payload.forEach(message => {
                const { text, sender} = message;
                messages[message.id] = { text, sender };
            });
            return update(store, {
                messages: { $merge: messages},
                isLoading: { $set: false},
            });
        }
        case ERROR_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: false},
            });
        }
        case START_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: { $merge: action.payload.entities.messages },
            });
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}