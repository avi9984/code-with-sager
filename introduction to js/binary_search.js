

function binary_search(arr, value) {
    var left = 0;
    var right = arr.length - 1;

    while (left <= right) {
        var mid = parseInt((left + right) / 2)

        if (arr[mid] === value) {
            return `Element found: ${mid}`
        } else if (arr[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return `Element Not found: ${-1}`
}

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binary_search(x, 11))

