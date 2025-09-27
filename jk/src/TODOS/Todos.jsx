import React from 'react'
import Todo from './Todo'

const Todos = (props) => {

  return (
    <>
    {props.todos.map((todo)=>(
      <Todo key={todo.id} todo={todo} />
    ))}
     
    </>

  )
}

export default Todos