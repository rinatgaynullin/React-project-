export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const DEL_MESSAGE = '@@message/DEL_MESSAGE';

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

