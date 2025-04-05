import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational alert message.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Your changes have been successfully saved.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'This action cannot be undone. Please proceed with caution.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'There was a problem processing your request. Please try again.',
  },
};

export const Closable: Story = {
  args: {
    type: 'info',
    title: 'Closable Alert',
    message: 'You can close this alert by clicking the X button.',
    onClose: () => console.log('Alert closed'),
  },
};