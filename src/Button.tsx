import React from "react";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { EAppearance, ESize, EStatus } from "enums/style.enums";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode;
  accessoryLeft?: React.ReactElement;
  accessoryRight?: React.ReactElement;
  appearance?: EAppearance;
  status?: EStatus;
  size?: ESize;
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

const textColorGhost = {
  basic: "text-black",
  primary: "text-primary-700",
  success: "text-success-700",
  info: "text-info-700",
  warning: "text-warning-700",
  danger: "text-danger-700",
};

const sizes = {
  tiny: {
    padding: "px-1 py-1",
    fontSize: "text-xs font-semibold tracking-wide",
  },
  small: {
    padding: "px-1 py-2",
    fontSize: "text-xs font-semibold tracking-wide",
  },
  medium: {
    padding: "px-2 py-3",
    fontSize: "text-sm font-semibold tracking-wide",
  },
  large: {
    padding: "px-5 py-4",
    fontSize: "text-base font-bold tracking-wide",
  },
  giant: { padding: "px-6 py-5", fontSize: "text-lg font-bold tracking-wide" },
};

export const Button = (props: ButtonProps) => {
  const {
    status = "primary",
    appearance = "filled",
    accessoryLeft,
    accessoryRight,
  } = props;
  let padding = props.size
    ? sizes[props.size].padding
    : sizes["medium"].padding;
  let fontSize = props.size
    ? sizes[props.size].fontSize
    : sizes["medium"].fontSize;

  let background = "";
  let textColor = "";

  if (props.disabled) {
    switch (appearance) {
      case "ghost":
        background = "bg-transparent";
        textColor = "text-basic-500";
        break;
      default:
        // filled and outline
        background = "bg-basic-300 border border-basic-500";
        textColor = "text-basic-500";
    }
  } else {
    switch (appearance) {
      case "outline":
        background = statusOutline[status];
        textColor = textColorOutline[status];
        break;
      case "ghost":
        background = "bg-transparent hover:bg-gray-200";
        textColor = textColorGhost[status];
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
      className={`flex items-center ${padding} ${textColor} rounded ${background} ${props.className}`}
    >
      {accessoryLeft}
      <span className={`mx-3 ${fontSize}`}>{props.children}</span>
      {accessoryRight}
    </button>
  );
};
