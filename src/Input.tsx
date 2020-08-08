import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  fieldSize?: "small" | "medium" | "large";
  label?: string;
  caption?: string;
  status?: "basic" | "primary" | "success" | "info" | "warning" | "danger";
};

const sizes = {
  small: "px-4 py-1",
  medium: "px-4 py-2",
  large: "px-4 py-3",
};

export const Input = (props: Props) => {
  const { fieldSize = "medium", label, caption, status = "basic" } = props;

  let borderColor = "";
  let captionColor = "";

  switch (status) {
    case "primary":
      borderColor = "border-primary-500";
      captionColor = "text-primary-600";
      break;
    case "success":
      borderColor = "border-success-500";
      captionColor = "text-success-600";
      break;
    case "info":
      borderColor = "border-info-500";
      captionColor = "text-info-600";
      break;
    case "warning":
      borderColor = "border-warning-500";
      captionColor = "text-warning-600";
      break;
    case "danger":
      borderColor = "border-danger-500";
      captionColor = "text-danger-600";
      break;
    default:
      borderColor = "border-gray-300";
      captionColor = "text-gray-600";
  }

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <input
        id={label ? label : ""}
        className={`${sizes[fieldSize]} flex bg-gray-100 border ${borderColor} rounded hover:bg-gray-200`}
        {...props}
      />
      {caption && <span className={`text-sm ${captionColor}`}>{caption}</span>}
    </div>
  );
};
