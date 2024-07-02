import React, { useState } from 'react';

export default function HkoApp() {
  const [formData, setFormData] = useState({ id: '' });

  const hkoHandleAddnew = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu ở đây
    console.log('Form submitted with data:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='border'>
      <form onSubmit={hkoHandleAddnew}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="id">ID</span>
          <input
            type="text"
            className="form-control"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="id"
            aria-label="id"
            aria-describedby="id"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
