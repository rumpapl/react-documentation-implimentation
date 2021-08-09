import React from 'react'
import './style.css'

const TodoItem = (props) => {

    function getClassName(selected) {
        if (selected) {
            return 'todo-box setected';
        }
        else {
            return 'todo-box';
        }
    }

    return (
        <div
            className={getClassName(props.todo.selected)}
            // onClick={props.onClick}
        >
            <span>{props.todo.title}</span>
        </div>
    )
}

export default TodoItem
