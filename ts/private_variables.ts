class Counter {
  private _i: number

  public constructor() {
    this._i = 0
  }

  public get(): number {
    return this._i
  }

  public set(i: number): void {
    this._i = i
  }

  public increment(): void {
    this._i++
  }
}

let counter = new Counter()
console.log("counter:  ", counter.get())
counter.set(2)
console.log("counter:  ", counter.get())
counter.increment()
console.log("counter:  ", counter.get())
// console.log(counter._i)
