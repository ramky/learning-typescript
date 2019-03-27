interface Supplier {
  orderItems(): void
  getAddress(): void
}

interface Customer {
  sellItems(): void
  getAddress(): void
}

function isSupplier(person: Supplier | Customer): boolean {
  return (<Supplier> person).orderItems !== undefined
}

function handleItems(person: Supplier | Customer) {
  if(isSupplier(person)) {
    (<Supplier> person).orderItems()
  }
  else {
    (<Customer> person).sellItems()
  }
}
