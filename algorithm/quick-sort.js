// quick sort is faster than bubble sort.

// Conceptually, a quick sort works by picking a pivot point from the array of numbers 
// to be sorted, then creating two new arrays and pushing elements into
//  one or the other based on if they are greater or less than the pivot's value. 
//  You then repeat this same process on the two smaller arrays, and 
//  again on the even smaller arrays created, until you're left with several tiny arrays
//   that can then be merged back together in the correct order.

const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

const quickSort = (arr) => {
    // use first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];

    // start at index 1 to ignore pivot
    for (let i = 1; i < arr.length; i++) {
        // push into different arrays based on value compared to pivot
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    // merge arrays and pivot together
    return left.concat(pivot, right);
};

console.log(
    quickSort(numbers)
);