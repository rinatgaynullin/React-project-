

export const START_PROFILE_LOADING = '@@profile/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@profile/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@profile/ERROR_PROFILE_LOADING';

// export const loadProfile = () => ({
//     [RSAA]: {
//         endpoint: '/api/profile',
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         types: [
//             START_PROFILE_LOADING,
//             {
//                 type: SUCCESS_PROFILE_LOADING,
//                 payload: (action, state, res) => getJSON(res).then(
//                     json => json,
//                 ),
//             },
//             ERROR_PROFILE_LOADING,
//         ],
//     },
// });

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

export function profileFetchData (url, dispatch) {
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