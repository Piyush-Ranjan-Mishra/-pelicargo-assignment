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
  it("should render filter in searchbox", () => {
    const linkElement = screen.queryByTestId("filter");
    expect(linkElement).toBeDefined();
  });
  it("should render info in searchbox", () => {
    const linkElement = screen.queryByTestId("info");
    expect(linkElement).toBeDefined();
  });
  it("should render card", () => {
    const linkElement = screen.queryByTestId("card");
    expect(linkElement).toBeDefined();
  });
  it("should render pagination", () => {
    const linkElement = screen.queryByTestId("pagination");
    expect(linkElement).toBeDefined();
  });
  it("should render avatar", () => {
    const linkElement = screen.queryByTestId("avatar");
    expect(linkElement).toBeDefined();
  });
  it("should render dark mode button", () => {
    const linkElement = screen.queryByTestId("dark-mode-button");
    expect(linkElement).toBeDefined();
  });
});
