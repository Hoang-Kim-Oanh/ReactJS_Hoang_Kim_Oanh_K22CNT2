import React, { Component } from 'react';

export default class MyComponent extends Component {

    // Event handlers
    handleButtonClick1 = () => {
        alert("Event handle 1");
    }

    handleButtonClick2 = () => {
        alert("Event handle 2");
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Event Handle</h2>
                <button onClick={this.handleButtonClick1()}>Click1_HKO</button>
                <button onClick={this.handleButtonClick2}>Click2_HKO</button>
            </div>
        );
    }
}
