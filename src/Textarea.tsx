import { TStatus } from "./types/style.types";
import React from "react";

export type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  caption?: string;
  label?: string;
  status?: TStatus;
  children?: string;
};

export const Textarea = (props: TextareaProps) => {
  const { caption, status = "basic", label, rows = 3 } = props;
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
    <div
      data-testid="wrapping-div"
      className={`flex flex-col ${props.className}`}
    >
      {label && (
        <label htmlFor={label} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <textarea
        id={label ? label : ""}
        style={{ resize: "none" }}
        rows={rows}
        {...props}
        className={`flex bg-gray-100 border ${borderColor} rounded hover:bg-gray-200 p-1`}
      >
        {props.children}
      </textarea>
      {caption && <span className={`text-sm ${captionColor}`}>{caption}</span>}
    </div>
  );
};
