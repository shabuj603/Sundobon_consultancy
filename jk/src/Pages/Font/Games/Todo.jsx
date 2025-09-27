import React from 'react'
import { memo } from "react";
const Todo = ({count, onHandleMessage}) => {  
  return (
    <div>
        <h2>My Todos</h2>
        <p >Message {count} send your phone</p>
        <button className='bg-gray-400 p-6' onClick={onHandleMessage}>onHandleMessage set</button>
        
    </div>
  )
}

export default memo(Todo);