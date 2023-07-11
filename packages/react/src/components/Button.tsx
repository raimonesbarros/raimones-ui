import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$mediun',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  ButtonSizing: 'border-Button',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    backgroundColor: '$gray200',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$rai500',

        '&:not(:disabled):hover': {
          backgroundColor: '$rai300',
        },
      },
      secondary: {
        color: '$rai300',
        border: '2px solid $rai500',

        '&:not(:disabled):hover': {
          backgroundColor: '$rai500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          bordeColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as: ElementType
}

Button.displayName = 'Button'
