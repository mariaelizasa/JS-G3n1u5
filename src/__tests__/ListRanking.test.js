import React from "react";
import { render } from "@testing-library/react";

import ListRanking from "../components/ListRanking/ListRanking";

describe.only("Testing Game Component", () => {
  it("should wait for the rendered component", () => {
    const view = render(<ListRanking />);
    expect(view).toBe(view);
  });

  it("should ensure that firstchild element will return expected result from passed value in the parameter", () => {
    const { getByTestId } = render(<ListRanking name="test" />);
    const getText = getByTestId("name");
    expect(getText.firstChild).toMatchSnapshot("test");
  });

  it("should ensure that innerHTML descendant elements when receiving passed value in parameter", () => {
    const { getByTestId } = render(<ListRanking score="1" />);
    const getScore = getByTestId("score");
    expect(getScore.innerHTML).toEqual("1");
  });
});
