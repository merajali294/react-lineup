import React, { Component } from "react";

class InputTodo extends Component{

    state = {
        title: ""
    }

    handleTextinput =  e  =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit = (e) =>{
        e.preventDefault()

        if(this.state.title){
        this.props.addTodoItem(this.state.title)
    }
        
        this.setState({
            title:''
        })
    }
    render(){
        return(
            <form className="form-container" onSubmit={this.submit}>
    <input type='text' className="input-text" value={this.state.title} onChange={ this.handleTextinput } name='title' />
            <input type='submit' className="input-submit" />
        </form>
        )
    }
}

export default InputTodo