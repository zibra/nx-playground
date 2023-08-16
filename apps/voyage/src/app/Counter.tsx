import { observer } from 'mobx-react'
import { counterStoreDecorated } from './CounterStoreDecorated'

export const Counter = observer(() => {
  const { counter, increase } = counterStoreDecorated

  return (
    <div>
      {counter}
      <button onClick={increase}>+1</button>
    </div>
  )
})
