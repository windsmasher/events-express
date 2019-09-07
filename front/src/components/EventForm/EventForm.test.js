import React from "react";
import EventForm from "./EventForm";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { expect } from "chai";
import { Form } from "react-bootstrap";

const mockStore = configureMockStore();
let store = mockStore({});
const component = shallow(<EventForm store={store} />).dive();

it("one element should be selectable by class eventsForm", () => {
  const wrapper = component.find(".eventsForm");
  expect(wrapper.length).to.equal(1);
});

it("four elements should be selectable by class eventsForm__error", () => {
  const wrapper = component.find(".eventsForm__error");
  expect(wrapper.length).to.equal(4);
});

it("one element should be selectable by class eventsForm__form", () => {
  const wrapper = component.find(".eventsForm__form");
  expect(wrapper.length).to.equal(1);
});

it("one element should be selectable by class eventsForm__button", () => {
  const wrapper = component.find(".eventsForm__button");
  expect(wrapper.length).to.equal(1);
});

it("first label should contain first name text", () => {
    const wrapper = component.find(Form.Label);
    expect(wrapper.at(0).text()).to.equal("First name")
});

it("second label should contain last name text", () => {
    const wrapper = component.find(Form.Label);
    expect(wrapper.at(1).text()).to.equal("Last name")
});

it("third label should contain email text", () => {
    const wrapper = component.find(Form.Label);
    expect(wrapper.at(2).text()).to.equal("Email")
});

it("fourth label should contain event date text", () => {
    const wrapper = component.find(Form.Label);
    expect(wrapper.at(3).text()).to.equal("Event date")
});
