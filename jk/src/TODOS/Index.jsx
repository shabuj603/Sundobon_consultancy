import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const damiTodos = [{id:"1", title:"first section", desc:"first to"},{id:"2", title:"second section", desc:"second section to"}]

const Index = () => {
    const [todos, setTodos]= useState(damiTodos);
    const handleNewtodo =(newtodo)=>{
        setTodos([...todos, newtodo]);
    }
  return (
    <>
        <span><NewTodo onTodo={handleNewtodo}/>
        <Todos todos={todos} /></span>
    </>
  )
}

export default Index