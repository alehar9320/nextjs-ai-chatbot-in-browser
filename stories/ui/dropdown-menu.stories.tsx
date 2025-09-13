import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const menuItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
  { id: 'separator', separator: true },
  { id: 'logout', label: 'Logout' },
];

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the menu is open by default',
    },
  },
  args: {
    defaultOpen: true,
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <DropdownMenu defaultOpen={args.defaultOpen}>
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        style={{
          padding: '8px 16px',
          background: '#e0e7ff',
          borderRadius: 6,
          fontWeight: 500,
        }}
      >
        Open Menu
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {menuItems.map((item) =>
        item.separator ? (
          <DropdownMenuSeparator key={item.id} />
        ) : (
          <DropdownMenuItem key={item.id}>{item.label}</DropdownMenuItem>
        ),
      )}
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default: Story = {
  render: Template,
};
