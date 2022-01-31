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

  test("button is enabled", () => {
    render(<Button content="Click me" />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeEnabled();
  });
});
