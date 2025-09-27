import React, { Component } from 'react'

export class Index extends Component {

    constructor(props){
        super(props)
        this.state={changeValue:''}
    }

  handleEvent =(e)=>{
    this.setState({
        changeValue :e.target.value
    },()=>{
        this.state.changeValue
    });
        
    }  

  render() {
    return (
      <div> <input type="text" onChange={this.handleEvent} />
      <p>{this.state.changeValue}</p>
      </div>
    )
  }
}

export default Index