import React, { useState } from 'react'

const Todo = (props) => {
 const {title, desc }= props.todo;
 const {id, onRemove}= props;


const handleDelet = (id)=>{
  onRemove(id);
}

  return (
    <>
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Todo List</h2>

         {/* Todo List */}
      <ul className="space-y-3">
        {props.todo.length === 0 && (
          <p className="text-gray-500 text-center">No tasks yet.</p>
        )}        
          <li            
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
          ><p className="text-gray-700">{title}</p>
            <span className="text-gray-700">{desc}</span>
            <button
             onClick={()=>handleDelet(id)}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
      
      </ul>
    </div>
   
    </>
  )
}

export default Todo