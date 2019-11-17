export const DEL_MESSAGE = '@@message/DEL_MESSAGE';

export const delMessage = ( messageId,chatId ) => ({
   type: DEL_MESSAGE,
   messageId,
   chatId,
});
