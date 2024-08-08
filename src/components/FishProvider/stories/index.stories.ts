import type { Meta } from "@storybook/react";
import { FishProvider } from "min-fish-ui";
import Default from "./Default.stories";
import DefaultSource from "./Default.stories?raw";
import { Nested } from "./Nested.stories";
import NestedSource from "./Nested.stories?raw";

const meta = {
  title: "组件/FishProvider",
  component: FishProvider,
} satisfies Meta<typeof FishProvider>;

export default meta;

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};
(Nested as any).parameters = {
  docs: {
    description: {
      story: "FishProvider 可以嵌套使用",
    },
    source: {
      code: NestedSource,
    },
  },
};

export { Default, Nested };
