// Implement Bubble Sort

swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

bubbleSort = (array) => {
  let swapped = false;

  while(swapped) {
    swapped = true;

    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i + 1]) {
        swap(array, i, i+1)
        swapped = false
      }
    }
  }
  return array
}

module.exports = {
  bubbleSort,
  swap
};
