import { createContext, useReducer } from "react";
import studentsReducer from "../reducers/studentsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  students: [],
  error: null,
};

export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentsReducer, initialState);
  // get all students
  async function getStudents() {
    const res = await axios.get(
      "https://vals-students-app.herokuapp.com/api/v2/students"
    );
    try {
      dispatch({
        type: "GET_ALL_STUDENTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StudentsContext.Provider
      value={{ getStudents, students: state.students, loading: state.loading }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
