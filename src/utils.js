
/*
  Rendomize the array 073fe2e4d0732aaffef1250322dfecf9816acc3d
*/
function doShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/*
  Generator
*/
function * makeRandom(size) {
  const arr = doShuffle(Array(size).fill(0).map((e, i) => i))
  while(arr.length > 0) yield arr.shift()
}

