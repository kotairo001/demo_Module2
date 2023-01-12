import React, {useContext} from 'react'
import Student from "./Student";
import { ShareContext } from '../App'

function ListStudent({showStudent, handleDelete}) {
  const {isToggle, studentList, selectedStudent} = useContext(ShareContext)
  let elementStudentList = studentList.map((st,index)=>{
    return <Student key={st.studentId} stInfo={st} stt={index+1} showStudent={showStudent} handleDelete={handleDelete}></Student>
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
  )
}
export default ListStudent
