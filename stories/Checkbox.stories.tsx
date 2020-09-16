import React from "react";
import { Checkbox, LocalCheckboxProps } from "../src/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Default = (args: LocalCheckboxProps) => (
  <>
    <Checkbox {...args} label="Checkbox" />
    <Checkbox {...args} label="Checked" checked />
  </>
);
