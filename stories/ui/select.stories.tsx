import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select } from '@/components/ui/select';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
