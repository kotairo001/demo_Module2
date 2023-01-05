import React, { Component } from "react";
import Student from "./Student";
class ListStudent extends Component {
  catchData = (info) => {
    this.props.seeInfo(info)
  }
  getControl = (status) => {
    this.props.propToggle(status)
  }
  catchInfo = (index) => {
    this.props.deleteData(index)

  }
  render() {
    let {student} = this.props;
    let elementStudentList = student.map((st,index)=>{
      return <Student key={st.studentsID} stInfo={st} stt={index+1} getData={this.catchData} showControl={this.getControl} deleteInfo ={this.catchInfo} stIndex={index}></Student>
    })

    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {elementStudentList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudent;
