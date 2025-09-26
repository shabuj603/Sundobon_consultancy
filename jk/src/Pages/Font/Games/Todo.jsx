import React from 'react'
import { memo } from "react";
const Todo = ({todos, count}) => {
    console.log("todo page");
  return (
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index)=>{return <p key={index}>{todo} Message {count} send your phone</p> })}
        
    </div>
  )
}

export default memo(Todo);