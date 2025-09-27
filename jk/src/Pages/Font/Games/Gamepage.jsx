import React, { useCallback, useState } from 'react'
import { useMemo } from "react";
import Todo from './Todo';

const Gamepage = () => {
    const [count, setCount] =useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);
    const [toggle, setToggle] = useState(false);
    const today = new Date();
    const increment = () =>{
        setCount((count)=> count + 1);
    }
    const addTodo =()=>{
        setTodos((t)=> [...t,"New todo"]);
    }
    const handleMessage = useCallback(()=>{
        setCount((count)=> count + 1);
    },[count])
     console.log("game 2");
     
  return (   
      <div>
        {toggle ? 'on':'off'}
        <button className='bg-red-400 p-6' onClick={()=>{setToggle(!toggle)}}>Toggle</button>
{new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(today)}
        <Todo onHandleMessage={handleMessage} count={count}/>
        <h2>My Todos</h2>
        {todos.map((todo, index)=>{return <p key={index}>{todo} Message {count} send your phone</p> })}
         <button className='bg-red-400 p-6' onClick={addTodo}>Add Todo</button>
        <h1>Todos Sectio 2</h1>
        Count: {count}
        <button className='bg-red-100 p-4' onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <p>Note that this example executes the expensive function also when you click on the Add Todo button.</p>
    </div>
  )
}
const expensiveCalculation  = (num)=>{
    console.log("expensiveCalculation ");
    for (let i = 0; i < 10000000; i++) {   
        num += 1;
    }
    return num
}



export default Gamepage