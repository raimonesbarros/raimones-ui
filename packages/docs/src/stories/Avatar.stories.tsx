import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@raimones-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/raimonesbarros.png',
    alt: '',
  },
  argTypes: {
    src: {
      control: {
        type: 'Text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
