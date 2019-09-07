import React from "react";
import Navbar from "./Navbar";
import { shallow } from "enzyme";
import { expect } from "chai";

const component = shallow(<Navbar />);

it('div should be selectable by class navbar', () => {
    expect(component.find("div").hasClass("navbar")).to.equal(true);
})

it('h1 should be selectable by class navbar__title', () => {
    expect(component.find("h1").hasClass("navbar__title")).to.equal(true);
})

it('h1 should contain correct title', () => {
    expect(component.find("h1").text()).to.equal("Events Form")
})