import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Skeleton } from '@/components/ui/skeleton';

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'object',
      description: 'CSS style object for Skeleton',
    },
  },
  args: {
    style: {
      width: 120,
      height: 24,
      borderRadius: 6,
      display: 'block',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: {
      width: 120,
      height: 24,
      borderRadius: 6,
      display: 'block',
    },
  },
};

export const Circle: Story = {
  args: {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      display: 'block',
    },
  },
};

export const Text: Story = {
  args: {
    style: {
      width: 180,
      height: 16,
      borderRadius: 4,
      display: 'block',
    },
  },
};

export const LargeBlock: Story = {
  args: {
    style: {
      width: 320,
      height: 80,
      borderRadius: 12,
      display: 'block',
    },
  },
};
