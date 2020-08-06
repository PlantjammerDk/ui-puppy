import React from "react";
import { action } from "@storybook/addon-actions";
import { Input } from "../src/Input";

export default {
  title: "Input",
  component: Input,
};

export const Sizes = () => (
  <>
    <Input placeholder="Small" fieldSize="small" />
    <Input placeholder="Medium" fieldSize="medium" />
    <Input placeholder="Large" fieldSize="large" />
  </>
);

export const Label = () => (
  <>
    <Input placeholder="Small" fieldSize="small" label="Password" />
    <Input placeholder="Medium" fieldSize="medium" label="Password" />
    <Input placeholder="Large" fieldSize="large" label="Password" />
  </>
);

export const Caption = () => (
  <>
    <Input
      placeholder="Small"
      fieldSize="small"
      label="Password"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Medium"
      fieldSize="medium"
      label="Password"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Large"
      fieldSize="large"
      label="Password"
      caption="Should contain at least 8 symbols"
    />
  </>
);

export const Status = () => (
  <>
    <Input
      placeholder="Primary"
      status="primary"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Success"
      status="success"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Info"
      status="info"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Warning"
      status="warning"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Danger"
      status="danger"
      caption="Should contain at least 8 symbols"
    />
    <Input
      placeholder="Basic"
      status="basic"
      caption="Should contain at least 8 symbols"
    />
  </>
);
