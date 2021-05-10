const studentsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_STUDENTS":
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default studentsReducer;
