import { SEND_MESSAGE } from "../actions/messageActions.js";
import { alertNewBotMessage } from '../actions/chatActions'
import { DEL_MESSAGE } from "../actions/delMessageActions.js";

export default store => next => (action,dispatch) => {
    switch (action.type) {
        case SEND_MESSAGE:
         if (action.sender === 'bot') {
            alertNewBotMessage()

            
         }
    }
    return next(action)
 }
 