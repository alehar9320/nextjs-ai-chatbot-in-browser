import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Greeting } from "@/components/greeting";

const meta = {
  title: "Core/Greeting",
  component: Greeting,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof Greeting>;

export const Default: Story = {
  args: {},
};
