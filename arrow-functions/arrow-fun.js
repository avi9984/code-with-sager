

var isPrime = (n) => {
    var count = 0;
    var i = 1;
    while (i <= n) {
        if (n % i == 0) {
            count = count + 1;
        }
        i = i + 1
    }

    if (count === 2) {
        return "Its prime number";
    } else {
        return "Not a prime";
    }
}

// console.log(isPrime(5));

var x = [10, 20, 30, true, false, "apple", "mango", "grapes", undefined, null]

for (var i = x.length - 1; i >= 0; i--) {
    console.log(i, x[i]);
}