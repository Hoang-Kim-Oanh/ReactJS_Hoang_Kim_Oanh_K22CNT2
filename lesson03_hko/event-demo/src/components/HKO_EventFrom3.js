import React, { Component } from 'react';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Hoàng Kim Oanh",
            job: "Dev soft"
        };
    }

    handlechangename = () => {
        this.setState({
            name: "K22CNT2-ReactJs"
        });
    };

    handlechangeJob = () => {
        this.setState({
            job: "Công nghệ phần mềm"
        });
    };

    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>dữ liệu: {this.state.name} - {this.state.job}</p>
                <button onClick={this.handlechangename}>Thay đổi name</button>
                <button onClick={this.handlechangeJob}>Thay đổi job</button>
            </div>
        );
    }
}
