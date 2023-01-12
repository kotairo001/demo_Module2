import React, { useCallback, useContext, useState } from "react";
import { ShareContext } from "../App";

function Control({sortData}) {
  const { actionAndToggle, dataSearch } = useContext(ShareContext);
  const [searchData, setSearchData] = useState("");
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  const handleSearch = () => {
    dataSearch(searchData);
  };
  const handleSort = (e) => {
    sortData(e.target.value)
  }
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary btn-icon-text"
            onClick={actionAndToggle}
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className="col-6">
          <form className="search-form" action="#">
            <i className="icon-search" />
            <input
              type="search"
              className="form-control"
              placeholder="Search Here"
              title="Search here"
              onChange={handleChange}
            />
            <button
              className="btn btn-primary btn-icon-text"
              onClick={handleSearch}
            >
              Tìm kiếm
            </button>
          </form>
        </div>
        <div className="col-3 d-flex align-items-center" onChange={handleSort}>
          <select className="form-control">
            <option value=""></option>
            <option value="studentName">Sắp xếp từ A-Z</option>
            <option value="studentAge">Tuổi giảm dần</option>
            <option value="studentID">Sắp xếp theo MSSV</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Control;
// class Control extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchData: "",
//     };
//   }
//   handleChange = (event) => {
//     let value = event.target.value;
//     this.setState({
//       searchData: value,
//     });
//   };
//   handleSearch = () => {
//     this.props.handleSearchProp(this.state.searchData);
//   };
//   showForm = () => {
//     this.props.actionAndToggleProp(true,"CreateStudent",);
//   };
//   handelSort = (event) => {
//     let value = event.target.value;
//     let arrSort = value.split("-");
//     this.props.handleSortProp(arrSort[0], arrSort[1]);
//   };
//   render() {
//     return (
//       <div className="card-header">
//         <div className="row">
//           <div className="col-3">
//             <button
//               type="button"
//               className="btn btn-primary btn-icon-text"
//               onClick={this.showForm}
//             >
//               Thêm mới sinh viên
//             </button>
//           </div>
//           <div className="col-6">
//             <form className="search-form" action="#">
//               <i className="icon-search" />
//               <input
//                 type="search"
//                 className="form-control"
//                 placeholder="Search Here"
//                 title="Search here"
//                 onChange={this.handleChange}
//               />
//               <button
//                 className="btn btn-primary btn-icon-text"
//                 onClick={this.handleSearch}
//               >
//                 Tìm kiếm
//               </button>
//             </form>
//           </div>
//           <div className="col-3 d-flex align-items-center">
//             <select className="form-control" onChange={this.handelSort}>
//               <option value=""></option>
//               <option value="studentName-ASC">Sắp xếp từ A-Z</option>
//               <option value="studentName-DESC">Sắp xếp từ Z-A</option>
//               <option value="studentAge-ASC">Tuổi tăng dần</option>
//               <option value="studentAge-DESC">Tuổi giảm dần</option>
//               <option value="studentID-ASC">Sắp xếp theo số SV</option>
//               <option value="studentID-DESC">Sắp xếp theo số SV</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Control;
