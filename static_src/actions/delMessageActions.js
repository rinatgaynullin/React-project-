export const DEL_MESSAGE = '@@message/DEL_MESSAGE';

export const delMessage = ( messageId ) => ({
   type: DEL_MESSAGE,
   messageId,

});
