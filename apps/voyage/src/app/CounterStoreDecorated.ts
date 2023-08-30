import { action, makeObservable, observable } from 'mobx'

abstract class BaseCounter {
  @observable counter = 1

  protected constructor() {
    makeObservable(this)
  }
}

class CounterStoreDecorated extends BaseCounter {
  constructor() {
    super()
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
