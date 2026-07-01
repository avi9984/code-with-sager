// Write a program to check number is prime or not

var count = 0;
var i = 1;

var num = 5;

while (i <= num) {
    if (num % i == 0) {
        count = count + 1;
    }
    i = i + 1
}

if (count === 2) {
    console.log("Its prime number");
} else {
    console.log("Not a prime");
}


function isPrime(x) {
    var count = 0;
    var i = 1;
    while (i <= x) {
        if (x % i == 0) {
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


function fibbonaci(x) {
    var a = 0;
    var b = 1;

    // console.log(a,);
    // console.log(b);

    var i = 0;
    while (i < x) {
        var c = a + b;
        console.log(c);
        a = b;
        b = c;
        i = i + 1
    }

}
fibbonaci(8)

