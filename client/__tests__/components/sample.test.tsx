import { render, screen } from "@testing-library/react";

test("renders a message", () => {
  render(<div>Hello world</div>);
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});
