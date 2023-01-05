import Control from "./component/Control";
import ListStudent from "./component/ListStudent";
import Form from "./component/Form";
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
      data: "",
      students: [
        {
          studentsID: "SV001",
          name: "Trần Hải Yến",
          age: 24,
          gender: false,
          birthDate: "23/02/1999",
          address: "Hà Nội",
        },
        {
          studentsID: "SV002",
          name: "Trương Minh Thu",
          age: 21,
          gender: false,
          birthDate: "10/09/2002",
          address: "Yên Bái",
        },
        {
          studentsID: "SV003",
          name: "Đỗ Văn Chuân",
          age: 27,
          gender: true,
          birthDate: "25/05/1996",
          address: "Nam Định",
        },
      ],
      searchData: "",
      sortDir: "",
      sortBy: "",
    };
  }
  handleToggle = (status) => {
    console.log(status);
    this.setState({
      isToggle: status,
    });
  };
  showInfo = (info) => {
    console.log(info);
    this.setState({
      data: info,
    });
  };
  handleSearch = (searchData) => {
    this.setState({
      searchData: searchData,
    });
  };
  handleSort = (sortDir, sortBy) => {
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy,
    });
  };
  deleteSt = (index) => {
    console.log(index);
    this.setState({
      students: this.state.students.splice(index, 1),
    });
  };
  render() {
    let students = [];
    if (this.state.searchData != "") {
      this.state.students.forEach((st) => {
        if (
          st.name.toLowerCase().includes(this.state.searchData.toLowerCase())
        ) {
          students.push(st);
        }
      });
    } else {
      students = [...this.state.students];
    }
    if (this.state.sortDir != "") {
      if (this.state.sortDir == "studentName") {
        if (this.state.sortBy == "ASC") {
          students.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
          );
        } else {
          students.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
          );
        }
      } else {
        if(this.state.sortBy == "ASC") {
          students.sort((a, b) => (a.age - b.age));
          
        } else {
          students.sort((a, b) => (b.age - a.age));
        }
        console.log("sort age",students);
      }
    }
    let elementForm;
    if (this.state.isToggle) {
      elementForm = <Form getInfo={this.state.data}></Form>;
    } else {
      elementForm = "";
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control
                propToggle={this.handleToggle}
                handleSearchProp={this.handleSearch}
                handleSortProp={this.handleSort}
              ></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent
                student={students}
                seeInfo={this.showInfo}
                propToggle={this.handleToggle}
                deleteData={this.deleteSt}
              ></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
        </div>
      </div>
    );
  }
}

export default App;
