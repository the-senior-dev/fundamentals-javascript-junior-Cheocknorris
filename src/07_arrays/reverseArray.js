/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
    const reversedArray = [];
    
    for (let i = (arr.length - 1); i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

module.exports = reverseArray;