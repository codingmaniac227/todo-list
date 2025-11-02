import './App.css'
import React from 'react'
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm.jsx'

const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
    {id: 4, title: "publish app"},
]


function App() {
  const [ todoList, setTodoList ] = React.useState(todos)


  return (
      <>
          <div>
              <h1>My Todos</h1>
              <TodoList todoList={todoList}/>
              <TodoForm />
          </div>
      </>
  )
}

export default App
