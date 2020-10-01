import React from "react";
import { Tag, TagProps } from "../src/Tag";

import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Tag",
  component: Tag,
} as Meta;

export const Status = (args: TagProps) => (
  <div className="space-y-2">
    <Tag {...args} status="primary">
      Option
    </Tag>
    <Tag {...args} status="success">
      Option
    </Tag>
    <Tag {...args} status="info">
      Option
    </Tag>
    <Tag {...args} status="warning">
      Option
    </Tag>
    <Tag {...args} status="danger">
      Option
    </Tag>
    <Tag {...args} status="basic">
      Option
    </Tag>

    <Tag {...args} status="primary" selected>
      Option
    </Tag>
    <Tag {...args} status="success" selected>
      Option
    </Tag>
    <Tag {...args} status="info" selected>
      Option
    </Tag>
    <Tag {...args} status="warning" selected>
      Option
    </Tag>
    <Tag {...args} status="danger" selected>
      Option
    </Tag>
    <Tag {...args} status="basic" selected>
      Option
    </Tag>
  </div>
);

export const Outline = (args: TagProps) => (
  <div className="space-y-2">
    <Tag {...args} status="primary" appearance="outline">
      PRIMARY
    </Tag>
    <Tag {...args} status="success" appearance="outline">
      SUCCESS
    </Tag>
    <Tag {...args} status="info" appearance="outline">
      INFO
    </Tag>
    <Tag {...args} status="warning" appearance="outline">
      WARNING
    </Tag>
    <Tag {...args} status="danger" appearance="outline">
      DANGER
    </Tag>
    <Tag {...args} status="basic" appearance="outline">
      BASIC
    </Tag>
  </div>
);
