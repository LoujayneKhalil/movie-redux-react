const initialState = {
  data: [],
  status: "idle",
  error: null,
  currentPage: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case " PENDING":
      return {
        ...state,
        status: "pending",
      };
    case "SUCCESS":
      return {
        ...state,
        status: "fetching",
        data: action.payload,
      };
    case "FAILURE":
      return {
        ...state,
        status: "Error",
        error: action.payload,
      };
    case "SET_NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage+1,
      };
    case "SET_PREVIOUS_PAGE":
      return {
        ...state,
        currentPage: state.currentPage-1,
      };
    default:
      return state;
  }
};

export default moviesReducer;
