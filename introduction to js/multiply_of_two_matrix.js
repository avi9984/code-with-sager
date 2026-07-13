var x = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]

var y = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]



var z = []



for (var i = 0; i < x.length; i++) {

    z.push([])

    for (var j = 0; j < x[i].length; j++) {

        z[i].push(0)

        for (var k = 0; k < x[i].length; k++) {

            z[i][j] += x[i][k] * y[k][j]

        }

    }

}



console.log(z);