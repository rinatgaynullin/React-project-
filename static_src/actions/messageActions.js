import { SEND_MESSAGE, DEL_MESSAGE } from '../constants/message-constants'

export const sendMessage = ( messageId, text, sender, chatId) => ({
    type: SEND_MESSAGE,
    text,
    sender,
    chatId,
    messageId,
});
export const delMessage = ( messageId,chatId ) => ({
	type: DEL_MESSAGE,
	messageId,
    chatId,
});

