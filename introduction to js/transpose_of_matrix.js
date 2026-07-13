// var x = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];


var x = [10, 20, 30, 45, 3, 21, 65, 76, 19, 20, 12]

function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
console.log(linearSearch(x, 90));
