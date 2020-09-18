import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { Textarea, TextareaProps } from "src/index";
import userEvent from "@testing-library/user-event";
import { EStatus } from "enums/style.enums";

const textAreaProps: TextareaProps = {
  caption: "test textarea caption",
  label: "test textarea label",
  status: EStatus.Danger,
  className: "my-test-class",
};

describe("Textarea", () => {
  beforeEach(() => {
    render(Textarea(textAreaProps));
  });
  afterEach(() => {
    cleanup();
  });
  const { getByRole, getByText, getByTestId, getByDisplayValue } = screen;

  test("renders textarea field ", async () => {
    const textareaElement = getByRole("textbox");
    expect(textareaElement).toBeInTheDocument();
  });

  test("wrapper div has className from props", async () => {
    const wrapperDiv = getByTestId("wrapping-div");
    expect(wrapperDiv).toHaveClass(textAreaProps.className || "flex flex-col");
  });

  test("renders label and caption", async () => {
    expect(getByText(textAreaProps.label || "")).toBeInTheDocument();
    expect(getByText(textAreaProps.caption || "")).toBeInTheDocument();
  });

  test("updates textarea value", async () => {
    const textareaElement = getByRole("textbox");
    userEvent.type(textareaElement, "testing input");
    expect(getByDisplayValue("testing input")).toBeInTheDocument();
  });

  test("has right default borderColor and captionColor", async () => {
    const textareaElement = getByRole("textbox");
    expect(textareaElement).toHaveClass("border-danger-500");
    expect(getByText(textAreaProps.caption || "")).toHaveClass(
      "text-danger-600"
    );
  });
});
