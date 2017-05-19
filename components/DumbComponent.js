import React from 'react'

export default class DumbComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick(){
    if (this.state.mood === "happy"){
      this.setState({
        mood: "sad"
      })
    }else{
      this.setState({
        mood: "happy"
      })
    }
  }

  render(){
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.mood}
      </div>
    )
  }
}
