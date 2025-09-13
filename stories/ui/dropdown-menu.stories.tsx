import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DropdownMenu } from '@/components/ui/dropdown-menu';

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
