import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@raimones-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],

  args: {
    children: 'Voltar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
