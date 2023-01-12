import React, { useContext, useEffect, useState } from "react";
import { ShareContext } from "../App";


function Form({handleCreate, handleUpdate}) {
  const [students, setStudents] = useState({
    key:"",
    studentId: "",
    name: "",
    age: "",
    gender: false,
    birthDate: "",
    birthPlace: "",
    address: "",
  });
  const { selectedStudent, toggleOff } = useContext(ShareContext);
  useEffect(() => {
    setStudents({ ...selectedStudent });
  }, [selectedStudent]);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudents({...students, [name] : value});
    // console.log(students)
  };
  const createStudent = (e) => {
    e.preventDefault();
    handleCreate(students)
    toggleOff();
  };
  const updateStudent = (e) => {
    e.preventDefault();
    handleUpdate(students)
    console.log(students.studentId)
    toggleOff();
  };
  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">  
                <input
                  type="text"
                  className="form-control"
                  value={students.studentId}
                  name="studentId"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={students.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={students.age}
                  name="age"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="gender"
                  value={students.gender}
                  onChange={handleChange}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  value={students.birthDate}
                  name="birthDate"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={students.birthPlace}
                  name="birthPlace"
                  onChange={handleChange}
                >
                  <option value={""}>Chọn nơi sinh</option>
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"YB"}>Yên Bái</option>
                  <option value={"NĐ"}>Nam Định</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  value={students.address}
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="btn btn-primary me-2" onClick={createStudent}>Create</button>
            <button className="btn btn-primary me-2" onClick={updateStudent}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
