import update from 'react-addons-update';
import { SEND_MESSAGE, DEL_MESSAGE } from '../constants/message-constants';
import {
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../constants/chat-constants';

const initialStore = {
    messages: {},
    messageId: 0,
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            let messageId = store.messageId + 1;
            return update (store, {
                messages: { $merge: {
                    [action.messageId]: {
                        text: action.text, sender: action.sender
                    } } },
                messageId: { $set: messageId}
            })
        }
        case DEL_MESSAGE: {
            const messageId = action.messageId
            let messages = Object.assign({}, store.messages)
            delete messages[messageId]
            return update(store, {
                messages: { $set: messages }
             })
            
        }
        case START_CHATS_LOADING: {
            return update (store, {
                isLoading: { $set: true },
            })
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: { $set: action.payload.entities.messages },
                messageId: { $set: Object.keys(action.payload.entities.messages).length + 1}
            });
        }
        default:
            return store;
    }
}