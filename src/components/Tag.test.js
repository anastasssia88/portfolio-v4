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
