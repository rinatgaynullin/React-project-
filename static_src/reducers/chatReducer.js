
import update from 'react-addons-update';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from '../actions/messageActions.js';
import { ADD_CHAT, DEL_CHAT, BOT_ANSWER, SUCCESS_CHATS_LOADING } from "../actions/chatActions.js";
import { DEL_MESSAGE } from '../actions/delMessageActions.js';


const initialStore = {
    chats: {},
    isLoading: true,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            action.payload.forEach(message => {
                const { id, chatId } = message;
                chats[chatId].messageList.push(id);
            });
            return update(store, {
                chats: { $merge: chats },
                isLoading: { $set: false },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        } 
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                } } },
            });
        }
        case DEL_CHAT: {
            if (Object.keys(store.chats).length > 1){
                const chatId = action.chatId
                let chats =  Object.assign({}, store.chats )
                delete chats[chatId]
                return update (store, { $set: {chats} })
            }
        }
        case DEL_MESSAGE: {
            const chatId = action.chatId
            const messageId = action.messageId
            const chats = Object.assign({}, store.chats)
            let messageList = chats[chatId].messageList
            messageList.splice(messageList.indexOf(messageId), 1 )

            return update (store, { $set: {chats}} )
                
        } 
        default:
            return store;
    }
}
