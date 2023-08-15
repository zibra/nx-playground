import { action, makeObservable, observable } from 'mobx'

class CounterStore {
  counter = 1

  constructor() {
    makeObservable(this, { counter: observable, increase: action.bound })
  }

  increase() {
    console.log('CounterStore increase')
    console.log(this)
    this.counter += 1

    console.log('counter', this.counter)
  }
}

export const counterStore = new CounterStore()
