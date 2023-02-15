import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";

describe("Home", () => {
  render(<Home />);
  it("should render title", () => {
    const linkElement = screen.getByText(/Curated/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should render menu", () => {
    const linkElement = screen.queryByTestId("menu");
    expect(linkElement).toBeDefined();
  });
  it("should render searchbox", () => {
    const linkElement = screen.queryByTestId("search-box");
    expect(linkElement).toBeDefined();
  });
  it("should render card", () => {
    const linkElement = screen.queryByTestId("card");
    expect(linkElement).toBeDefined();
  });
  it("should render avatar", () => {
    const linkElement = screen.queryByTestId("avatar");
    expect(linkElement).toBeDefined();
  });
});
