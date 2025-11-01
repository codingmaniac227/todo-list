import './App.css'
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm.jsx'

function App() {

  return (
      <>
          <div>
              <h1>My Todos</h1>
              <TodoList />
              <TodoForm />
          </div>
      </>
  )
}

export default App
