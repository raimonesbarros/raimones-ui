import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextinputContainer } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextinputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextinputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
