import React from "react";
import Participant from "./Participant";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { expect } from "chai";

const participantMock = {
    _id: "test-id",
    firstName: "test-name",
    lastName: "test-last-name",
    email: "test-email",
    eventDate: "2012-04-23T18:25:43.511Z"
}
const mockStore = configureMockStore();
let store = mockStore({});
const component = shallow(<Participant store={store} participant={participantMock}/>).dive();

it("one element should be selectable by class participant", () => {
  const wrapper = component.find(".participant");
  expect(wrapper.length).to.equal(1);
});

it("first name should have correct output", () => {
    const wrapper = component.find(".participant__info-firstName");
    expect(wrapper.text()).to.equal("test-name")
});

it("last name should have correct output", () => {
    const wrapper = component.find(".participant__info-lastName");
    expect(wrapper.text()).to.equal("test-last-name")
});

it("email should have correct output", () => {
    const wrapper = component.find(".participant__info-email");
    expect(wrapper.text()).to.equal("test-email")
});

it("event date should have correct output after formatting", () => {
    const wrapper = component.find(".participant__info-eventDate");
    expect(wrapper.text()).to.equal("23rd April 2012")
});
