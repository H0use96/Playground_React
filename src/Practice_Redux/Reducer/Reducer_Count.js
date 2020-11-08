import {ACTION_DES, ACTION_INC} from "../Action";

const initState = {
    data: 0,
    log : []
}

const counter = (state = initState, action) => {
    switch (action.type) {
        case ACTION_INC: {
            return state.data + 1;
        }

        case ACTION_DES: {
            return state.data - 1;
        }

        default:
            return state;
    }
}

export default counter;