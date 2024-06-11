import React from 'react';

export default function HkoListStudents({ renderHkoListStudents, onEdit, onRemove }) {
    let hkoElementStudent = renderHkoListStudents.map((student, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.hkoId}</td>
                <td>{student.hkoName}</td>
                <td>{student.hkoAge}</td>
                <td>{student.hkoPhone}</td>
                <td>{student.hkoStatus ? "Hoạt động" : "Ngừng hoạt động"}</td>
                <td>
                    <button className='btn btn-success' onClick={() => onEdit(student)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => onRemove(student.hkoId)}>Remove</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Điện thoại</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {hkoElementStudent}
                </tbody>
            </table>
        </div>
    );
}
