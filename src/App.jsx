import './App.css'
import React from 'react'
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm.jsx'


function App() {
  const [ todoList, setTodoList ] = React.useState([])

  function addTodo(todoTitle) {
      const newObject = {
          id: Date.now(),
          title: todoTitle
      }

      setTodoList(prevTodoList => [...prevTodoList, newObject])
  }


  return (
      <>
          <div>
              <h1>My Todos</h1>
              <TodoList todoList={todoList}/>
              <TodoForm onAddTodo={addTodo}/>
          </div>
      </>
  )
}

export default App
