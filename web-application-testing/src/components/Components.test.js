import React from "react";
import { render, cleanup } from "@testing-library/react";
import Dashboard from './Dashboard';

afterEach(cleanup);

test("verify ball text", () => {
  const { getAllByText } = render(<Dashboard />);
  getAllByText("Balls");
})
