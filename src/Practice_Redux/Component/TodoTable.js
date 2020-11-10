import React, {useEffect, useState} from 'react';
import TodoList from "./TodoList";

const TodoTable = ({todos, onCreate}) => {

    const [input, setInput] = useState("");

    const onChange = (event) => {
        setInput(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault(); // prevent to refresh
        onCreate(input)
        setInput("");
    }

    useEffect(() => {
        console.log("Todo Table reload : " + todos);
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={input}
                    placeholder={"input your todo"}
                    onChange={onChange}
                />
                <button type="submit">submit</button>
            </form>
            <TodoList todos={todos}/>
        </div>
    );
}

export default TodoTable;