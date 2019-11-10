import { SEND_MESSAGE } from "../actions/messageActions.js";


export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
         if (action.sender === 'me') {
            store.dispatch(
               store.getState().chatReducer.backGround = true),
           setTimeout(() => store.dispatch(
              store.getState().chatReducer.backGround = false),1000)
         }
        
    }
    return next(action)
 }
 