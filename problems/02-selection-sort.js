// Implement Selection Sort

// Implement swap without looking at bubble sort
swap = (arr, index1, index2) => {
  let tempFirst = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = tempFirst
  
}


selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let smallestIdx = i 

    for(let j = i + 1; j < arr.length; j++){
      if(arr[smallestIdx] > arr[j]){
        smallestIdx = j;
      }
    }
    swap(arr, i, smallestIdx);
  }
  return arr
}

// console.log(selectionSort([5,6,1,3,4,-1]));

module.exports = {
  selectionSort,
  swap
};
