import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App page", () => {
  it("should find a word in page", () => {
    render(<App />);

    const linkElement = screen.getByText(/hello woman/i);
    expect(linkElement).toBeTruthy();
  });
});
