import './App.css'
import React from 'react'
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm.jsx'


function App() {
  const [ todoList, setTodoList ] = React.useState([])

  function addTodo(todoTitle) {
      const newObject = {
          id: Date.now(),
          title: todoTitle,
          isCompleted: false,
      }

      setTodoList(prevTodoList => [...prevTodoList, newObject])
  }

  function completeTodo(id) {
      const currTodo = todoList.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo)
      setTodoList(currTodo)
      console.log(todoList)
  }


  return (
      <>
          <div>
              <h1>My Todos</h1>
              <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
              <TodoForm onAddTodo={addTodo}/>
          </div>
      </>
  )
}

export default App
