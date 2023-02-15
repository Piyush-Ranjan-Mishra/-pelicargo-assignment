import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";
import Locale from "../../utils/locale";

test("renders", () => {
  render(<Home />);
  it("should render title", () => {
    const linkElement = screen.getByText(/Curated/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should render menu", () => {
    const linkElement = screen.getByText(Locale.menu.firstHalf[0]);
    expect(linkElement).toBeInTheDocument();
  });
  it("should render searchbox", () => {
    const linkElement = screen.getByPlaceholderText(
      Locale.searchBox.placeholder
    );
    expect(linkElement).toBeInTheDocument();
  });
  it("should render card", () => {
    const linkElement = screen.getByPlaceholderText(
      Locale.searchBox.placeholder
    );
    expect(linkElement).toBeInTheDocument();
  });
});
