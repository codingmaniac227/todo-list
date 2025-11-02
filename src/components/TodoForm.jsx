import React from 'react'

export default function TodoForm({ onAddTodo }) {
    const [ workingTodoTitle, setWorkingTodoTitle ] = React.useState('')

    const inputRef = React.useRef();

        const handleAddTodo = (event) => {
            event.preventDefault();


            console.log(`Event object: ${event}`)
            console.log(`Event target: ${event.target}`);
            console.log(`Input value: ${event.target.value}`)

            if (workingTodoTitle) {
                onAddTodo(workingTodoTitle)
                setWorkingTodoTitle('')
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
                    value={workingTodoTitle}
                    onChange={(event) => {setWorkingTodoTitle(event.target.value)}}
                    required
                />
                <button type="submit" disabled={workingTodoTitle === '' ? true : null}>Add Todo</button>
            </form>
        </>
    )
}
