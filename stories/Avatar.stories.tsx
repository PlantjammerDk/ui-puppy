import React from "react";
import { Avatar, AvatarProps } from "../src/Avatar";

import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta;

const picture =
  "https://s3.eu-central-1.amazonaws.com/assets.front.pj/uipuppy/gob.jpg";
const name = "Gob Bluth";
const title = "CEO Gobias Industries";

export const Sizes = (args: AvatarProps) => (
  <div className="space-y-4">
    <Avatar {...args} size="tiny" picture={picture} name={name} title={title} />
    <Avatar
      {...args}
      size="small"
      picture={picture}
      name={name}
      title={title}
    />
    <Avatar
      {...args}
      size="medium"
      picture={picture}
      name={name}
      title={title}
    />
    <Avatar
      {...args}
      size="large"
      picture={picture}
      name={name}
      title={title}
    />
    <Avatar
      {...args}
      size="giant"
      picture={picture}
      name={name}
      title={title}
    />
  </div>
);

export const Shapes = (args: AvatarProps) => (
  <div className="space-y-4">
    <Avatar
      {...args}
      picture={picture}
      name={name}
      title="Rectangle"
      shape="rectangle"
    />
    <Avatar
      {...args}
      picture={picture}
      name={name}
      title="Semi round"
      shape="semi-round"
    />
    <Avatar
      {...args}
      picture={picture}
      name={name}
      title="Round"
      shape="round"
    />
  </div>
);

export const Name = (args: AvatarProps) => (
  <div className="space-y-4">
    <Avatar
      {...args}
      picture={picture}
      name={name}
      title={title}
      showTitle={false}
    />
  </div>
);

export const Title = (args: AvatarProps) => (
  <div className="space-y-4">
    <Avatar
      {...args}
      picture={picture}
      name={name}
      title={title}
      showName={false}
    />
  </div>
);

export const Initials = (args: AvatarProps) => (
  <div className="space-y-4">
    <Avatar {...args} name={name} title={title} size="tiny" />
    <Avatar {...args} name={name} title={title} size="small" />
    <Avatar {...args} name={name} title={title} size="medium" />
    <Avatar {...args} name={name} title={title} size="large" />
    <Avatar {...args} name={name} title={title} size="giant" />
  </div>
);

export const NoProps = (args: AvatarProps) => (
  <div className="space-y-4">
    <Avatar />
  </div>
);
