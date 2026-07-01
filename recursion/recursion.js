//Type of recursion

// Linear Recursion Without Backtracing

function count(i) {
    if (i === 0) {
        return
    }
    console.log(i);
    i--;
    count(i)
}
// count(10)

function isEven(n) {
    if (n > 30) {
        return
    }
    if (n % 2 === 0) {
        console.log(n);
    }

    isEven(n + 1)
}
// isEven(1)

function table(num, i) {
    if (i > 10) { 
        return
    }
    console.log(num, "x", i, "=", (num * i));
    table(num, i + 1);  
}

// table(5, 1);

function isPrime(x, i = 1, count = 0) {
    if (i > x) {
  
        return count === 2 ? "Its prime number" : "Not a prime";
    }
    
    if (x % i === 0) {
        return isPrime(x, i + 1, count + 1);
    }
    
    return isPrime(x, i + 1, count);
}
console.log(isPrime(5))