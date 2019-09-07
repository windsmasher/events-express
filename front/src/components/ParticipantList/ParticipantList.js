import React, { Component } from "react";
import Participant from "./Participant/Participant";
import { ListGroup } from "react-bootstrap";
import { getParticipants } from "../../store/actions/participantActions";
import "./ParticipantList.scss";
import { connect } from "react-redux";

class ParticipantList extends Component {
  componentDidMount() {
    this.props.getParticipants();
  }
  render() {
    const participants = this.props.participants;
    if (participants.length) {
      return (
        <div className="participantList">
          <h4 className="participantList__title">List of participants</h4>
          <ListGroup variant="flush">
            {participants.map((participant, index) => {
              return <Participant key={index} participant={participant} />;
            })}
          </ListGroup>
        </div>
      );
    } else {
      return <div className="noData">No data</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    participants: state.participantReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getParticipants: () => dispatch(getParticipants())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantList);
