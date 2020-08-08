import React from "react";
import { Select } from "../src/Select";

export default {
  title: "Select",
  component: Select,
};

export const Sizes = () => (
  <>
    <Select
      options={[
        { label: "test 1", value: "test 1" },
        { label: "test 2", value: "test 2" },
        { label: "test 3", value: "test 3" },
        { label: "test 4", value: "test 4" },
        { label: "test 5", value: "test 5" },
        { label: "test 6", value: "test 6" },
      ]}
      size="small"
    />
    <Select
      options={[
        { label: "test 1", value: "test 1" },
        { label: "test 2", value: "test 2" },
        { label: "test 3", value: "test 3" },
        { label: "test 4", value: "test 4" },
        { label: "test 5", value: "test 5" },
        { label: "test 6", value: "test 6" },
      ]}
      size="medium"
    />
    <Select
      options={[
        { label: "test 1", value: "test 1" },
        { label: "test 2", value: "test 2" },
        { label: "test 3", value: "test 3" },
        { label: "test 4", value: "test 4" },
        { label: "test 5", value: "test 5" },
        { label: "test 6", value: "test 6" },
      ]}
      size="large"
    />
  </>
);
