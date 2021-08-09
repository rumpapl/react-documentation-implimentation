import React from 'react'
import './style.css'

const TodoItem = (props) => {

    return (
        <div className='todo-box setected'>
            <span>{props.todo.title}</span>
        </div>
    )
}

export default TodoItem
