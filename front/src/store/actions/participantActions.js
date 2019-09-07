import axios from "axios";
import { apiUrl } from "../../config/apiUrl";

export const getParticipants = () => {
  return dispatch => {
    axios
      .get(apiUrl())
      .then(response => response.data)
      .then(result => dispatch({ type: "GET_PARTICIPANTS", payload: result }));
  };
};

export const addParticipant = participant => {
  return dispatch => {
    axios
      .post(apiUrl(), {
        ...participant
      })
      .then(response => response.data)
      .then(result => dispatch({ type: "ADD_PARTICIPANT", payload: result }));
  };
};

export const deleteParticipant = id => {
  return dispatch => {
    axios
      .delete(apiUrl(id))
      .then(response => response.data)
      .then(result =>
        dispatch({ type: "DELETE_PARTICIPANT", payload: result._id })
      );
  };
};
