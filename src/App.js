import Control from "./component/Control";
import ListStudent from "./component/ListStudent";
import Form from "./component/Form";
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      students: [
        {studentsID: 'SV001', name: 'Trần Hải Yến', age: 24, gender: false, birthDate: "23/02/1999", address: "Hà Nội"},
        {studentsID: 'SV002', name: 'Trương Minh Thu', age: 21, gender: false, birthDate: "10/09/2002", address: "Yên Bái"},
        {studentsID: 'SV003', name: 'Đỗ Văn Chuân', age: 27, gender: true, birthDate: "25/05/1996", address: "Nam Định"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent listStudent={this.state.students}></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          <Form ></Form>
        </div>
      </div>
    );
  }
}

export default App;
