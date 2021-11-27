import profileData from "./data/profile.json";

const profile = (state=profileData, action)=> {
    switch (action.type) {
        case 'fetch-curr-profile':
            return(
                action.profile
            )
            break;

        case 'update-profile':
            return {
                ...state,
                profile: action.profile

            }
            break;

        default:
            return (state);
    }

};

export default profile;

