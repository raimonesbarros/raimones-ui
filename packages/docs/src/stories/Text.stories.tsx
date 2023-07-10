import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@raimones-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  docs: 'asgasdf',
  tags: ['autodocs'],
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Text with strong tag',
    as: 'strong',
  },
}
