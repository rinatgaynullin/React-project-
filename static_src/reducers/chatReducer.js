
import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';
import { ADD_CHAT, DEL_CHAT } from "../actions/chatActions.js";
import { DEL_MESSAGE } from '../actions/delMessageActions.js';


const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: [3]},
    },
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
