import { logDOM } from '@testing-library/react'
import React, { Component, useEffect, useState } from 'react'
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa/"

const TodoItem = (props) => {

  // state = {
  //   editing: false
  // }

  const [editing, setediting] = useState(false)
  useEffect(() => {
    
  
    return () => {
      console.log('removed');
    }
  }, [editing])
  
  const handleEditing = (e) =>{
    // this.setState({
    //   editing: !this.state.editing
    // })
    setediting(!editing)
  }
  
  const exit = (e) =>{
    if(e.key == "Enter" ){
      
      // this.setState({
        //   editing:false
        // })
        setediting(!editing)

    }
    // console.log(e.key);
    // if( this.state.editing  ){
    //   view.display="block"
    // }
    // else{
    //   edit.display="none"
    // }
  }
  
  // componentWillUnmount(){
  //   // console.log('deleted');
  // }

  // render() {
    let view = {}
  let edit = {}

  if( editing  ){
    view.display="none"
  }
  else{
    edit.display="none"
  }
    
    const line_throughhh = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    
    const {completed, id, title, editTodoItem} = props.todo

    return (
      <div>
      {
        <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={view} >

        <input className={styles.checkbox} 
        type='checkbox' 
        checked={ completed } 
        onChange={ ()=> props.handleChange(id) }  />
        
        <span style={ completed ? line_throughhh : null }>
         {title} 
        </span>
        
        <button onClick={ ()=> props.deleteItem(props.id) }><FaTrash style={{"color":"red"}} /></button>
        </div>
        <input 
        type='text' 
        style={edit} 
        className={styles.textInput}
         value={title}
        onChange={ e =>  props.editTodoItem( e.target.value, id ) }
        onKeyDown={  exit }
        />
        </li>
      }
      </div>
    )
  // }
}


export default TodoItem