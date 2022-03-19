import React, { Component } from 'react'


export class Review extends React.Component {


        constructor(props) {
        
        super(props)
        
        this.state = {
        
        username: '',
        
        comments: ''
        
        }
        
        }
        
        handleUserNameChange = (event) => {
        
        this.setState({
        
        username: event.target.value
        
        })
        
        }
        
        handleCommentsChange = event => {
        
        this.setState({
        
        comments: event.target.value
        
        })
        
        }
        
        handleSubmit = event => {
            alert(`${this.state.username} ${this.state.comments}`)
            
        }


        render() {
        
        return (
        
        <form onSubmit={this.handleSubmit}>
        
  
        
        <div>
        
        <label>Leave a Review!</label>
        
        <textarea value={this.state.comments} onChange={this.handleCommentsChange}>


        </textarea>
        
      
        
        </div>
        <button type="Submit">Submit</button>
        </form>
        
        )
        
        }
        
        }
        
        export default Review