import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    let { renderproducts } = this.props;
    console.log("products", renderproducts);

    let elementproducts = renderproducts.map((item,index)=>{
      
        return(
            <>
            <tr key={index}>
                        <td> {item.Id} </td>
                 <td> { item.title}</td>
             </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table- table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {elementproducts}
            </tbody>
        </table>
      </div>
    );
  }
}
