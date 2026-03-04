import Header from "./components/Header.jsx"
import Search from './components/Search.jsx'
import FilterTodo from "./components/FilterTodo.jsx"
import TodoList from './components/TodoList.jsx'
import AddTodo from "./components/AddTodo.jsx"

function App() {

  return (
   <>
   <Header />
   <AddTodo />
   <TodoList />
   </>
  )
}

export default App
