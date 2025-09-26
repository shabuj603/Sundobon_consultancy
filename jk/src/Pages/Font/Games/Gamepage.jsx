import React, { useState } from 'react'
import Todo from './Todo';

const Gamepage = () => {
    const [count, setCount] =useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);
    const increment = () =>{
        setCount((count)=> count + 1);
    }
    const addTodo =()=>{
        setTodos((t)=> [...t,"New todo"]);
    }
     console.log("game 2");
  return (   
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index)=>{return <p key={index}>{todo} Message {count} send your phone</p> })}
         <button className='bg-red-400 p-6' onClick={addTodo}>Add Todo</button>
        
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