import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag component", () => {
  test("renders text", () => {
    // Arrange
    render(<Tag content="My New Tag!" />);

    // Assert
    const tagElement = screen.getByText("My New Tag!");
    expect(tagElement).toBeInTheDocument();
  });
});

// OPTION 1
// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Tag from "./Tag";

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

// it("tag renders w/ or w/out content", () => {
//   act(() => {
//     render(<Tag content="My New Tag!" />, container);
//   });
//   expect(container.textContent).toBe("My New Tag!");
// });
