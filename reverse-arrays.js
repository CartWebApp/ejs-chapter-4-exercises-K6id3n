function reverseArray(arr) {
  while(i = 0, arr.length,  i <= length,  i++) {
    arr.pop();
    let movedElement = arr.pop();
    arr.unshift(movedElement);
  }
}

function reverseArrayInPlace(arr) {
  // Add code.
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]