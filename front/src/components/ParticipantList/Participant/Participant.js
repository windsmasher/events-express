import React from "react";
import moment from "moment";
import { ListGroup, Button } from "react-bootstrap";
import { deleteParticipant } from "../../../store/actions/participantActions";
import { connect } from "react-redux";
import "./Participant.scss";

const Participant = props => {
  return (
    <ListGroup.Item className="participant">
      <div className="participant__info">
        <div className="participant__info-firstName">{props.participant.firstName}</div>
        <div className="participant__info-lastName">{props.participant.lastName}</div>
        <div className="participant__info-email">{props.participant.email}</div>
        <div className="participant__info-eventDate">{moment(props.participant.eventDate).format("Do MMMM YYYY")}</div>
      </div>
      <div className="participant__button">
        <Button onClick={() => props.deleteParticipant(props.participant._id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteParticipant: id => dispatch(deleteParticipant(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Participant);
