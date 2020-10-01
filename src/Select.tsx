import { TSize, TStatus } from "./types/style.types";
import React from "react";
import ReactSelect, {
  Props as SelectProps,
  ValueType,
  Styles,
  components,
} from "react-select";

export const SelectComponents = components;
export type SelectValueType<V> = ValueType<V>;

const colors = {
  "select-background-hover": "#EDF1F7",
  "select-text": "#8F9BB3",
  "select-text-disabled": "rgba(143, 155, 179, 0.48)",
  "select-option-text": "#222B45",
  "select-option-selected": "#E6EAEF",
  "select-option-hover": "#E9EDFC",
  "select-option-background": "#FFFFFF",
};

export type LocalSelectProps = SelectProps & {
  removeBorder?: boolean;
  status?: TStatus;
  size?: TSize;
  label?: string;
  caption?: string;
};

export const Select = (props: LocalSelectProps) => {
  const {
    removeBorder = false,
    status = "basic",
    size = "medium",
    label,
    caption,
  } = props;

  const getBorderColor = (): string => {
    switch (status) {
      case "basic":
        return "border-gray-300";
      case "primary":
        return "border-primary-500";
      case "success":
        return "border-success-500";
      case "info":
        return "border-info-500";
      case "warning":
        return "border-warning-500";
      case "danger":
        return "border-danger-500";
      default:
        return "border-gray-300";
    }
  };

  const getSize = (): string => {
    switch (size) {
      case "small":
        return "0rem";
      case "medium":
        return "0.31rem";
      case "large":
        return "0.56rem";
      default:
        return "0.31rem";
    }
  };

  const getCaptionColor = (): string => {
    switch (status) {
      case "basic":
        return "text-basic-600";
      case "primary":
        return "text-primary-600";
      case "success":
        return "text-success-600";
      case "info":
        return "text-info-600";
      case "warning":
        return "text-warning-600";
      case "danger":
        return "text-danger-600";
      default:
        return "text-select-border";
    }
  };

  const customStyles: Styles = {
    control: (provided) => ({
      display: "flex",
      borderRadius: "4px",
      ":hover": {
        ...provided[":hover"],
        backgroundColor: colors["select-background-hover"],
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: `${getSize()} 1rem`,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#a0aec0",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "0",
    }),
    option: (provided, state) => ({
      ...provided,
      color: colors["select-option-text"],
      backgroundColor: state.isDisabled
        ? colors["select-option-background"]
        : state.isSelected
        ? colors["select-option-selected"]
        : state.isFocused
        ? colors["select-option-hover"]
        : colors["select-option-background"],
      ":active": {
        ...provided[":active"],
        backgroundColor:
          !state.isDisabled && (state.isSelected ? "grey" : "transparent"),
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isDisabled
        ? colors["select-text-disabled"]
        : colors["select-text"],
      marginRight: "10px",
      marginLeft: "auto",
    }),
  };

  return (
    <>
      <div className={`text-sm font-semibold text-gray-600 ${props.className}`}>
        {label}
      </div>
      <ReactSelect
        {...props}
        className={`rounded ${
          removeBorder ? "border-none bg-transparent" : `border ${getBorderColor()}`
        } hover:bg-gray-200`}
        styles={customStyles}
      />
      <div className={`text-sm ${getCaptionColor()}`}>{caption}</div>
    </>
  );
};
