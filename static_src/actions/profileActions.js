import { START_PROFILE_LOADING, SUCCESS_PROFILE_LOADING } from '../constants/profile-constants'


export function profileFetchDataStart () {
    return {
        type: START_PROFILE_LOADING,
    }
}

export function profileFetchDataSuccess (profile) {
    return {
        type: SUCCESS_PROFILE_LOADING,
        payload: profile,
    }
}

