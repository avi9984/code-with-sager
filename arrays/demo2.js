var x = [10, 20, 30, 40, 50, true, false, "apple", "mango", "grapes", undefined, null];

function deleteValue(arr, value) {
    var index = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            index = i;
            break;
        }
    }


    if (index !== -1) {
        for (var i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    return arr;
}


deleteValue(x, "apple");
console.log(x);

deleteValue(x, 30);
console.log(x);

deleteValue(x, true);
console.log(x);