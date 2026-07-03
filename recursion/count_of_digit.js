


function count_of_digits(n){
    if(n<10){
        return 1
    }
    return 1+count_of_digits(n/10)
}

console.log(count_of_digits(56789));
