import {ACTION_NEW_TODO} from "../Action";

const initialState = {
    content: []
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NEW_TODO: {

            console.log("Reducer_TODO");
            console.log(state);

            // Action 을 통해, 새로 들어온 데이터 받기.
            // (마치 안드로이드에서, Intent & Bundle 같은 느낌)
            return {
                ...state,
                content: state.content.concat([action.newContent])
            }
        }

        default:
            return state;
    }
}

export default todo;

