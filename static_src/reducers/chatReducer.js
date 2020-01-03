
import update from 'react-addons-update';
import { SEND_MESSAGE, DEL_MESSAGE } from '../constants/message-constants';
import { 
    ADD_CHAT, 
    DEL_CHAT, 
    SUCCESS_CHATS_LOADING 
} from "../constants/chat-constants";

const initialStore = {
    chats: {},
    isLoading: true,
    chatId: 0,
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    id: action.chatId,
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
                chatId: { $set: Object.keys(action.payload.entities.chats).length }
            });
        } 
        case ADD_CHAT: {
            const chatId = store.chatId + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        id: chatId,
                        title: action.title, 
                        messageList: []
                } } },
                chatId: { $set: store.chatId + 1 }
            });
        }
        case DEL_CHAT: {
            if (Object.keys(store.chats).length > 1){
                const chatId = action.chatId
                let chats =  Object.assign({}, store.chats )
                delete chats[chatId]
                return update (store, { 
                    $merge: { chats }
                })
            }
        }
        case DEL_MESSAGE: {
            const chatId = action.chatId
            const messageId = action.messageId
            const chats = Object.assign({}, store.chats)
            let messageList = chats[chatId].messageList
            messageList.splice(messageList.indexOf(messageId), 1 )
            return update (store, { 
                chats : { 
                    [chatId]: {
                        messageList:{ $merge: messageList }
                    }
                }, 
            })
        }
        default:
            return store;
    }
}
