import { GET_ALL, LOAD, FAILED } from "./../ActionsTypes/Contact";

const initialState = {
    contactList: [],
    load: false,
    error: null,
};
const reducerContact = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD:
            return { ...state, load: true };
        case GET_ALL:
            return { ...state, load: false, contactList: payload.contactList };
        case FAILED:
            return { ...state, load: false, error: payload };

        default:
            return state;
    }
};
export default reducerContact;
