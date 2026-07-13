var x = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
var y = [[110, 120, 130], [140, 150, 160], [170, 180, 190]];

var z = [];

for (var i = 0; i < x.length; i++) {
    z.push([])

    for (var j = 0; j < x[i].length; j++) {
        var sum = x[i][j] + y[i][j];

        z[i].push(sum)
    }
}

console.log(z)