import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { Input, LocalInputProps } from "src/index";

const inputProps: LocalInputProps = {
  fieldSize: "small",
  label: "testInput",
  caption: "testCaption",
  className: "my-test-class",
};

describe("Input", () => {
  beforeEach(() => {
    render(Input(inputProps));
  });
  afterEach(() => {
    cleanup();
  });
  const { getByRole, getByText, getByTestId } = screen;

  test("renders email input and password input", async () => {
    const inputElement = getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("wrapper div has className from props", async () => {
    const wrapperDiv = getByTestId("wrapping-div");
    expect(wrapperDiv).toHaveClass(inputProps.className);
  });

  test("renders label and caption", async () => {
    expect(getByText(inputProps.label)).toBeInTheDocument();
    expect(getByText(inputProps.caption)).toBeInTheDocument();
  });

  test("has right default borderColor and captionColor", async () => {
    const inputElement = getByRole("textbox");
    expect(inputElement).toHaveClass("border-gray-300");
    expect(getByText(inputProps.caption)).toHaveClass("text-gray-600");
  });
});
