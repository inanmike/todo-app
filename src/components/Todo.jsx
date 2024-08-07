import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

import '../App.css'

function Todo({todo, onRemoveTodo, onUpdateTodo}) {
  
  const {id, content} = todo;
  const [editable, setEditable] = useState(false);
  const [valueTodo, setValueTodo] = useState(content);
  
  
  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const values = {
      id: id,
      content: valueTodo
    }
    onUpdateTodo(values);
    setEditable(false);
  }

  return (
    <div style={
        {display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid gray", padding:"5px", marginBottom:"10px"}
    }>
        <div>
            {
              editable ? <input value={valueTodo} onChange={(e) => setValueTodo(e.target.value)} className='todo-input' type='text'/> : content
            }
        </div>
        <div className='todo-icons'>
            <MdDelete onClick={removeTodo}/>
            {
              editable ? <IoMdCheckmark onClick={updateTodo} /> : <FaRegEdit onClick={() => setEditable(true)}/>
            }
        </div>
    </div>
  )
}

export default Todo