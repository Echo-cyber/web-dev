import profileData from "./data/profile.json";

const profile = (state=profileData, action)=> {
    switch (action.type) {
        case 'update-profile':
            console.log(state);
            return {
                ...state,
                profile: action.profileData

            }

        default:
            return (state);
    }

};

export default profile;

