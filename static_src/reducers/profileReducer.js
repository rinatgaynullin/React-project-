import update from 'react-addons-update'
import { 
    START_PROFILE_LOADING, 
    SUCCESS_PROFILE_LOADING,
    ERROR_PROFILE_LOADING,
} from '../constants/profile-constants'

const initialStore = {
    profile: {},
    isProfileLoading: true,
};


export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
                isProfileLoading: { $set: true},
            });
        }
        case SUCCESS_PROFILE_LOADING: {
            const profile = {};
            action.payload.forEach(prof => {
                const  {name, tel, about, p_avatar} = prof
                profile[prof.id] = { name, tel, about, p_avatar };
            });
            return update(store, {
                profile: { $set: profile},
                isProfileLoading: { $set: false},
            })
        }
        case ERROR_PROFILE_LOADING: {
            return update(store, {
                isProfileLoading: { $set: false },
            });
        }
        default:
            return store;
    }
   
}