import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Sheet } from '@/components/ui/sheet';

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <div style={{ padding: 24, minWidth: 300 }}>
        <h2 style={{ marginBottom: 12 }}>Sheet Content</h2>
        <p>
          This is a demo of the Sheet component. You can place any content here.
        </p>
      </div>
    ),
  },
};
