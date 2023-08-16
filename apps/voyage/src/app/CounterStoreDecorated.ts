import {action, makeObservable, observable} from 'mobx'

class CounterStoreDecorated {
  @observable counter = 1

  constructor() {
    makeObservable(this)
  }

  @action.bound increase() {
    console.log('CounterStore increase')
    console.log(this)
    this.counter += 1

    console.log('counter', this.counter)
  }
}

export const counterStoreDecorated = new CounterStoreDecorated()
