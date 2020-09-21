import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { Button, ButtonProps } from "../src/index";
import userEvent from "@testing-library/user-event";

const buttonProps: ButtonProps = {
  appearance: "ghost",
  status: "basic",
  size: "large",
};

const callback = jest.fn();

describe("Avatar", () => {
  beforeEach(() => {
    render(
      <Button {...buttonProps} onClick={callback}>
        Test Button
      </Button>
    );
  });
  afterEach(() => {
    cleanup();
  });

  const { getByText, getByRole } = screen;

  test("renders button with right classes", async () => {
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-5 py-4");
  });

  test("renders button's inner content with right classes", async () => {
    expect(getByText("Test Button")).toHaveClass(
      "text-base font-bold tracking-wide"
    );
  });

  test("emits event on click", async () => {
    const button = getByText("Test Button");
    userEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
