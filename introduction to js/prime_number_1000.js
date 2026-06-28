
// Write a program to print 2 to 1000 every numbers

for (var i = 2; i <= 1000; i++) {

    let count = 0;

    for (var j = 1; j <= i; j++) {
        if (i % j == 0) {
            count = count + 1;
        }
    }
    if (count == 2) {
        console.log("This number is prime", i);
    }
}