import React from 'react'

export default function HkoListUser({renderHkoUser}) {
    let hkoUserElement = renderHkoUser.map((hkoUser, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{hkoUser.id}</td>
            <td>{hkoUser.UserName}</td>
            <td>{hkoUser.Passworl}</td>
            <td>{hkoUser.email}</td>
            <td>{hkoUser.Phone}</td>
            <td>Edit | Del</td>
            <td>
              
            </td>
          </tr>
        );
      });
      return (
        <div className="container m-2">
          <h2>DANH SÁCH USER</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>User Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {hkoUserElement}
            </tbody>
          </table>
          <button className="btn btn-primary">
            Thêm mới
          </button>
        </div>
      );
    }
