// Much easier to implement fluent interfaces with polymorphic this
// Since the class uses this type, we can extend it and new calass can then provide a fluent interface that includes the base methods as well

namespace PolymorphicThis {
  interface Person {
    name?: string;
    surname?: string;
    age?: number;
  }

  class PersonBuilder<T extends Person> {
    protected _details: T;

    public constructor() {
      this._details = {} as T;
    }

    public currentValue(): T {
      return this._details;
    }

    public withName(name: string): this {
      this._details.name = name;
      return this;
    }

    public withSurname(surname: string): this {
      this._details.surname = surname;
      return this;
    }

    public withAge(age: number): this {
      this._details.age = age;
      return this;
    }
  } // Person Builder

  interface Employee extends Person {
    email: string
    department: string;
  }

  class EmployeeBuilder extends PersonBuilder<Employee> {
    public withEmail(email: string) {
      this._details.email = email;
      return this;
    }

    public withDepartment(department: string) {
      this._details.department = department;
      return this;
    }
  } // Employee Builder

  let value1 = new PersonBuilder()
    .withName("name")
    .withSurname("surname")
    .withAge(28)
    .currentValue();
  console.log(value1);

  let value2 = new EmployeeBuilder()
    .withName("name2")
    .withEmail("name2.surname2@example.com")
    .withDepartment("engineering")
    .currentValue()
  console.log(value2)
}
