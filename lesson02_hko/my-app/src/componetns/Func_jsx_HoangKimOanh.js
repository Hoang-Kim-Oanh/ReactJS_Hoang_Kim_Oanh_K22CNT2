import React from 'react'

export default function Func_jsx_HoangKimOanh(props) {
    const users = {
        name:"Hoang Kim Oanh",
        age: 20
    }
  return (

    <div>
        <h2>
            Function component Demo
        </h2>
        <h3>Welcome to, {users.name} - {users.age}</h3>
        <hr/>
        <h3>
            props
            <br/> fullname : {props.fullname}
            <br/> Age : { props.age}
        </h3>
    </div>
  )
}
