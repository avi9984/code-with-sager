//fabonaci series 

var a=0;
var b=1;

console.log(a,);
console.log(b);

var i=0;
while(i<10){
    var c=a+b;
    console.log(c);
    a=b;
    b=c;
    i=i+1
}
