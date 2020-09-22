import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { Input, LocalInputProps } from "../src/index";
import userEvent from "@testing-library/user-event";

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
  const { getByRole, getByText, getByTestId, getByDisplayValue } = screen;

  test("renders input component", async () => {
    const inputElement = getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("wrapper div has className from props", async () => {
    const wrapperDiv = getByTestId("wrapping-div");
    expect(wrapperDiv).toHaveClass(inputProps.className || "flex flex-col");
  });

  test("renders label and caption", async () => {
    expect(getByText(inputProps.label || "")).toBeInTheDocument();
    expect(getByText(inputProps.caption || "")).toBeInTheDocument();
  });

  test("updates input value", async () => {
    const input = getByRole("textbox");
    userEvent.type(input, "testing input");
    expect(getByDisplayValue("testing input")).toBeInTheDocument();
  });

  test("has right default borderColor and captionColor", async () => {
    const inputElement = getByRole("textbox");
    expect(inputElement).toHaveClass("border-gray-300");
    expect(getByText(inputProps.caption || "")).toHaveClass("text-gray-600");
  });
});
