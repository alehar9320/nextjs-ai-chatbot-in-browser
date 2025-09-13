import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as Icons from '@/components/icons';

const meta = {
  title: 'Core/Icons',
  // Display all icons in a grid for easy preview
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', // Use auto-fill for horizontal fill
        gap: '24px',
        alignItems: 'center',
        justifyItems: 'center', // Center icons horizontally
        width: '100%',
        maxWidth: '900px', // Optional: limit max width for better horizontal layout
        margin: '0 auto', // Center grid in Storybook canvas
      }}
    >
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <Icon size={32} />
          <div style={{ fontSize: 12, marginTop: 8 }}>{name}</div>
        </div>
      ))}
    </div>
  ),
};
