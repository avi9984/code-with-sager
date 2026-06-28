// write a program to print the 1 to 10000 numbers of palindrom.

for (var i = 1000; i <= 10000; i++) {

    var reverse = 0;
    var quotient = i;

    while (quotient > 0) {
        var remainder = quotient % 10;
        reverse = reverse * 10 + remainder;
        quotient = parseInt(quotient / 10);
    }

    if (i === reverse) {
        console.log("Palindrome number is:", i);
    }
}