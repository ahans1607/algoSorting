// Implement Selection Sort

// Implement swap without looking at bubble sort
swap = (array, index1, index2) => {
  let tempFirst = array[index1]
  array[index1] = array[index2]
  array[index2] = tempFirst
  
}


selectionSort = (array) => {
  for(let i = 0; i < array.length; i++){
    let smallestIdx = i 

    for(let j = i + 1; j < array.length; j++){
      if(array[smallestIdx] > array[j]){
        smallestIdx = j;
      }
    }
    swap(array, i, smallestIdx);
  }
  return array
}

// console.log(selectionSort([5,6,1,3,4,-1]));

module.exports = {
  selectionSort,
  swap
};
