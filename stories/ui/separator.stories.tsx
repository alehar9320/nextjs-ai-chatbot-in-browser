import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Separator } from '@/components/ui/separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
