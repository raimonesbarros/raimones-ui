import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@raimones-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Text with <strong> tag',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Text uses `<p>` tag by default and can be changed with the `as` property.',
      },
    },
  },
}
