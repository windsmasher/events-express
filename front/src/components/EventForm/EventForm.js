import React, { Component } from "react";
import { Button, Form, FormGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addParticipant } from "../../store/actions/participantActions";
import "./EventForm.scss";
import { regexes } from "./regexes"

const initErrors = {
  firstName: "",
  lastName: "",
  email: "",
  eventDate: ""
}

class EventForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      participant: {
        firstName: "",
        lastName: "",
        email: "",
        eventDate: ""
      },
      errors: initErrors
    };
  }

  validateFields = () => {
    const participant = this.state.participant;
    let errors = this.state.errors;

    errors.firstName = (participant.firstName.match(regexes.name)) ? "" : "Name is invalid";
    errors.lastName = (participant.lastName.match(regexes.name)) ? "" : "Last name is invalid";
    errors.email = (participant.email.match(regexes.email)) ? "" : "Email is invalid";
    errors.eventDate = (participant.eventDate.match(regexes.date)) ? "" : "Date is invalid"
    
    if(errors.firstName.length || errors.lastName.length || errors.email.length || errors.eventDate.length) {
      this.setState({errors: errors})
      return false;
    }
    return true;
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ participant: { ...this.state.participant, [name]: value } });
  };

  submit = event => {
    event.preventDefault();
    const isValid = this.validateFields();
    if(isValid) {
      this.setState({errors: initErrors});
      this.props.addParticipant(this.state.participant);
    } else {
      console.log(this.state.errors);
    }
  };

  render() {
    const errors = this.state.errors;
    const participant = this.state.participant;
    return (
      <div className="eventsForm">
        <Form className="eventsForm__form">
          <Row>
            <Col>
            <Form.Label>First name</Form.Label>
              <Form.Group controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={participant.firstName}
                  onChange={this.onChangeHandler}
                />
                <div className="eventsForm__error">{errors.firstName}</div>
              </Form.Group>
            </Col>
            <Col>
            <Form.Label>Last name</Form.Label>
              <FormGroup controlId="lastName">
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={participant.lastName}
                  onChange={this.onChangeHandler}
                />
                <div className="eventsForm__error">{errors.lastName}</div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Label>Email</Form.Label>
              <FormGroup controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={participant.email}
                  onChange={this.onChangeHandler}
                />
                <div className="eventsForm__error">{errors.email}</div>
              </FormGroup>
            </Col>
            <Col>
            <Form.Label>Event date</Form.Label>
              <FormGroup controlId="eventDate">
                <Form.Control
                  type="date"
                  placeholder="Event date"
                  name="eventDate"
                  value={participant.eventDate}
                  onChange={this.onChangeHandler}
                />
                <div className="eventsForm__error">{errors.eventDate}</div>
              </FormGroup>
            </Col>
          </Row>
          <div className="eventsForm__button">
            <Button onClick={this.submit} variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addParticipant: participant => dispatch(addParticipant(participant))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventForm);
