import React, { Component } from 'react';
import Hko_Productlist from './component/Hko_Productlist';

export default class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'Hoàng Kim Oanh', id: 2210900053 , status:1 },
        { title: 'Cabbage', id: 1 , status:1 },
        { title: 'Garlic', id: 2 , status:1 },
        { title: 'Apple', id: 3 , status:1 },
        { title: 'Samsung', id: 4 , status:1},
      ]
    };
  }

  render() {
    return (
      <div className='container border mt-5'>
        <h1>Hoàng Kim Oanh - render data - event from</h1>
        <hr/>
        {/* Truyền danh sách sản phẩm vào component Hko_Productlist */}
        <Hko_Productlist renderproducts={this.state.products} />
      </div>
    );
  }
}
