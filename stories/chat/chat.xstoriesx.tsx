import { Chat } from '@/components/chat';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Core/Chat',
  component: Chat,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: { control: 'text' },
    initialMessages: { control: 'text' },
    initialChatModel: { control: 'text' },
    initialVisibilityType: { control: 'text' },
    isReadonly: { control: 'text' },
    session: { control: 'object' },
    autoResume: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'banana',
    initialMessages: [],
    initialChatModel: 'gpt-4o',
    initialVisibilityType: 'private',
    isReadonly: false,
    session: {
      expires: '',
      user: { name: 'Storybook User', email: '  ', image: '' },
    },
    autoResume: false,
  },
};
