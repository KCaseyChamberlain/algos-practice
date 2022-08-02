// You can think of a binary search similar to how you'd look up a word in the dictionary.
//  If you wanted to find the word "linear," you wouldn't start at the A section and 
//  turn each page one by one. Instead, you'd open the book somewhere in the middle, 
// then ignore one half or the other and continue narrowing down groups of pages until you
//  landed in the L section.

// Of course, this only works if the data is sorted in numerical order. 

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// const binarySearch = (arr, num, left, right) => {

// - set initial left and right values on first call

// - num is number we are trying to find with
// our binary search function that will print the index of num.
console.log(
  binarySearch(data, 54, 0, data.length - 1)
);

