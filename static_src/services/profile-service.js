import { profileFetchDataStart, profileFetchDataSuccess } from '../actions/profileActions'

export default function profileFetchData (url, dispatch) {
    dispatch(profileFetchDataStart())
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(response => dispatch(profileFetchDataSuccess(response)))
    }
}