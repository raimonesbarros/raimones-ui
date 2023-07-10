import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@raimones-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testanto elemento</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: 'Box with <article> tag',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Box uses `<div>` tag by default and can be changed with the `as` property.',
      },
    },
  },
}
