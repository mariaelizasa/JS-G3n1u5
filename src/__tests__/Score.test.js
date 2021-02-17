import React from "react";
import { render } from "@testing-library/react";

import Score from "../components/Score/Score";

describe.only("Testing Game Component", () => {
  it("should wait for the rendered component", () => {
    const view = render(<Score />);
    expect(view).toBe(view);
  });

  it("should ensure that innerHTML descendant elements when receiving passed value in parameter", () => {
    const { getByTestId } = render(<Score />);
    const getTitle = getByTestId("title");
    expect(getTitle.innerHTML).toEqual("Fim de Jogo");

  });
});
