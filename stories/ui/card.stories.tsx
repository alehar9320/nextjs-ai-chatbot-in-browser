import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';

const meta = {
  title: 'ui/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description for the card.</CardDescription>
      </CardHeader>
      <CardContent>This is a card</CardContent>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description for the card.</CardDescription>
      </CardHeader>
      <CardContent>Body content goes here</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
};
