import { RSAA, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from '../utils/schemas';



export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DEL_CHAT = '@@chat/DEL_CHAT';
export const BOT_ANSWER = '@@chat/BOT_ANSWER' 

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

export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/static_src/server/api/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => normalize(json, [chats]),
                ),
            },
            ERROR_CHATS_LOADING,
        ],
    },
});

