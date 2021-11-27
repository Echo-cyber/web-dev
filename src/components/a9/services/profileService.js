const PROFILE_API = 'http://localhost:4000/rest/profile';
// const TWEET_API = 'https://glacial-river-55323.herokuapp.com/api/profile';

export const fetchCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-curr-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, newProfile) =>
    fetch(`${PROFILE_API}/${newProfile.profile._id}`, {
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

