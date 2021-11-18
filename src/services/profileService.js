const TWEET_API = 'http://localhost:4000/api/profile';

export const fetchCurrentProfile = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-curr-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, newProfile) =>
    fetch(TWEET_API, {
        method: 'PUT',
        body: JSON.stringify(newProfile.profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'update-profile',
                profile
            })
        );

