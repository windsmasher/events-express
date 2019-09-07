export const participantReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PARTICIPANTS":
      return [...action.payload];
    case "ADD_PARTICIPANT":
      return [...state, action.payload];
    case "DELETE_PARTICIPANT":
      return [...state.filter(item => item._id !== action.payload)];
    default:
      return state;
  }
};
