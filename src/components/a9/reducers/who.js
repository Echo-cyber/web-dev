import whoJson from "./data/who.json";

const who = (state=whoJson, action) => {
    switch(action.type) {
        case 'fetch-all-who':
            return (
                action.who
            );
        break;

        default:
            return(state);
    }

}
export default who;