import React from 'react'
import TodoListItem from '../components/TodoListItem.jsx'


export default function TodoList({ todoList }) {

    return (
        <>
            <ul>
                {todoList.map(todo =>
                    <TodoListItem key={todo.id} todo={todo} />
                )}
            </ul>
        </>
    )
}


