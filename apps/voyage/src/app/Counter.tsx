import { observer } from 'mobx-react'
import { counterStore } from './CounterStore'
import { counterStoreDecorated } from './CounterStoreDecorated'

export const Counter = observer(() => {
  const { counter, increase } = counterStore

  return (
    <div>
      {counter}
      <button onClick={increase}>+1</button>
    </div>
  )
})
