import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const[todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    const newList = todos.filter((todo) => todo.id!==todoId);
    setTodos([...newList]);
  }

  const updateTodo = (newTodo) => {
    const updated = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updated]); 
    //setEditable(false);
    // updateTodo(id, valueTodo);
  }

  console.log(todos)

  return (
      <div className='App'>
        <div className='main'>
          <TodoCreate onCreateTodo={createTodo}/>
          <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}/>
        </div>
      </div>
  )
}

export default App
