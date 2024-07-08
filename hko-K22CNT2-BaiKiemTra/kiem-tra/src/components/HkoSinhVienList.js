import React from "react";

export default function HkoSinhVienList({
  renderHkoStudentList,
  onAddNew,
  onHkoDelete,
  onHkoEdit,
}) {
  let hkoElement = renderHkoStudentList.map((hkoStudent, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{hkoStudent.HkoMaSV}</td>
        <td>{hkoStudent.HkoHoSV}</td>
        <td>{hkoStudent.HkoTenSV}</td>
        <td>{hkoStudent.HkoPhai ? "Nam" : "Nữ"}</td>
        <td>{hkoStudent.HkoNgaySinh}</td>
        <td>{hkoStudent.HkoNoiSinh}</td>
        <td>{hkoStudent.HkoMaKH}</td>
        <td>{hkoStudent.HkoHocBong ? "Yes" : "No"}</td>
        <td>{hkoStudent.HkoDiemTrungBinh}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => hkoHandleDelete(hkoStudent.HkoMaSV)}
          >
            Delete
          </button>
          <button
            className="btn btn-success"
            onClick={() => hkoHandleEdit(hkoStudent)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  const hkoHandleAdd = () => {
    onAddNew(true);
  };
  const hkoHandleDelete = (HkoMaSV) => {
    if (
      window.confirm(
        "Bạn có thực sự muốn xóa sinh viên có mã " + HkoMaSV + " không?"
      )
    ) {
        onHkoDelete(HkoMaSV);
    } else {
    }
  };

  const hkoHandleEdit = (hkoStudent) => {
    onHkoEdit(hkoStudent);
  };
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Họ sinh viên</th>
            <th scope="col">Tên sinh viên</th>
            <th scope="col">Phái</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Nơi sinh</th>
            <th scope="col">Mã khoa</th>
            <th scope="col">Học bổng</th>
            <th scope="col">Điểm trung bình</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>{hkoElement}</tbody>
      </table>
      <button className="btn btn-primary" onClick={hkoHandleAdd}>
        Thêm mới
      </button>
    </div>
  );
}