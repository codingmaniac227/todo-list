import React from 'react'

export default function TodoForm({ onAddTodo }) {
    const inputRef = React.useRef();

        const handleAddTodo = (event) => {
        event.preventDefault();


        console.log(`Event object: ${event}`)
        console.log(`Event target: ${event.target}`);
        console.log(`Input value: ${event.target.todoTitle.value}`)

        const todoTitle = event.target.todoTitle.value.trim()
        if (todoTitle) {
            onAddTodo(todoTitle)
            event.target.reset()
            inputRef.current.focus()
        }
    }

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Todo</label>
                <input
                    type="text"
                    id="todoTitle"
                    name="todoTitle"
                    ref={inputRef}
                    required
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
