import { SEND_MESSAGE } from "../constants/message-constants";
import { alertNewBotMessage } from '../actions/chatActions.js'
export default store => next => (action) => {
	switch (action.type) {
		case SEND_MESSAGE:
		 	if (action.sender === 'bot') {
				store.dispatch(alertNewBotMessage(action.chatId))

		 	}
	}
	return next(action)
}