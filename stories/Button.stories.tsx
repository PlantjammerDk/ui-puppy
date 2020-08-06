import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { Button } from "../src/Button";

export default {
  title: "Button",
  component: Button,
};

export const Sizes = () => (
  <>
    <Button onClick={action("clicked")} size="tiny">
      TINY
    </Button>
    <Button onClick={action("clicked")} size="small">
      SMALL
    </Button>
    <Button onClick={action("clicked")} size="medium">
      MEDIUM
    </Button>
    <Button onClick={action("clicked")} size="large">
      LARGE
    </Button>
    <Button onClick={action("clicked")} size="giant">
      GIANT
    </Button>
  </>
);

export const Status = () => (
  <>
    <Button onClick={action("clicked")} status="primary">
      PRIMARY
    </Button>
    <Button onClick={action("clicked")} status="success">
      SUCCESS
    </Button>
    <Button onClick={action("clicked")} status="info">
      INFO
    </Button>
    <Button onClick={action("clicked")} status="warning">
      WARNING
    </Button>
    <Button onClick={action("clicked")} status="danger">
      DANGER
    </Button>
    <Button onClick={action("clicked")} status="basic">
      BASIC
    </Button>
  </>
);

export const Outline = () => (
  <>
    <Button onClick={action("clicked")} status="primary" appearance="outline">
      PRIMARY
    </Button>
    <Button onClick={action("clicked")} status="success" appearance="outline">
      SUCCESS
    </Button>
    <Button onClick={action("clicked")} status="info" appearance="outline">
      INFO
    </Button>
    <Button onClick={action("clicked")} status="warning" appearance="outline">
      WARNING
    </Button>
    <Button onClick={action("clicked")} status="danger" appearance="outline">
      DANGER
    </Button>
    <Button onClick={action("clicked")} status="basic" appearance="outline">
      BASIC
    </Button>
  </>
);

export const Ghost = () => (
  <>
    <Button onClick={action("clicked")} status="primary" appearance="ghost">
      PRIMARY
    </Button>
    <Button onClick={action("clicked")} status="success" appearance="ghost">
      SUCCESS
    </Button>
    <Button onClick={action("clicked")} status="info" appearance="ghost">
      INFO
    </Button>
    <Button onClick={action("clicked")} status="warning" appearance="ghost">
      WARNING
    </Button>
    <Button onClick={action("clicked")} status="danger" appearance="ghost">
      DANGER
    </Button>
    <Button onClick={action("clicked")} status="basic" appearance="ghost">
      BASIC
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <h1>Filled</h1>
    <Button onClick={action("clicked")} status="primary" disabled>
      PRIMARY
    </Button>
    <Button onClick={action("clicked")} status="success" disabled>
      SUCCESS
    </Button>
    <Button onClick={action("clicked")} status="info" disabled>
      INFO
    </Button>
    <Button onClick={action("clicked")} status="warning" disabled>
      WARNING
    </Button>
    <Button onClick={action("clicked")} status="danger" disabled>
      DANGER
    </Button>
    <Button onClick={action("clicked")} status="basic" disabled>
      BASIC
    </Button>

    <h1>Outline</h1>
    <Button
      onClick={action("clicked")}
      status="primary"
      appearance="outline"
      disabled
    >
      PRIMARY
    </Button>
    <Button
      onClick={action("clicked")}
      status="success"
      appearance="outline"
      disabled
    >
      SUCCESS
    </Button>
    <Button
      onClick={action("clicked")}
      status="info"
      appearance="outline"
      disabled
    >
      INFO
    </Button>
    <Button
      onClick={action("clicked")}
      status="warning"
      appearance="outline"
      disabled
    >
      WARNING
    </Button>
    <Button
      onClick={action("clicked")}
      status="danger"
      appearance="outline"
      disabled
    >
      DANGER
    </Button>
    <Button
      onClick={action("clicked")}
      status="basic"
      appearance="outline"
      disabled
    >
      BASIC
    </Button>

    <h1>Ghost</h1>
    <Button
      onClick={action("clicked")}
      status="primary"
      appearance="ghost"
      disabled
    >
      PRIMARY
    </Button>
    <Button
      onClick={action("clicked")}
      status="success"
      appearance="ghost"
      disabled
    >
      SUCCESS
    </Button>
    <Button
      onClick={action("clicked")}
      status="info"
      appearance="ghost"
      disabled
    >
      INFO
    </Button>
    <Button
      onClick={action("clicked")}
      status="warning"
      appearance="ghost"
      disabled
    >
      WARNING
    </Button>
    <Button
      onClick={action("clicked")}
      status="danger"
      appearance="ghost"
      disabled
    >
      DANGER
    </Button>
    <Button
      onClick={action("clicked")}
      status="basic"
      appearance="ghost"
      disabled
    >
      BASIC
    </Button>
  </>
);

// export const AccessoryLeft = () => (
//   <>
//     <Button
//       onClick={action("clicked")}
//       size="tiny"
//       accessoryLeft={<Icon name="star" type="eva" size={10} color="#FFFFFF" />}
//     >
//       TINY
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="small"
//       accessoryLeft={<Icon name="star" type="eva" size={12} color="#FFFFFF" />}
//     >
//       SMALL
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="medium"
//       accessoryLeft={<Icon name="star" type="eva" size={16} color="#FFFFFF" />}
//     >
//       MEDIUM
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="large"
//       accessoryLeft={<Icon name="star" type="eva" size={20} color="#FFFFFF" />}
//     >
//       LARGE
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="giant"
//       accessoryLeft={<Icon name="star" type="eva" size={24} color="#FFFFFF" />}
//     >
//       GIANT
//     </Button>
//   </>
// );

// export const AccessoryRight = () => (
//   <>
//     <Button
//       onClick={action("clicked")}
//       size="tiny"
//       accessoryRight={<Icon name="star" type="eva" size={10} color="#FFFFFF" />}
//     >
//       TINY
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="small"
//       accessoryRight={<Icon name="star" type="eva" size={12} color="#FFFFFF" />}
//     >
//       SMALL
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="medium"
//       accessoryRight={<Icon name="star" type="eva" size={16} color="#FFFFFF" />}
//     >
//       MEDIUM
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="large"
//       accessoryRight={<Icon name="star" type="eva" size={20} color="#FFFFFF" />}
//     >
//       LARGE
//     </Button>
//     <Button
//       onClick={action("clicked")}
//       size="giant"
//       accessoryRight={<Icon name="star" type="eva" size={24} color="#FFFFFF" />}
//     >
//       GIANT
//     </Button>
//   </>
// );

export const Knobs = () => (
  <Button
    onClick={action("clicked")}
    size={select(
      "Size",
      ["tiny", "small", "medium", "large", "giant"],
      "medium"
    )}
    status={select(
      "Status",
      ["basic", "primary", "success", "info", "warning", "danger"],
      "primary"
    )}
  >
    {text("Label", "Button")}
  </Button>
);

Knobs.story = {
  decorators: [withKnobs],
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
