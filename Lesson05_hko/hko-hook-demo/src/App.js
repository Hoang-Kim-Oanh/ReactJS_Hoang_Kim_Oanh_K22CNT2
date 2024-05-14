import React from 'react';
import HkoUseeState from './components/HkoUseeState';
import HkoUseeEffect from './components/HkoUseeEffect';

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Hoàng Kim Oanh - Hook</h1>
      <HkoUseeState />
      <hr />
      <HkoUseeEffect/>
      <hr/>
     < HkoUsecontext/>
    </div>
  );
}
