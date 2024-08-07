import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTodo}) {


  return (
    <div style={{width:"98%", marginTop:"45px"}}>
        {
          todos && todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
          ))
        }
        
    </div>
  )
}

export default TodoList