import React, {useState} from 'react';

// TODO Refactoring 필요가 있는가?
const TodoItem = React.memo(function TodoItem({content}) {
    return (
        <li>
            {content}
        </li>
    )
});

export default TodoItem;