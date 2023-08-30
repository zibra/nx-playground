import styled from 'styled-components'

import { SampleComponent } from '@core'
import { Counter } from './Counter'
import { Bar } from './FooBar'

const StyledApp = styled.div`
  // Your style here
`

const fooBar = new Bar()
fooBar.bar()
fooBar.foo()

export function App() {
  return (
    <StyledApp>
      <SampleComponent foo="test2" />
      <Counter />
    </StyledApp>
  )
}
