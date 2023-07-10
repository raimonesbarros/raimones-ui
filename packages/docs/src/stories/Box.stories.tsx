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
