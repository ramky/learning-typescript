namespace ThisAndArrowFun {
  class Person {
    private _name: string;

    constructor(name: string) {
      this._name = name;
    }

    public greet() {
      console.log(`Hi! My name is ${this._name}`)
    }

    public greetDelay(time: number) {
      // this points to anonymous function hence prefer using arrow function
      // setTimeout(function () { console.log(`Hi! My name is ${this._name}`), time})

      // okay
      setTimeout(() => console.log(`Hi! My name is ${this._name}`), time)
    }
  }

  let person = new Person("Remo")
  person.greetDelay(1000)
}

