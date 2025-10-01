import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../src/Counter";

test("renders Counter component", () => {
  render(<Counter />);
  const buttonElement = screen.getByRole("button", { name: /increment/i });
  expect(buttonElement).toBeInTheDocument();
});

test("increments count", () => {
  render(<Counter />);
  const buttonElement = screen.getByRole("button", { name: /increment/i });
  fireEvent.click(buttonElement);
  const countElement = screen.getByText(/count is 1/i);
  expect(countElement).toBeInTheDocument();
});

test("decrements count", () => {
  render(<Counter />);
  const incrementButton = screen.getByRole("button", { name: /increment/i });
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByRole("button", { name: /decrement/i });
  fireEvent.click(decrementButton);
  const countElement = screen.getByText(/count is 0/i);
  expect(countElement).toBeInTheDocument();
});
