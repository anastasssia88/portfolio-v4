import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders text", () => {
    // Arrange
    render(<Button content="test button" />);

    // Assert
    const buttonElement = screen.getByText("test button");
    expect(buttonElement).toBeInTheDocument();
  });
});

// OLD
// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Button from "./Button";

// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("button renders w/ or w/out content", () => {
//   act(() => {
//     render(<Button content="My Button!" />, container);
//   });
//   expect(container.textContent).toBe("My Button!");
// });
