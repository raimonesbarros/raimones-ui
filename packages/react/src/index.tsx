import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$rai500',
  padding: '$2 $4',
  color: '$white',
  fontFamily: '$code',
  fontWeight: '$bold',
})

export function App() {
  return <Button>Voltar</Button>
}
