import React from 'react';

export default function HkoFormAddOrEdit() {
  return (
    <div className='border'>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="id">ID</span>
          <input
            type="text"
            className="form-control"
            name='id'
            value={''}
            placeholder="id"
            aria-label="id"
            aria-describedby="id"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="id">ID</span>
          <input
            type="text"
            className="form-control"
            name='id'
            value={''}
            placeholder="id"
            aria-label="id"
            aria-describedby="id"
          />
        </div>
      </form>
    </div>
  );
}
