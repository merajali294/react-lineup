import React, { Component } from 'react'
import TodoItem from './TodoItem'

function TodosList({todos, handleChange, deleteItem,editTodoItem})  {
//   render() {
  // console.log(handleChange);
    return (
      <div>
        <ul>
            {
                todos.map( (todo) => {
                    return (
                      <TodoItem key={todo.id} id={todo.id} todo={todo} handleChange={handleChange} deleteItem={deleteItem} editTodoItem={editTodoItem} />
                      )
                } )
            }
        </ul>
      </div>
    )
//   }
}

export default TodosList