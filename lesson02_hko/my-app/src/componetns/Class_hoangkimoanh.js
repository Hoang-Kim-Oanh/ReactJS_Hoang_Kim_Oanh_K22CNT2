import React, { Component } from 'react'

export default class Class_hoangkimoanh extends Component {
     users = {
        name:"Hoang Kim Oanh",
        age: 20
    }
  render() {
    return (
      <div>
        <h2>class component Demo</h2>
       {this.users.name} - {this.users.age}
       <hr/>
       <h3>
        info : {this.props.info}
       </h3>
       <h3> time  : {this.props.time}</h3>
      </div>
    )
  }
}
