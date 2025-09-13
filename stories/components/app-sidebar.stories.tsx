import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AppSidebar } from '../../components/app-sidebar';
import { SidebarProvider } from '../../components/ui/sidebar';
import type { User } from 'next-auth';

const meta: Meta<typeof AppSidebar> = {
  title: 'Components/AppSidebar',
  component: AppSidebar,
};
export default meta;

type Story = StoryObj<typeof AppSidebar>;

const mockUser = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
} as User;

export const Default: Story = {
  render: (args) => (
    <SidebarProvider>
      <AppSidebar {...args} />
    </SidebarProvider>
  ),
  args: {
    user: mockUser,
  },
};

export const NoUser: Story = {
  render: (args) => (
    <SidebarProvider>
      <AppSidebar {...args} />
    </SidebarProvider>
  ),
  args: {
    user: undefined,
  },
};

export const Collapsed: Story = {
  render: (args) => (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar {...args} />
    </SidebarProvider>
  ),
  args: {
    user: mockUser,
  },
};
