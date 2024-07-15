import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import '@testing-library/jest-dom'; // Make sure this is imported

describe("Header", () => {
  it("renders a header element", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
});
