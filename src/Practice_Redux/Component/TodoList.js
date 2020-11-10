import React, {useEffect} from 'react';
import TodoItem from "./TodoItem";
import todo from "../Reducer/Reducer_Todo";

const TodoList = React.memo(function TodoList({todos}) {

    useEffect(()=> {
        console.log("TodoList reload. list : " + todos);
    })

    return (
        <ul>
            {todos.content.map(function (content) {
                return <TodoItem content={content}/>;
            })}
        </ul>
    )
});

export default TodoList;