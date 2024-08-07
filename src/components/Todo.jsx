import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import '../App.css'

function Todo({todo}) {

  const {id, content} = todo;

  return (
    <div style={
        {display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid gray", padding:"5px", marginBottom:"10px"}
    }>
        <div>
            {content}
        </div>
        <div className='todo-icons'>
            <MdDelete />
            <FaRegEdit />
        </div>
    </div>
  )
}

export default Todo