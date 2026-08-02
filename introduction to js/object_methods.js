var x={
    "a":100,
    "b":200,
    "c":300,
    "d":400,
}

var y={};

var keys=Object.keys(x);
var values=Object.values(x);

for(var i=0; i<keys.length; i++){

    y[values[i]]=keys[i]

}

console.log(y);

