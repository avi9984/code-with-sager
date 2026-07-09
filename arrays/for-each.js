var x = [10, 20, 30, 40, 50, 60, 70, 80];

x.forEach((a, b, c) => {
    // console.log(a, b, c);
});


(((a, b) => {
    console.log(a + b);
}) (1000, 2000))


var temp=x.map((element,index,array)=>{
    return element % 3==0
})
console.log(temp);

var temp2=x.filter((element)=>{
    return element %3==0
})
console.log(temp2);
