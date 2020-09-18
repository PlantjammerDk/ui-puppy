import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { Avatar, AvatarProps, EShapes, ESizes } from "src/index";

const avatarProps: AvatarProps = {
  title: "Recipe creator",
  picture: "fakepath/mypicture.png",
  showInitials: true,
  showName: true,
  showTitle: true,
  name: "TestUser Name",
  size: "tiny",
  shape: "rectangle",
};

describe("Avatar", () => {
  beforeEach(() => {
    render(Avatar(avatarProps));
  });
  afterEach(() => {
    cleanup();
  });

  const { getByText, getByTestId } = screen;

  test("renders avatar image with right size and shape", async () => {
    expect(getByTestId("img-container")).toHaveStyle({
      backgroundImage: `url(${avatarProps.picture})`,
    });
    expect(getByTestId("img-container")).toHaveClass(
      `${ESizes[avatarProps.size]} ${EShapes[avatarProps.shape]}`
    );
    avatarProps.picture = "";
  });

  test("renders initials with right size and shape if no image", async () => {
    expect(getByText("TN")).toBeInTheDocument();
  });

  test("renders name and title", async () => {
    expect(getByText("TestUser Name")).toBeInTheDocument();
    expect(getByText("Recipe creator")).toBeInTheDocument();
    avatarProps.showName = avatarProps.showTitle = false;
  });
});
