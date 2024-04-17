import React, { Component } from 'react'

export default class HKO_EventFrom4 extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:"KimOanh"
        }
    }
    handleGetName =()=>{
        alert(this.props.Name);
        this.setState({
            name:this.props.name
        })
    }
  render() {

    return (
      <div lassName='alert alert-info'>
        <h2> lấy dữ liệu từ props</h2>
        <button onClick={this.handleGetName}>lấy tên</button>
        <h2>wellcome to {this.state.name}</h2>
        </div>
    )
  }
}
