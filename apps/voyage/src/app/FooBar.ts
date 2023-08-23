import {action, makeObservable} from "mobx";

export abstract class Foo {
  protected constructor() {
    console.log('Foo constructor')
    makeObservable(this)
  }

  @action.bound foo() {
    console.log('foo')
  }
}

export class Bar extends Foo {
  constructor() {
    super()
    console.log('Bar constructor')
    makeObservable(this)
  }

  @action.bound bar() {
    console.log('bar')
  }
}
