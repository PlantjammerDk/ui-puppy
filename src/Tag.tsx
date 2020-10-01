import React from "react";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { TStatus } from "./types/style.types";

export type TagProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode;
  accessoryLeft?: React.ReactElement;
  accessoryRight?: React.ReactElement;
  appearance?: "filled" | "outline";
  status?: TStatus;
  selected?: boolean;
};

const statusFilled = {
  basic: "bg-basic-500 hover:opacity-75",
  primary: "bg-primary-500 hover:opacity-75",
  success: "bg-success-500 hover:opacity-75",
  info: "bg-info-500 hover:opacity-75",
  warning: "bg-warning-500 hover:opacity-75",
  danger: "bg-danger-500 hover:opacity-75",
};

const statusOutline = {
  basic:
    "bg-basic-transparent-200 bg-transparent border border-basic-500 hover:bg-basic-transparent-300",
  primary:
    "bg-primary-transparent-200 bg-transparent border border-primary-500 hover:bg-primary-transparent-300",
  success:
    "bg-success-transparent-200 bg-transparent border border-success-500 hover:bg-success-transparent-300",
  info:
    "bg-info-transparent-200 bg-transparent border border-info-500 hover:bg-info-transparent-300",
  warning:
    "bg-warning-transparent-200 bg-transparent border border-warning-500 hover:bg-warning-transparent-300",
  danger:
    "bg-danger-transparent-200 bg-transparent border border-danger-500 hover:bg-danger-transparent-300",
};

const textColorFilled = {
  basic: "text-black",
  primary: "text-white",
  success: "text-white",
  info: "text-white",
  warning: "text-white",
  danger: "text-white",
};

const textColorOutline = {
  basic: "text-black",
  primary: "text-primary-700",
  success: "text-success-700",
  info: "text-info-700",
  warning: "text-warning-700",
  danger: "text-danger-700",
};

export const Tag = (props: TagProps) => {
  const {
    status = "primary",
    appearance = "filled",
    accessoryLeft,
    accessoryRight,
  } = props;

  let background = "";
  let textColor = "";

  if (props.disabled) {
    // filled and outline
    background = "bg-basic-300 border border-basic-500";
    textColor = "text-basic-500";
  } else {
    switch (appearance) {
      case "outline":
        background = statusOutline[status];
        textColor = textColorOutline[status];
        break;
      default:
        // filled
        background = statusFilled[status];
        textColor = textColorFilled[status];
    }
  }
  return (
    <button
      type={props.type ? props.type : "button"}
      {...props}
      className={`flex items-center ${textColor} rounded-full ${background} ${props.className} px-1 py-1 `}
    >
      {accessoryLeft}
      <span className={`mx-3 text-sm`}>{props.children}</span>
      {accessoryRight}
    </button>
  );
};
