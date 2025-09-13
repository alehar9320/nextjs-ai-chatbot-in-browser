import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/components/ui/input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: { placeholder: 'Type here...' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Type here...' },
};
