import React from "react";
import { Input, Props } from "../src/Input";

export default {
  title: "Input",
  component: Input,
};

export const Sizes = (args: Props) => (
  <>
    <Input {...args} placeholder="Small" fieldSize="small" />
    <Input {...args} placeholder="Medium" fieldSize="medium" />
    <Input {...args} placeholder="Large" fieldSize="large" />
  </>
);

export const Label = (args: Props) => (
  <>
    <Input {...args} placeholder="Small" fieldSize="small" label="Password" />
    <Input {...args} placeholder="Medium" fieldSize="medium" label="Password" />
    <Input {...args} placeholder="Large" fieldSize="large" label="Password" />
  </>
);

export const Caption = (args: Props) => (
  <>
    <Input
      {...args}
      placeholder="Small"
      fieldSize="small"
      label="Password"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Medium"
      fieldSize="medium"
      label="Password"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Large"
      fieldSize="large"
      label="Password"
      caption="Should contain at least 8 symbols"
    />
  </>
);

export const Status = (args: Props) => (
  <>
    <Input
      {...args}
      placeholder="Primary"
      status="primary"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Success"
      status="success"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Info"
      status="info"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Warning"
      status="warning"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Danger"
      status="danger"
      caption="Should contain at least 8 symbols"
    />
    <Input
      {...args}
      placeholder="Basic"
      status="basic"
      caption="Should contain at least 8 symbols"
    />
  </>
);
