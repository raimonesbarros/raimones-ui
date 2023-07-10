import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@raimones-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading with <h1> tag',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading uses `<h2>` tag by default and can be changed with the `as` property.',
      },
    },
  },
}
