import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Separator } from '@/components/ui/separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A visual separator for grouping content. Supports horizontal and vertical orientation, custom classes, and decorative mode.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
      table: { category: 'Appearance' },
    },
    decorative: {
      control: 'boolean',
      description: 'Whether separator is decorative',
      table: { category: 'Accessibility' },
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
      table: { category: 'Styling' },
    },
    style: {
      control: 'object',
      description: 'Inline style object',
      table: { category: 'Styling' },
    },
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
    style: { margin: '16px 0', width: 300 },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

function SeparatorStory(args: any) {
  const { orientation, style, className, ...rest } = args;
  if (orientation === 'vertical') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: style?.height ?? 60,
          ...style,
        }}
      >
        <span style={{ paddingRight: 8 }}>Left</span>
        <Separator orientation="vertical" {...rest} className={className} />
        <span style={{ paddingLeft: 8 }}>Right</span>
      </div>
    );
  }
  return (
    <div style={{ width: style?.width ?? 300, ...style }}>
      <span style={{ marginBottom: 8, display: 'block' }}>Above</span>
      <Separator orientation="horizontal" {...rest} className={className} />
      <span style={{ marginTop: 8, display: 'block' }}>Below</span>
    </div>
  );
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    style: { margin: '16px 0', width: 300 },
  },
  render: SeparatorStory,
  parameters: {
    docs: {
      description: {
        story: 'A horizontal separator for dividing content sections.',
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    style: { height: 60, margin: '0 16px' },
  },
  render: SeparatorStory,
  parameters: {
    docs: {
      description: {
        story: 'A vertical separator for side-by-side content.',
      },
    },
  },
};

export const CustomClass: Story = {
  args: {
    className: 'bg-red-500',
    style: { margin: '16px 0', width: 300 },
  },
  render: SeparatorStory,
  parameters: {
    docs: {
      description: {
        story: 'Separator with a custom color using Tailwind class.',
      },
    },
  },
};

export const DecorativeFalse: Story = {
  args: {
    decorative: false,
    style: { margin: '16px 0', width: 300 },
  },
  render: SeparatorStory,
  parameters: {
    docs: {
      description: {
        story: 'Separator with decorative set to false for accessibility.',
      },
    },
  },
};
