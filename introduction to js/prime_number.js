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