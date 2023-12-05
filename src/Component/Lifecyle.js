import React, { Component } from 'react'
import './App.css';
export default class Lifecycle extends Component {
    constructor(props)
    {
        super(props);
        this.state = {value:<h1>Intial</h1>};
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentDidUpdate(){
        console.log("Component update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    handleclick = () =>
    {
        this.setState({value:<h1>Updated value</h1>})
    }
  render() {
    return (
      <div>
      <p>{this.state.value}</p>
      <button onClick={this.handleclick}>Update value</button>
      </div>
    )
  }
} 