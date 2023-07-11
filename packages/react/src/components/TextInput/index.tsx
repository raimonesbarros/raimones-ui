import { ComponentProps } from 'react'
import { Input, Prefix, TextinputContainer } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextinputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextinputContainer>
  )
}
