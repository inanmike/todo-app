import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import '../App.css'

function Todo({todo, onRemoveTodo}) {

  const {id, content} = todo;
  
  const removeTodo = () => {
    onRemoveTodo(id);
  }

  return (
    <div style={
        {display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid gray", padding:"5px", marginBottom:"10px"}
    }>
        <div>
            {content}
        </div>
        <div className='todo-icons'>
            <MdDelete onClick={removeTodo}/>
            <FaRegEdit />
        </div>
    </div>
  )
}

export default Todo