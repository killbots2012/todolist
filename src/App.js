import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoAp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

}

useEffect(() => {
  const storedTodos = JSON.parse(localstorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
  return () => {
    cleanup
  }
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find[todos => todo.id === id]
  todo.complete = !todo.complete
}

function handleAddTodo(e){
  const name = todoNameRef.current.value
  if (name === '') return
  setTodos(prevTodos => {
    return [...prevTodos, {id: uuidv4(), name, complete: false}]
  })
  todoNameRef.current.value = null
}
function handleClearTodos() {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

(
  <>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Complete</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
  </>
)
export default App;
