import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from '@/components/ui/textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: { placeholder: 'Type here...' },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Type here...' },
};
