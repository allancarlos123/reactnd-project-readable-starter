import { shallow, mount, render } from "enzyme";
import MockRouter from "react-mock-router";
import {Route} from "react-router-dom"
// import "jest-localstorage-mock";
// import "match-media";
import React from "react";
import ReactDOM from "react-dom";
import HeaderMenu from "./Header";

describe('Header', () => {
  it("should render the title Readable", () => {
    const push = jest.fn();

    const wrapper = render(
      <MockRouter push={push}>
        <Route render={(props) => (
          <HeaderMenu {...props} />
        )} />
      </MockRouter>
    )

    expect(wrapper.text()).toEqual('Readable');
  });
});


