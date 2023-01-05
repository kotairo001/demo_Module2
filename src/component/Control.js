import React, { Component } from "react";
class Control extends Component {
  constructor() {
    super();
    this.state = {
      searchData: "",
    };
  }
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      searchData: value,
    });
  };
  handleSearch = () => {
    this.props.handleSearchProp(this.state.searchData);
  };
  showForm = () => {
    this.props.propToggle(true);
  };
  handelSort = (event) => {
    let value = event.target.value;
    let arrSort = value.split("-");
    this.props.handleSortProp(arrSort[0], arrSort[1]);
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={this.showForm}
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
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={this.handelSort}>
              <option value=""></option>
              <option value="studentName-ASC">Tên tăng dần</option>
              <option value="studentName-DESC">Tên giảm dần</option>
              <option value="studentAge-ASC">Tuổi tăng dần</option>
              <option value="studentAge-DESC">Tuổi giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Control;
