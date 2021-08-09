import React from 'react'
import TodoItem from './TodoItem'
import './style.css'

const TodoList = () => {

    const [todos, setTodos] = React.useState([
        { id: 1, title: 'Exercise', selected: false },
        { id: 2, title: 'Home Work', selected: false },
        { id: 3, title: 'Laundry', selected: false },
        { id: 4, title: 'Study', selected: false },
        { id: 5, title: 'Shopping', selected: false },
    ])

    return (
        <>
            {
                todos.map((todo) =>
                    <TodoItem todo={todo} key={todo.id} />
                )
            }

            <div className="btn-container">
                <button className='btn'>Delete</button>
            </div>
        </>
    )
}

export default TodoList
