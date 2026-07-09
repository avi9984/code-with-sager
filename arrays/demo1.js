var x = [10, 20, 30, 40, 50, true, false, "apple", "mango", "grapes", undefined, null];

var index=1;
var value="orange";

x.push(value)

for(var i=x.length-1; i>index; i--){
    var temp=x[i]
    x[i]=x[i-1]
    x[i-1]=temp
}

console.log(x);
