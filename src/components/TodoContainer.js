import React, { Component, useEffect, useState } from 'react'
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid"


const TodoContainer = ()=> {
    // state = {
    //     todos: []
    //    };
      const [todos, settodos] = useState( get_show_storedData() )

      function get_show_storedData() {
        // console.log('im called');
          let getData = localStorage.getItem("todos")
          let storeit = JSON.parse(getData)
          return storeit || []
      }
      // get_show_storedData()
       useEffect( () => {
        console.log('setttt');
        
        // let getData = localStorage.getItem("todos")
        // let loadedTodos = JSON.parse(getData)
        // if(loadedTodos){
        //     settodos( loadedTodos )
        // }
        // setitem
        let storedata = JSON.stringify(todos)
        // console.log(storedata);
        localStorage.setItem("todos",storedata)
        // let setdata = localStorage.setItem("todos"
        // let loadedTodos = JSON.parse(getData))
       }, [todos])
       
      //  componentDidMount(){
      //   let getData = localStorage.getItem("todos")
      //   let parsing = JSON.parse(getData)
      //   // console.log(parsing);
      //   if(parsing){
      //     this.setState({
      //       todos: parsing
      //     })
      //   }

      //  }

      // componentDidUpdate( prevState, prevProps ){
      //   if( prevState.todos !== this.state.todos ){
      //     let temp = JSON.stringify(this.state.todos)
      //     // console.log(temp);
      //     localStorage.setItem("todos", temp)
      //   }
      // }


      
       const handleChange = ( id ) => {
        // console.log('sdfsdfsd');
        // console.log(id);
      settodos( prevState => 
        // ({
        prevState.map((todo)=>{
          if ( todo.id == id ) {
            return{
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      // })
       )
          // console.log(id);
       }

       const deleteItem = (id) => {
        settodos( 
          // prevState => ( {
        [  ...todos.filter( (todo)=>{
            // console.log(todo.id);
            // console.log(id);
              return todo.id!=id
          } )
        // })
        ]
        )
       }

       const addTodoItem = ( title ) => {
        const addNew = {
          id:uuidv4(),
          title:title,
          completed:false
        }
        
        settodos( prevState =>
          //  ({
          [ ...todos, addNew ]
        // })
        )
       }


       const editTodoItem = ( updatedTitle,id )=>{
        // console.log(updatedTitle, id);
        
        settodos(
          // {
          todos.map( todo=>{
            if( todo.id == id ){
              todo.title = updatedTitle
            }
            return todo
          })
        // }
        )
       }

  // render() {
    return (
      <div className='container'>
      <div className='inner'>
        <Header/>        
        <InputTodo addTodoItem={addTodoItem} />        
      <TodosList
        todos={todos}
         handleChange={handleChange}
          deleteItem={deleteItem}
          editTodoItem={editTodoItem}  />
      </div>
      </div>
    )
  // }
}

export default TodoContainer