// Conceptually, a bubble sort involves comparing two indexes side-by-side. 
// If the value of the index on the right is smaller, then the indexes should be swapped. 
// This swapping continues over and over across the array, multiple times if needed,
//  until every element has been shifted into place.

const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            // compare current element to next
            if (arr[i] > arr[i + 1]) {
                // swap using a third temp variable
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                // flag as not sorted to run loop again
                sorted = false;
            }
        }
    }

    return arr;
};

console.log(
    bubbleSort(numbers)
);