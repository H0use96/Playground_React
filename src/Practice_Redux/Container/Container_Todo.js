import React from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {ACTION_NEW_TODO} from "../Action";
import TodoList from "../Component/TodoList";
import TodoTable from "../Component/TodoTable"
function TodosContainer() {

    // const state_todo = useSelector(state => {
    //     console.log("TodoContainer");
    //     console.log(state);
    //     return state.todo;
    // }, shallowEqual);

    const state_todo = useSelector(state => state.todo);

    // useDispatch를 통한 state dispatch
    const dispatcher = useDispatch();

    const addTodo = text => ({
        type: ACTION_NEW_TODO,
        newContent: text
    })

    function onCreate(inputText) {
        debugger;
        console.log(state_todo);
        return dispatcher(addTodo(inputText));
    }

    return <TodoTable todos={state_todo} onCreate={onCreate} />;
}

export default TodosContainer;