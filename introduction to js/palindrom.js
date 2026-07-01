function palindrom(num){
    if(typeof num !=='number'){
        return "num variable must be Number"
    }

    var reverse=0;
    var quotient=num;

    while(quotient>0){
        var remainder=quotient%10;
        reverse=(reverse*10)+remainder;
        quotient = parseInt(quotient / 10);
    }
    if (num === reverse) {
        console.log("Palindrome number is:", i);
    }
}
palindrom(121)
palindrom(1212)