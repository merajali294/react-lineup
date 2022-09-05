import React, { Component, useState } from "react";
import {FaPlusCircle} from "react-icons/fa"

 const InputTodo = (props)=> {

    const [inputText, setinputText] = useState({
        title: "",
        title2: ""
    })

    const handleTextinput=(e)=> {
        // console.log('asdas');
        // this.setState({
        //     [e.target.name]:e.target.value
        // })
        // setinputText(e.target.value)
        setinputText({
            ...inputText,
           [e.target.name] : e.target.value
        })
    }
    const submit=(e)=>{
        e.preventDefault()

    //     if(this.state.inputText){
    //     this.props.addTodoItem(this.state.inputText)
    // }
        if( inputText.title || inputText.title2 ){
        props.addTodoItem(inputText.title)
        props.addTodoItem(inputText.title2)
    }
    else{
        alert('add input')
    }
    setinputText({
        title: "",
        title2: ""
    })
        // this.setState({
        //     inputText:''
        // })
    }
    // render(){
        return(
            <form className="form-container" onSubmit={submit}>
    {/* <input 
    type='text' 
    className="input-text" 
    value={inputText.title}
    onChange={ handleTextinput } 
    name='title' /> */}
    
    <input 
    type='text' 
    className="input-text" 
    value={inputText.title2}
    onChange={ handleTextinput } 
    name='title2' />
            {/* <input type='submit' className="input-submit" /> */}
            <button type='submit' className="input-submit"> <FaPlusCircle size={"25px"} /> </button>
        </form>
        )
    // }
}

// export default InputTodo

// import React from 'react'

// const InputTodo = () => {
//   return (
//     <div>InputTodo</div>
//   )
// }

export default InputTodo