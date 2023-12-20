// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4

// 2 => 2 * 2 = 4 -> Output-Pos 1

// 3 => 3 * 3 = 9 -> Output-Pos 2

// 4 => 4 * 4 = 16 -> Output-Pos 3

// 5 => 5 * 5 = 25 -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

// let input = [];

function sortByProduct(input){
    let output = [];
    
    for (let i=0; i<input.length; i++){
        output.push(input[i]*(i+1))
    }
    return output.sort(function(a, b){return a-b})
    //A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
    // function(a, b){return a-b}
    // When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

    // Example:

    // The sort function will sort 40 as a value lower than 100.

    // When comparing 40 and 100, sort() calls the function(40,100).

    // The function calculates 40-100, and returns -60 (a negative value).
}

console.log(sortByProduct([23,2,3,4,5]))