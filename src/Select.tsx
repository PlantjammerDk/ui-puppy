import React from "react";
import ReactSelect, { Props as SelectProps, Styles } from "react-select";
const config = require("../tailwind.config");

type Props = SelectProps & {
  removeBorder?: boolean;
  status?:
    | "basic"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "control";
  size?: "small" | "medium" | "large";
  label?: string;
  caption?: string;
};

export const Select = (props: Props) => {
  const {
    removeBorder = false,
    status = "basic",
    size = "medium",
    label,
    caption,
  } = props;
  const colors = config.theme.extend.colors;

  const getBorderColor = (): string => {
    switch (status) {
      case "basic":
        return colors["select-border"];
      case "primary":
        return colors["primary-500"];
      case "success":
        return colors["success-500"];
      case "info":
        return colors["info-500"];
      case "warning":
        return colors["warning-500"];
      case "danger":
        return colors["danger-500"];
      default:
        return colors["select-border"];
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

  const customStyles: Styles = {
    control: (provided) => ({
      borderWidth: removeBorder ? "0" : "1px",
      borderStyle: removeBorder ? "none" : "solid",
      borderColor: getBorderColor(),
      display: "flex",
      borderRadius: "4px",
      backgroundColor: removeBorder
        ? "transparent"
        : colors["select-background"],
      ":hover": {
        ...provided[":hover"],
        backgroundColor: colors["select-background-hover"],
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: `${getSize()} 1rem`,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled
        ? colors["select-text-disabled"]
        : colors["select-text-disabled"],
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: "0",
    }),
    option: (provided, state) => ({
      ...provided,
      color: colors["select-option-text"],
      backgroundColor: state.isDisabled
        ? null
        : state.isSelected
        ? colors["select-option-text-selected"]
        : state.isFocused
        ? colors["select-option-hover"]
        : null,
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
      <div className="text-sm font-semibold text-gray-600">{label}</div>
      <ReactSelect styles={customStyles} {...props} />
      <div className="text-sm text-gray-600">{caption}</div>
    </>
  );
};
