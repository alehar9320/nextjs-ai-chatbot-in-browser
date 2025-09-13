import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AlertDialog } from '@/components/ui/alert-dialog';

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
