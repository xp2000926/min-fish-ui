import type { Meta } from "@storybook/react";
import { FishProvider } from "min-fish-ui";
import Default from "./Default.stories";
import DefaultSource from "./Default.stories?raw";

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

export { Default };
