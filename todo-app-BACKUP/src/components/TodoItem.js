import { logDOM } from '@testing-library/react'
import React, { Component } from 'react'
import styles from "./TodoItem.module.css"

class TodoItem extends Component {

  state = {
    editing: false
  }
  
  handleEditing = (e) =>{
    this.setState({
      editing: !this.state.editing
    })
  }

  exit = (e) =>{
    if(e.key == "Enter" ){

      this.setState({
        editing:false
      })
    }
    // console.log(e.key);
    // if( this.state.editing  ){
    //   view.display="block"
    // }
    // else{
    //   edit.display="none"
    // }
  }
  
  componentWillUnmount(){
    console.log('deleted');
  }

  render() {
    let view = {}
  let edit = {}

  if( this.state.editing  ){
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
    
    const {completed, id, title, editTodoItem} = this.props.todo

    return (
      <div>
      {
        <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={view} >

        <input className={styles.checkbox} 
        type='checkbox' 
        checked={ completed } 
        onChange={ ()=> this.props.handleChange(id) }  />
        
        <span style={ completed ? line_throughhh : null }>
         {title} 
        </span>
        
        <button onClick={ ()=> this.props.deleteItem(this.props.id) }>Delete</button>
        </div>
        <input 
        type='text' 
        style={edit} 
        className={styles.textInput}
         value={title}
        onChange={ e =>  this.props.editTodoItem( e.target.value, id ) }
        onKeyDown={  this.exit }
        />
        </li>
      }
      </div>
    )
  }
}


export default TodoItem