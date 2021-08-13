import initalState from "./initalState";
import { SET_ALBUMS, SET_TODOS } from "./types";


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_TODOS: return { ...state, todos: action.payload };
        case SET_ALBUMS: return { ...state, albums: action.payload }
        default: return state;
    }
}

export default reducer;