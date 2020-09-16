import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./Checkbox.css";

export type LocalCheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  caption?: string;
  status?: "basic" | "primary" | "success" | "info" | "warning" | "danger";
};

export const Checkbox = (props: LocalCheckboxProps) => {
  const { label } = props;
  return (
    <label {...props.className} className="container text-xs font-semibold">
      {label}
      <input {...props} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
