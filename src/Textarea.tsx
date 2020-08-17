import React from "react";

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  caption?: string;
  label?: string;
  status?: "basic" | "primary" | "success" | "info" | "warning" | "danger";
  children?: string;
};

const Textarea = (props: Props) => {
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
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <textarea
        id={label ? label : ""}
        className={`flex bg-gray-100 border ${borderColor} rounded hover:bg-gray-200 p-1`}
        style={{ resize: "none" }}
        rows={rows}
      >
        {props.children}
      </textarea>
      {caption && <span className={`text-sm ${captionColor}`}>{caption}</span>}
    </div>
  );
};

export default Textarea;
