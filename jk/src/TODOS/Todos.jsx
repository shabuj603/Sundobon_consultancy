import React from 'react'
import Todo from './Todo'

const Todos = (props) => {

  return (
    <>
    {props.todos.map((todo)=>(
      <Todo key={todo.id} todo={todo.newtodo} id={todo.id} onRemove={props.onRemove}/>
    ))}
     
    </>

  )
}

export default Todos