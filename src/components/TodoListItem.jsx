import React from 'react'


export default function TodoListItem({ todo }) {
    return (
        <>
            <ul>
                <li>{todo.title}</li>
            </ul>
        </>
    )
}