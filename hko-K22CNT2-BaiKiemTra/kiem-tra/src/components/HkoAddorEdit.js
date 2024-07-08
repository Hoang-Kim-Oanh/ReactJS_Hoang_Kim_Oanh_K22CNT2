import React, { useState, useEffect } from "react";
import axios from "../api/HkoApi";

export default function HkoAddorEdit({
  onCloseForm,
  onHkoSinhVienSubmit,
  renderHkoSinhVien,
}) {
  const [hkoSinhVienHoSV, setHkoSinhVienHoSV] = useState("");
  const [hkoSinhVienTenSV, setHkoSinhVienTenSV] = useState("");
  const [hkoSinhVienPhai, setHkoSinhVienPhai] = useState("");
  const [hkoSinhVienNgaySinh, setHkoSinhVienNgaySinh] = useState("");
  const [hkoSinhVienNoiSinh, setHkoSinhVienNoiSinh] = useState("");
  const [hkoSinhVienMaKH, setHkoSinhVienMaKH] = useState("");
  const [hkoSinhVienHocBong, setHkoSinhVienHocBong] = useState("");
  const [hkoSinhVienDiemTrungBinh, setHkoSinhVienDiemTrungBinh] = useState("");
  const [hkoSinhVienMaSV, setHkoSinhVienMaSV] = useState(0); // Initialize with 0

  useEffect(() => {
    if (renderHkoSinhVien) {
      setHkoSinhVienHoSV(renderHkoSinhVien.HkoHoSV);
      setHkoSinhVienTenSV(renderHkoSinhVien.HkoTenSV);
      setHkoSinhVienPhai(renderHkoSinhVien.HkoPhai);
      setHkoSinhVienNgaySinh(renderHkoSinhVien.HkoNgaySinh);
      setHkoSinhVienNoiSinh(renderHkoSinhVien.HkoNoiSinh);
      setHkoSinhVienMaKH(renderHkoSinhVien.HkoMaKH);
      setHkoSinhVienHocBong(renderHkoSinhVien.HkoHocBong);
      setHkoSinhVienDiemTrungBinh(renderHkoSinhVien.HkoDiemTrungBinh);
      setHkoSinhVienMaSV(renderHkoSinhVien.HkoMaSV); // Update hkoSinhVienMaSV
    }
  }, [renderHkoSinhVien]);

  const hkoHandleClose = (event) => {
    event.preventDefault();
    onCloseForm(false);
  };

  const hkoHandleSubmit = async (event) => {
    event.preventDefault();
    if (hkoSinhVienMaSV === 0) {
      let hkoSinhVien = {
        HkoMaSV: 0,
        HkoHoSV: hkoSinhVienHoSV,
        HkoTenSV: hkoSinhVienTenSV,
        HkoPhai: hkoSinhVienPhai === "false",
        HkoNgaySinh: hkoSinhVienNgaySinh,
        HkoNoiSinh: hkoSinhVienNoiSinh,
        HkoMaKH: hkoSinhVienMaKH,
        HkoHocBong: hkoSinhVienHocBong === "true",
        HkoDiemTrungBinh: hkoSinhVienDiemTrungBinh,
      };

      const response = await axios.post("HkoSinhVien", hkoSinhVien);
      const newSinhVien = response.data;
      onHkoSinhVienSubmit(newSinhVien);
    } else {
      let hkoSinhVien = {
        HkoMaSV: hkoSinhVienMaSV,
        HkoHoSV: hkoSinhVienHoSV,
        HkoTenSV: hkoSinhVienTenSV,
        HkoPhai: hkoSinhVienPhai === "false",
        HkoNgaySinh: hkoSinhVienNgaySinh,
        HkoNoiSinh: hkoSinhVienNoiSinh,
        HkoMaKH: hkoSinhVienMaKH,
        HkoHocBong: hkoSinhVienHocBong === "true",
        HkoDiemTrungBinh: hkoSinhVienDiemTrungBinh,
      };
      await axios.put(`/HkoSinhVien/${hkoSinhVienMaSV}`, hkoSinhVien);
    }
  };
  return (
    <form onSubmit={hkoHandleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Họ sinh viên
        </span>
        <input
          type="text"
          name="hkoSinhVienHoSV"
          value={hkoSinhVienHoSV}
          onChange={(ev) => setHkoSinhVienHoSV(ev.target.value)}
          className="form-control"
          placeholder="Họ sinh viên"
          aria-label="Họ sinh viên"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Tên sinh viên
        </span>
        <input
          type="text"
          name="hkoSinhVienTenSV"
          value={hkoSinhVienTenSV}
          onChange={(ev) => setHkoSinhVienTenSV(ev.target.value)}
          className="form-control"
          placeholder="Tên sinh viên"
          aria-label="Tên sinh viên"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          name="hkoSinhVienPhai"
          value={hkoSinhVienPhai}
          onChange={(ev) => setHkoSinhVienPhai(ev.target.value)}
        >
          <option disabled value="">
            Lựa chọn giới tính
          </option>
          <option value={true}>Nam</option>
          <option value={false}>Nữ</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Ngày sinh
        </span>
        <input
          type="text"
          name="hkoSinhVienNgaySinh"
          value={hkoSinhVienNgaySinh}
          onChange={(ev) => setHkoSinhVienNgaySinh(ev.target.value)}
          className="form-control"
          placeholder="Ngày sinh"
          aria-label="Ngày sinh"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nơi sinh
        </span>
        <input
          type="text"
          name="hkoSinhVienNoiSinh"
          value={hkoSinhVienNoiSinh}
          onChange={(ev) => setHkoSinhVienNoiSinh(ev.target.value)}
          className="form-control"
          placeholder="Nơi sinh"
          aria-label="Nơi sinh"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Mã khoa
        </span>
        <input
          type="text"
          name="hkoSinhVienMaKH"
          value={hkoSinhVienMaKH}
          onChange={(ev) => setHkoSinhVienMaKH(ev.target.value)}
          className="form-control"
          placeholder="Mã khoa"
          aria-label="Mã khoa"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          name="hkoSinhVienHocBong"
          value={hkoSinhVienHocBong}
          onChange={(ev) => setHkoSinhVienHocBong(ev.target.value)}
        >
          <option disabled value="">
            Lựa chọn học bổng
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Điểm trung bình
        </span>
        <input
          type="text"
          name="hkoSinhVienDiemTrungBinh"
          value={hkoSinhVienDiemTrungBinh}
          onChange={(ev) => setHkoSinhVienDiemTrungBinh(ev.target.value)}
          className="form-control"
          placeholder="Điểm trung bình"
          aria-label="Điểm trung bình"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={hkoHandleClose}
      >
        Close
      </button>
    </form>
  );
}
