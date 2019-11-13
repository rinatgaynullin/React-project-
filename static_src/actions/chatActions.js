export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DEL_CHAT = '@@chat/DEL_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

const mockApiData =[
   { backGroundColor: 'red' },
   { backGroundColor: 'none' }
]
export const alertNewBotMessage = () => dispatch => {
   setTimeout(() => {
      console.log ('Retard alert')
      dispatch({ type: FETCH_BOT_MESSAGE_SUCCESS, payload: mockApiData })
   }, 1000);

};

export const delChat = (chatId) => ({
   type: DEL_CHAT,
   chatId,
}) 
