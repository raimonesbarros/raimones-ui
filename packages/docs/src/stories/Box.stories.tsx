import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@raimones-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <span>Testanto elemento</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
