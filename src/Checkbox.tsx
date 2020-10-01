import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./Checkbox.css";

export type LocalCheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};

export const Checkbox = (props: LocalCheckboxProps) => {
  const { label } = props;
  return (
    <label
      {...props.className}
      className="text-xs font-semibold checkbox-container"
    >
      {label}
      <input {...props} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
