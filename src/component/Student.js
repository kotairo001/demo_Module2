import React, {useContext} from 'react'
import { ShareContext } from '../App'
function Student({stt,stInfo, showStudent, handleDelete}) {
  const {isToggle, studentList, selectedStudent, handleEdit} = useContext(ShareContext)

  return (
    <tr>
        <td>{stt}</td>
        <td>{stInfo.studentId}</td>
        <td>{stInfo.name}</td>
        <td>{stInfo.age}</td>
        <td>{stInfo.gender ? "Nam" : "Nữ"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={()=>{showStudent(stInfo)}}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => handleEdit(stInfo)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={()=>handleDelete(stInfo)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
  )
}

export default Student

