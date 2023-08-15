import styled from 'styled-components'

import { SampleComponent } from '@core'
import { Counter } from './Counter'

const StyledApp = styled.div`
  // Your style here
`

export function App() {
  return (
    <StyledApp>
      <SampleComponent foo="test2" />
      <Counter />
    </StyledApp>
  )
}

export default App
