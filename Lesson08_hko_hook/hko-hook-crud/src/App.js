import './App.css';
import React, { useState } from 'react';
import HkoListStudents from './components/HkoListStudents';

function App() {
  const hkoStudents = [
    { hkoId: 2210900053, hkoName: "Hoàng Kim Oanh", hkoAge: "19", hkoPhone: "19", hkoStatus: true },
    { hkoId: 1, hkoName: "Oanh", hkoAge: "19", hkoPhone: "19", hkoStatus: true },
    { hkoId: 2, hkoName: "Oanh", hkoAge: "19", hkoPhone: "19", hkoStatus: true },
    { hkoId: 3, hkoName: "Oanh", hkoAge: "19", hkoPhone: "19", hkoStatus: true },
    { hkoId: 4, hkoName: "Oanh", hkoAge: "19", hkoPhone: "19", hkoStatus: true },
  ];

  const [hkoListStudents, setHkoListStudents] = useState(hkoStudents);

  const handleEdit = (student) => {
    // Logic chỉnh sửa sinh viên
    console.log('Edit student', student);
  };

  const handleRemove = (hkoId) => {
    const updatedStudents = hkoListStudents.filter(student => student.hkoId !== hkoId);
    setHkoListStudents(updatedStudents);
  };

  return (
    <div className="container border">
      <h1>Hoàng Kim Oanh</h1>
      <hr />
      <div>
        <HkoListStudents
          renderHkoListStudents={hkoListStudents}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}

export default App;
