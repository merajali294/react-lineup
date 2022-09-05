import React, { Component } from 'react'
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid"

export default class TodoContainer extends Component {
    state = {
        todos: []
       };
       
       componentDidMount(){
        let getData = localStorage.getItem("todos")
        let parsing = JSON.parse(getData)
        // console.log(parsing);
        if(parsing){
          this.setState({
            todos: parsing
          })
        }

       }

      componentDidUpdate( prevState, prevProps ){
        if( prevState.todos !== this.state.todos ){
          let temp = JSON.stringify(this.state.todos)
          // console.log(temp);
          localStorage.setItem("todos", temp)
        }
      }


      
       handleChange = ( id ) => {
      this.setState( prevState => ({
        todos: prevState.todos.map((todo)=>{
          if ( todo.id == id ) {
            return{
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }) )
          // console.log(id);
       }

       deleteItem = (id) => {
        this.setState( prevState => ( {
          todos: prevState.todos.filter( (todo)=>{
            // console.log(todo.id);
            // console.log(id);
              return todo.id!=id
          } )
        }))
       }

       addTodoItem = ( title ) => {
        const addNew = {
          id:uuidv4(),
          title:title,
          completed:true
        }
        
        this.setState( prevState => ({
          todos:[ ...this.state.todos, addNew ]
        }))
       }


       editTodoItem = ( updatedTitle,id )=>{
        // console.log(updatedTitle, id);
        
        this.setState({
          todos:this.state.todos.map( todo=>{
            if( todo.id == id ){
              todo.title = updatedTitle
            }
            return todo
          })
        })
       }

  render() {
    return (
      <div className='container'>
      <div className='inner'>
        <Header/>        
        <InputTodo addTodoItem={this.addTodoItem} />        
      <TodosList  todos={this.state.todos} handleChange={this.handleChange} deleteItem={this.deleteItem}  editTodoItem={this.editTodoItem}  />
      </div>
      </div>
    )
  }
}
