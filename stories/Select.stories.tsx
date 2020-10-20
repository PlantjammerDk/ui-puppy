import React from "react";
import { MultiValueContainer } from "react-select/src/components/MultiValue";
import { borderRadius } from "react-select/src/theme";
import { Select, SelectComponents } from "../src";

export default {
  title: "Select",
  component: Select,
  excludeStories: /.*Data$/,
};

export const optionsData = [
  { label: "test 1", value: "test 1" },
  { label: "test 2", value: "test 2" },
  { label: "test 3", value: "test 3" },
  { label: "test 4", value: "test 4" },
  { label: "test 5", value: "test 5" },
  { label: "test 6", value: "test 6" },
];

export const Sizes = () => (
  <>
    <Select options={optionsData} size="small" />
    <Select options={optionsData} size="medium" />
    <Select options={optionsData} size="large" />
  </>
);

export const Status = () => (
  <>
    <Select
      options={optionsData}
      size="medium"
      status="basic"
      caption="This is a status message..."
    />
    <Select
      options={optionsData}
      size="medium"
      status="primary"
      caption="This is a status message..."
    />
    <Select
      options={optionsData}
      size="medium"
      status="success"
      caption="This is a status message..."
    />
    <Select
      options={optionsData}
      size="medium"
      status="info"
      caption="This is a status message..."
    />
    <Select
      options={optionsData}
      size="medium"
      status="warning"
      caption="This is a status message..."
    />
    <Select
      options={optionsData}
      size="medium"
      status="danger"
      caption="This is a status message..."
    />
  </>
);

const Option = (props) => {
  return (
    <div className="border border-red-500">
      <SelectComponents.Option {...props} />
    </div>
  );
};

export const CustomOption = () => (
  <>
    <Select
      options={optionsData}
      placeholder="Hello"
      removeBorder
      size="medium"
      components={{ Option }}
    />
  </>
);

export const MultiOption = () => (
  <>
    <Select options={optionsData} size="medium" isMulti/>
  </>
);

const multiStyles = {
  multiValue: (provided, state) => {
    const backgroundColor = 'white';
    const border = '1px solid #3E8A7A';
    const borderRadius = '15px';
    const alignItems = 'center';
    const paddingLeft = '0.5em';
    return { ...provided, backgroundColor, border, borderRadius, alignItems, paddingLeft }
  },
  multiValueRemove: () => {
    const cursor = 'pointer';
    const marginRight = 4;
    const color = '#3E8A7A';
    const height = 30;
    const width = 20;
    return { cursor, marginRight, color, 'svg': {
      height, width
    }, }
  }
}

export const MultiOptionCustom = () => (
  <>
    <Select options={optionsData} size="medium" isMulti styles={multiStyles}/>
  </>
);


