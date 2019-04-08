var foo = function() {
  console.log("foo")
}

function bar(cb: () => void) {
  console.log("bar");
  cb();
}
bar(foo);

// callbacks are declared inline, at the same point at which
// they are passed to higher old function
bar(() => console.log("foo"));
