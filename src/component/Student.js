import React, {Component} from "react";
class Student extends Component {

render() {
  let {stInfo} = this.props;
  let showControl = () => {
    this.props.showControl(true)
  }
  let pushData= () => {
    this.props.getData(this.props.stInfo)
    showControl()
  }
  let deleteInfo = () => {
    this.props.deleteInfo(this.props.stIndex)
  }
    return (
        <tr>
        <td>{this.props.stt}</td>
        <td>{stInfo.studentsID}</td>
        <td>{stInfo.name}</td>
        <td>{stInfo.age}</td>
        <td>{stInfo.gender ? "Nam":"Nữ"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={pushData}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={deleteInfo}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    )
}
};
export default Student;