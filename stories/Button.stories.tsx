import React from "react";
import { Button, Props as ButtonProps } from "../src/Button";

import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Sizes = (args: ButtonProps) => (
  <>
    <Button size="tiny" {...args}>
      TINY
    </Button>
    <Button size="small" {...args}>
      SMALL
    </Button>
    <Button size="medium" {...args}>
      MEDIUM
    </Button>
    <Button size="large" {...args}>
      LARGE
    </Button>
    <Button size="giant" {...args}>
      GIANT
    </Button>
  </>
);

export const Status = (args: ButtonProps) => (
  <>
    <Button {...args} status="primary">
      PRIMARY
    </Button>
    <Button {...args} status="success">
      SUCCESS
    </Button>
    <Button {...args} status="info">
      INFO
    </Button>
    <Button {...args} status="warning">
      WARNING
    </Button>
    <Button {...args} status="danger">
      DANGER
    </Button>
    <Button {...args} status="basic">
      BASIC
    </Button>
  </>
);

export const Outline = (args: ButtonProps) => (
  <>
    <Button {...args} status="primary" appearance="outline">
      PRIMARY
    </Button>
    <Button {...args} status="success" appearance="outline">
      SUCCESS
    </Button>
    <Button {...args} status="info" appearance="outline">
      INFO
    </Button>
    <Button {...args} status="warning" appearance="outline">
      WARNING
    </Button>
    <Button {...args} status="danger" appearance="outline">
      DANGER
    </Button>
    <Button {...args} status="basic" appearance="outline">
      BASIC
    </Button>
  </>
);

export const Ghost = (args: ButtonProps) => (
  <>
    <Button {...args} status="primary" appearance="ghost">
      PRIMARY
    </Button>
    <Button {...args} status="success" appearance="ghost">
      SUCCESS
    </Button>
    <Button {...args} status="info" appearance="ghost">
      INFO
    </Button>
    <Button {...args} status="warning" appearance="ghost">
      WARNING
    </Button>
    <Button {...args} status="danger" appearance="ghost">
      DANGER
    </Button>
    <Button {...args} status="basic" appearance="ghost">
      BASIC
    </Button>
  </>
);

export const Disabled = (args: ButtonProps) => (
  <>
    <h1>Filled</h1>
    <Button {...args} status="primary" disabled>
      PRIMARY
    </Button>
    <Button {...args} status="success" disabled>
      SUCCESS
    </Button>
    <Button {...args} status="info" disabled>
      INFO
    </Button>
    <Button {...args} status="warning" disabled>
      WARNING
    </Button>
    <Button {...args} status="danger" disabled>
      DANGER
    </Button>
    <Button {...args} status="basic" disabled>
      BASIC
    </Button>

    <h1>Outline</h1>
    <Button {...args} status="primary" appearance="outline" disabled>
      PRIMARY
    </Button>
    <Button {...args} status="success" appearance="outline" disabled>
      SUCCESS
    </Button>
    <Button {...args} status="info" appearance="outline" disabled>
      INFO
    </Button>
    <Button {...args} status="warning" appearance="outline" disabled>
      WARNING
    </Button>
    <Button {...args} status="danger" appearance="outline" disabled>
      DANGER
    </Button>
    <Button {...args} status="basic" appearance="outline" disabled>
      BASIC
    </Button>

    <h1>Ghost</h1>
    <Button {...args} status="primary" appearance="ghost" disabled>
      PRIMARY
    </Button>
    <Button {...args} status="success" appearance="ghost" disabled>
      SUCCESS
    </Button>
    <Button {...args} status="info" appearance="ghost" disabled>
      INFO
    </Button>
    <Button {...args} status="warning" appearance="ghost" disabled>
      WARNING
    </Button>
    <Button {...args} status="danger" appearance="ghost" disabled>
      DANGER
    </Button>
    <Button {...args} status="basic" appearance="ghost" disabled>
      BASIC
    </Button>
  </>
);

export const Text = (args: ButtonProps) => (
  <Button {...args}>Hello Button</Button>
);

export const Emoji = (args: ButtonProps) => (
  <Button {...args}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
