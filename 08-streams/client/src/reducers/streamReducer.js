import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return { ...state, isSignedIn: false, userId: null };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};
