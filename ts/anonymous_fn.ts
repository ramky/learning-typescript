let greet = (name?: string): string => {
  if(name){
    return "Hi " + name + "!";
  }
  else {
    return "Hi!";
  }
}

console.log(greet("Ram"));
console.log(greet());
