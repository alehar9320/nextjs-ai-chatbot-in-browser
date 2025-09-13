import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <div style={{ padding: 16 }}>Sidebar Content</div>
      </Sidebar>
    </SidebarProvider>
  ),
  args: {},
};
