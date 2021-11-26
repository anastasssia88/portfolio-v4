import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Tag from "./Tag";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("tag renders w/ or w/out content", () => {
  act(() => {
    render(<Tag content="My New Tag!" />, container);
  });
  expect(container.textContent).toBe("My New Tag!");
});
