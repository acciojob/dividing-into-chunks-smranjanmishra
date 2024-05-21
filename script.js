const divide = (arr, n) => {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentSubarray.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(currentSubarray);
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Add the last subarray if it has elements
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

// Example usage
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = 5;
console.log(divide(arr, n)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

// Uncomment to use prompt and alert in a browser environment
// const n = parseInt(prompt("Enter n: "), 10);
// alert(JSON.stringify(divide(arr, n)));