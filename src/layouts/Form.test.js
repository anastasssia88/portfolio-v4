import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe("Form component", () => {
  test("renders with enabled submit button", () => {
    render(<Form />);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test("renders with email input field", () => {
    render(<Form />);
    const emailInput = screen.getByRole("textbox", { name: "Email*" });
    expect(emailInput).toBeInTheDocument();
  });

  test("renders with name input field", () => {
    render(<Form />);
    const nameInput = screen.getByRole("textbox", { name: "Name*" });
    expect(nameInput).toBeInTheDocument();
  });

  test("type email input", () => {
    render(<Form />);
    const inputEmail = screen.getByRole("textbox", { name: "Email*" });
    userEvent.type(inputEmail, "anastasia@test.com");
    expect(inputEmail).toHaveValue("anastasia@test.com");
  });

  test("type name input", () => {
    render(<Form />);
    const inputName = screen.getByRole("textbox", { name: "Name*" });
    userEvent.type(inputName, "Anastasia");
    expect(inputName).toHaveValue("Anastasia");
  });

  test("doesn't render success message prior form submit", () => {
    // const handleSubmit = jest.fn();
    render(<Form />);
    const successMessage = screen.queryByRole("paragraph");
    expect(successMessage).not.toBeInTheDocument();
  });

  // test("renders on submit success message", () => {
  //   const handleSubmit = jest.fn();
  //   render(<Form />);
  //   const button = screen.getByRole("button", { name: "Submit" });
  //   expect(button).toBeInTheDocument();
  //   userEvent.click(button);
  //   const successMessage = screen.findByText("paragraph")
  // });
});
