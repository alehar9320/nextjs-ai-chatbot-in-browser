import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Tooltip content' },
    delayDuration: {
      control: { type: 'number', min: 0, max: 2000 },
      description: 'Delay before showing tooltip (ms)',
    },
  },
  args: {
    children: 'Tooltip text',
    delayDuration: 0,
  },
  decorators: [
    (Story, context) => {
      // Read decorator-only values from parameters
      const {
        side = 'top',
        align = 'center',
        forceOpen = false,
      } = context.parameters || {};
      const { delayDuration, children } = context.args;
      return (
        <TooltipProvider delayDuration={delayDuration}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 120,
            }}
          >
            <Tooltip open={forceOpen ? true : undefined}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  style={{
                    padding: '8px 16px',
                    fontSize: 16,
                    background:
                      'linear-gradient(90deg, #e0e7ff 0%, #a5b4fc 100%)',
                    color: '#222',
                    border: 'none',
                    borderRadius: 6,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                  }}
                >
                  Hover me
                </button>
              </TooltipTrigger>
              <TooltipContent side={side} align={align}>
                {children}
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Top: Story = {
  args: {
    children: 'Tooltip above',
  },
  parameters: {
    side: 'top',
  },
};

export const Bottom: Story = {
  args: {
    children: 'Tooltip below',
  },
  parameters: {
    side: 'bottom',
  },
};

export const Left: Story = {
  args: {
    children: 'Tooltip left',
  },
  parameters: {
    side: 'left',
  },
};

export const Right: Story = {
  args: {
    children: 'Tooltip right',
  },
  parameters: {
    side: 'right',
  },
};

export const WithDelay: Story = {
  args: {
    delayDuration: 1000,
    children: 'Tooltip with delay',
  },
};

export const AlwaysVisible: Story = {
  args: {
    children: 'Always visible tooltip',
  },
  parameters: {
    forceOpen: true,
  },
};
