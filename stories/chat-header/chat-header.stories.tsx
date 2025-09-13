import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ChatHeader } from '@/components/chat-header';

const meta = {
  title: 'Core/ChatHeader',
  component: ChatHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chatId: 'chat-123',
    selectedModelId: 'gpt-4',
    selectedVisibilityType: 'private',
    isReadonly: false,
    session: {
      user: {
        id: '123456',
        name: 'John Doe',
        email: 'john.doe@example.com',
        image: 'https://example.com/john-doe.jpg',
        type: 'guest', // can be 'guest' or 'regular'
      },
      expires: '2025-10-10T14:00:00.000Z',
    },
  },
};
