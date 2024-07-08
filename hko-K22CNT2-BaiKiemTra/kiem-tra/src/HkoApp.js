import './App.css';
import { useEffect, useState } from "react";
import axios from './api/HkoApi';
import HkoSinhVienList from './components/HkoSinhVienList';
import HkoAddorEdit from './components/HkoAddorEdit';

function HkoApp() {
  const [hkoSinhVien, setHkoSinhVien] = useState([]);

  const getSinhVien = async () => {
    const hkoSinhVienResponse = await axios.get("HkoSinhVien");
    setHkoSinhVien(hkoSinhVienResponse.data);
  };

  useEffect(() => {
    getSinhVien();
  }, []);

  const [hkoSinhVienIsForm, setHkoSinhVienIsForm] = useState(false);
  const hkoSinhVienInit = {
    HkoMaSV: 0,
    HkoHoSV: "",
    HkoTenSV: "",
    HkoPhai: false,
    HkoNgaySinh: "",
    HkoNoiSinh: "",
    HkoMaKH: "",
    HkoHocBong: false,
    HkoDiemTrungBinh: "",
  };
  const [hkoSinhVienEdit, setHkoSinhVienEdit] = useState(hkoSinhVienInit);

  const hkoHandleAddNew = (param) => {
    setHkoSinhVienEdit(hkoSinhVienInit);
    setHkoSinhVienIsForm(param);
  };

  const hkoHandleCloseForm = (param) => {
    setHkoSinhVienIsForm(param);
  };

  const hkoHandleSinhVienSubmit = async (student) => {
    if (student.HkoMaSV === 0) {
      await axios.post("HkoSinhVien", student);
    } else {
      await axios.put(`HkoSinhVien/${student.HkoMaSV}`, student);
    }
    getSinhVien();
    setHkoSinhVienIsForm(false);
  };

  const hkoHandleDelete = async (HkoMaSV) => {
    await axios.delete(`/HkoSinhVien/${HkoMaSV}`);
    let hkoDelete = hkoSinhVien.filter((x) => x.HkoMaSV !== HkoMaSV);
    setHkoSinhVien(hkoDelete);
  };

  const hkoHandleEdit = (hkoStudent) => {
    setHkoSinhVienEdit(hkoStudent);
    setHkoSinhVienIsForm(true);
  };

  return (
    <div className="App">
      <HkoSinhVienList 
        renderHkoStudentList={hkoSinhVien} 
        onAddNew={hkoHandleAddNew}
        onHkoDelete={hkoHandleDelete}
        onHkoEdit={hkoHandleEdit}
      />
      
      {hkoSinhVienIsForm === true ? (
        <HkoAddorEdit 
        onCloseForm = {hkoHandleCloseForm}
        onHkoSinhVienSubmit = {hkoHandleSinhVienSubmit}
        renderHkoSinhVien = {hkoSinhVienEdit}
      />
      ) : (
        ""
      )}
    </div>
  );
}

export default HkoApp;
