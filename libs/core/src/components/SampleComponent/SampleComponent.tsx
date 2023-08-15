import * as S from './SampleComponent.styles'

export interface SampleComponentProps {
  foo?: string
}

export const SampleComponent = ({ foo }: SampleComponentProps) => {
  return (
    <S.Root>
      <h1>Sample core component! Foo: {foo}</h1>
    </S.Root>
  )
}
