import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {


  return (
    <div style={{width:"98%", marginTop:"45px"}}>
        {
          todos && todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))
        }
        
    </div>
  )
}

export default TodoList