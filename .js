function reverseArray(arr) {
  let length = arr.length
  while(i = 0, i <= length,  i++) {
    arr.pop();
    let movedElement = arr.pop();
    arr.unshift(movedElement);
  }
}

console.log(reverseArray(["A", "B", "C"]));