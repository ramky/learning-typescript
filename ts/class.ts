class Character{
  lastname: string
  fullname: string
  constructor(firstname: string, lastname: string) {
    this.lastname = lastname
    this.fullname = `${firstname} ${lastname}`
  }

  greet(name?: string) {
    if (name) {
      return `Hi ${name}, name is ${this.lastname}, ${this.fullname}`
    }
    else {
      return `Hi, my name is ${this.fullname}`
    }
  }
}

let bond = new Character('James', 'Bond')
let msg1 = bond.greet()
console.log(msg1)

let msg2 = bond.greet('Ram')
console.log(msg2)
