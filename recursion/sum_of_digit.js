

function sum_of_digit(n){
    if(n===0) return 0

    return (n %10)+sum_of_digit(parseInt(n/10))
}

console.log(sum_of_digit(12345));
