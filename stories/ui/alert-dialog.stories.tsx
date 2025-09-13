import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Dialog open state' },
  },
  args: {
    open: false,
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any, { parameters }: any) => (
  <AlertDialog open={args.open}>
    <AlertDialogTrigger asChild>
      <button
        type="button"
        style={{
          padding: '8px 16px',
          background: '#e0e7ff',
          borderRadius: 6,
        }}
      >
        Open Dialog
      </button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{parameters.title}</AlertDialogTitle>
        <AlertDialogDescription>
          {parameters.description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{parameters.cancelText}</AlertDialogCancel>
        <AlertDialogAction>{parameters.confirmText}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const Closed: Story = {
  args: {
    open: false,
  },
  parameters: {
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmText: 'Yes, delete account',
    cancelText: 'Cancel',
  },
  render: Template,
};

export const Open: Story = {
  args: {
    open: true,
  },
  parameters: {
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    confirmText: 'Yes, delete account',
    cancelText: 'Cancel',
  },
  render: Template,
};

export const CustomText: Story = {
  args: {
    open: true,
  },
  parameters: {
    title: 'Custom Title',
    description: 'Custom description for the dialog.',
    confirmText: 'Confirm',
    cancelText: 'Go Back',
  },
  render: Template,
};
