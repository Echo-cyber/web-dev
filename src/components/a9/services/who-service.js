const WHO_API = 'http://localhost:4000/rest/who';


export const findWhoToFollow = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch-all-who',
                who
            })
        );





