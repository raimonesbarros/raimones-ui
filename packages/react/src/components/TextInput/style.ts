import { styled } from '../../styles'

export const TextinputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },

  '&:has(input:focus)': {
    borderColor: '$rai300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$roboto',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$roboto',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
