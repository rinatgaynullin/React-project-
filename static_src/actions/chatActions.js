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

// export const loadChats = () => ({
//     [RSAA]: {
//         endpoint: '/api/chats',
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         types: [
//             START_CHATS_LOADING,
//             {
//                 type: SUCCESS_CHATS_LOADING,
//                 payload: (action, state, res) => getJSON(res).then(
//                     json => normalize(json, [chats]),
//                 ),
//             },
//             ERROR_CHATS_LOADING,
//         ],
//     },
// });
export function chatsFetshDataStart () {
    return {
        type: START_CHATS_LOADING,
    }
}

export function chatsFetshDataSuccess (chats) {
    return {
        type: SUCCESS_CHATS_LOADING,
        payload: chats
    }
}

export function chatsFetchData (url,dispatch) {
    dispatch(chatsFetshDataStart())
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch(chatsFetshDataSuccess(normalize(response,[chats]))))
    }
}