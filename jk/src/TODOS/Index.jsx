import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import NewTodo from './NewTodo';



const Index = () => {
    const [todos, setTodos]= useState([]);
    const handleNewtodo =(newtodo)=>{     
        setTodos([...todos,{ id:uuidv4(), newtodo}]);
    }
 
    const handleRemove =(id)=>{   
      //  setTodos(todos.filter((todo)=>todo.id !== id));
      setTodos((previous)=>{
         const filterTodo = previous.filter((todo)=>todo.id !== id)
        return filterTodo;
      })
    }
  return (
    <>
        <span><NewTodo onTodo={handleNewtodo}/>
        <Todos todos={todos} onRemove={handleRemove}/></span>
    </>
  )
}

export default Index