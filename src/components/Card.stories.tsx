import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description for the card component that showcases content.',
    imageUrl: 'https://source.unsplash.com/random/300x200/?nature',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card Without Image',
    description: 'This card does not include an image, only text content.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    description: 'This is an outlined variant of the card component.',
    variant: 'outlined',
    imageUrl: 'https://source.unsplash.com/random/300x200/?city',
  },
};