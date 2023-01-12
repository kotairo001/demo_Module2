import Control from "./component/Control";
import ListStudent from "./component/ListStudent";
import Form from "./component/Form";
import React, { useCallback, useState, createContext } from "react";
import { v4 } from "uuid";

export const ShareContext = createContext();

function App() {
  const [isToggle, setToggle] = useState(false);
  const [studentList, setStudentList] = useState([
    {
      key: v4(),
      studentId: "SV001",
      name: "Trần Hải Yến",
      age: 24,
      gender: false,
      birthDate: "1999-02-04",
      birthPlace: "HN",
      address: "Hà Nội",
    },
    {
      key: v4(),
      studentId: "SV002",
      name: "Trương Minh Thu",
      age: 21,
      gender: false,
      birthDate: "2000-09-11",
      birthPlace: "YB",
      address: "Yên Bái",
    },
    {
      key: v4(),
      studentId: "SV003",
      name: "Đỗ Văn Chuân",
      age: 27,
      gender: true,
      birthDate: "1996-05-25",
      birthPlace: "NĐ",
      address: "Nam Định",
    },
  ]);
  const [searchData, setSearchData] = useState("");
  const [selectedStudent, setSelectedStudent] = useState();
  const [deleteSt, setDeleteSt] = useState();
  const [sortedData, setSortedData] = useState("")
  // const handleCreate = useCallback((isToggle, newStudent)=>{
  //   setToggle(isToggle)
  //   studentList.push(newStudent)
  // })
  const actionAndToggle = () => {
    setToggle(true);
    setSelectedStudent("");
  };
  const toggleOff = useCallback(() => {
    setToggle(false);
  });
  const showStudent = useCallback(
    (selectedStudent) => {
      setToggle(true);
      setSelectedStudent(selectedStudent);
    },
    [selectedStudent]
  );
  const handleDelete = useCallback((deleteStudent) => {
    setStudentList(
      studentList.filter((st) => {
        if (st.key !== deleteStudent.key) {
          return st;
        }
      }),
      [deleteStudent]
    );
  });
  const handleCreate = useCallback((newStudent) => {
    setStudentList([...studentList, newStudent]);
  },[studentList]) 

  const handleEdit = useCallback((selectedStudent) => {
    setToggle(true);
    setSelectedStudent(selectedStudent);
  },[selectedStudent]) 

  const handleUpdate = useCallback((updatedStudent) => {
    setStudentList(
      studentList.map((st) => {
        if (st.key === updatedStudent.key) {
          return updatedStudent;
        } else {
          return st;
        }
      })
    );
  },[studentList]) 
  const dataSearch = (searchData) => {
    setSearchData(searchData);
    if (searchData !== "") {
      setStudentList(
        studentList.filter((st) => {
          if (
            st.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
          ) {
            return st;
          } 
        })
      );
    }
  };
  const sortData = (sortedData) => {
    setSortedData(sortedData)
    if(sortedData==="studentName") {
      studentList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortedData==="studentAge") {
      studentList.sort((a, b) => a.age - b.age);
    } else if (sortedData==="studentID") {
      studentList.sort((a, b) => a.studentId.localeCompare(b.studentId));
    }
  }
  let elementForm;
  if (isToggle) {
    elementForm = (
      <Form
        // getInfo={this.state.data}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        // studentInfo={this.state.selectedStudent}
      ></Form>
    );
  } else {
    elementForm = "";
  }


  return (
    <div className="App">
      <ShareContext.Provider
        value={{
          isToggle,
          actionAndToggle,
          toggleOff,
          handleEdit,
          dataSearch,
          studentList,
          searchData,
          selectedStudent,
          deleteSt,
        }}
      >
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control
              // actionAndToggleProp={handleActionAndToggle}
              // handleSearchProp={this.handleSearch}
              // handleSortProp={this.handleSort}
              sortData={sortData}
              ></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent
                showStudent={showStudent}
                // getInfoProp={this.getInfo}
                // actionAndToggle={handleActionAndToggle}
                handleDelete={handleDelete}
              ></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
        </div>
      </ShareContext.Provider>
    </div>
  );
}

export default App;
