import React, { useState } from 'react'

const NewTodo = (props) => {
  const {onTodo}= props;
const[todo, setTodo]= useState({title:"", desc:""});
const {title, desc}= todo;

const handleInputchange =(event)=>{
const name= event.target.name;
setTodo((oldTodo)=>{
  return{...oldTodo, [name]: event.target.value}
})        
    }

  const handleSubmit=(event)=>{
      event.preventDefault();
      onTodo(todo);
      setTodo({title:"", desc:""})
  }
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <span className="text-2xl font-bold mb-4 text-gray-800">➕ Add New Item</span>
      <form onSubmit={handleSubmit} className="space-y-4">        
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Item Name
          </label>
      <input type="text" name='title' id='title' value={title} onChange={handleInputchange} className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
        </div> 
        <div>
          <label className="block text-sm font-medium text-gray-600">
            description
          </label>
          <textarea
            name="desc" value={desc} onChange={handleInputchange}     placeholder="Write item description" rows="3"className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>     
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Add Item
        </button>
      </form>
    </div>
       
    </>
  )
}

export default NewTodo