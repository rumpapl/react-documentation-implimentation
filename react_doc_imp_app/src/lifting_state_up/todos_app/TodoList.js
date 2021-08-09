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
    ]);

    function handleItemSelectClick(id) {
        console.log(id);
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.selected = !todo.selected;
        setTodos(newTodos);

    }

    function handleDelete() {
        const newTodos = todos.filter((todo) => todo.selected === false);
        setTodos(newTodos);
    }

    return (
        <>
            {
                todos.map((todo) =>
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onClick={() => handleItemSelectClick(todo.id)}
                    />
                )
            }

            <div
                className="btn-container btn"
                onClick={() => handleDelete()}
            >
                <span>Delete</span>
            </div>
        </>
    )
}

export default TodoList
