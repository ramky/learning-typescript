let obj: any = { a: 1, b: 2, c: 3 }
for(let key in obj) {
  if(obj.hasOwnProperty(key)) {
    console.log(key + " = " + obj[key]);
  }
}

let iterable = [10, 20, 30]
for(let value of iterable){
  console.log(value);
}
