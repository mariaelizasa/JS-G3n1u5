import React, { Children } from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "../components/Button/Button";

describe.only("Testing Game Component", () => {
  it("should wait for the rendered component", () => {
    const view = render(<Button />);
    expect(view).toBe(view);
  });

  it("should ensure that onClick function will be called", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick} />);
    const getOnClickButton = getByTestId("button");
    fireEvent.click(getOnClickButton);
    expect(onClick).toHaveBeenCalled();
  });

  it("should ensure that onSubmit function will be called", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Button onSubmit={onSubmit} />);
    fireEvent.submit(getByTestId("button"));
    expect(onSubmit).toHaveBeenCalled();
  });
});
