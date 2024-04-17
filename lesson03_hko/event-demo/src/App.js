import React, { Component } from 'react'
import HKO_EventFrom1 from './components/HKO_EventFrom1';
import HKO_EventFrom2 from './components/HKO_EventFrom2';
import HKO_EventFrom3 from './components/HKO_EventFrom3';
import HKO_EventFrom4 from './components/HKO_EventFrom4';
export default class 
 extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event From Demo</h1>
        <HKO_EventFrom1/>
        <HKO_EventFrom2/>
        <HKO_EventFrom3/>
        <HKO_EventFrom4 name="Hoàng Kim Oanh"/>
      </div>
    )
  }
}
