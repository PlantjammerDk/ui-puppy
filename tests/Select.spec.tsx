import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { Select, LocalSelectProps } from "../src/index";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const selectProps: LocalSelectProps = {
  label: "test label",
  caption: "test caption",
  options: [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
  ],
};

describe("Select", () => {
  beforeEach(() => {
    render(Select(selectProps));
  });
  afterEach(() => {
    cleanup();
  });

  const { getByText, getByRole } = screen;

  test("renders select", async () => {
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByText("Select...")).toBeInTheDocument();
  });

  test("renders select", async () => {
    expect(getByText("test label")).toBeInTheDocument();
    expect(getByText("test caption")).toBeInTheDocument();
  });

  test("renders select", async () => {
    await act(async () => {
      await userEvent.click(getByRole("textbox"));
      await userEvent.click(getByText("1"));
    });
    expect(getByText("1")).toBeInTheDocument();
  });
});
