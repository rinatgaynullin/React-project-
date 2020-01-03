import {
    ADD_CHAT,
    DEL_CHAT,
    BOT_ANSWER, 
    START_CHATS_LOADING, 
    SUCCESS_CHATS_LOADING
} from '../constants/chat-constants'

export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});
export const alertNewBotMessage = (chatId) =>( {
    type: BOT_ANSWER,
    chatId,
});
export const delChat = (chatId) => ({
    type: DEL_CHAT,
    chatId,
}) 
export function chatsFetshDataStart () {
    return {
        type: START_CHATS_LOADING,
    }
}
export function chatsFetshDataSuccess (chats) {
    return {
        type: SUCCESS_CHATS_LOADING,
        payload: chats,
    }
}

