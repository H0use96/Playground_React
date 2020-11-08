import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = React.memo(function TodoList({todos}) {
    console.log("TODOLIST");
    console.log(todos);
    return (
        <ul>
            {todos.content.map(function (content) {
                return <TodoItem content={content}/>;
            })}
        </ul>
    )
});

export default TodoList;