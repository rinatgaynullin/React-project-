import {chatsFetshDataStart, chatsFetshDataSuccess} from '../actions/chatActions'
import { normalize } from 'normalizr';
import { chats } from '../utils/schemas';

export default function chatsFetchData (url,dispatch) {
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