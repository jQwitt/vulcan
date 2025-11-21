import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("placeholder test", () => {
  it("renders a simple placeholder", () => {
    render(<div>Placeholder test</div>);
    expect(screen.getByText("Placeholder test")).toBeInTheDocument();
  });
});
