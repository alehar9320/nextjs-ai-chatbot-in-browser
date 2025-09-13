import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip } from '@/components/ui/tooltip';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
