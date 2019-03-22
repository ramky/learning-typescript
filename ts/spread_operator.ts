let originalArr1 = [ 1, 2, 3];
let originalArr2 = [ 4, 5, 6];
let copyArr = [...originalArr1];
let mergedArr = [...originalArr1, ...originalArr2];
let newObjArr = [...originalArr1, 7, 8];

console.log(mergedArr);
console.log(newObjArr);
