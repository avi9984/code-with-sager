
function ram(a, b, c) {
    console.log("Hello World");

    console.log(this);

    console.log(a, b, c);
}

var x = {
    apple: 100,
    banana: 1300,
    100: true,
    mango: 500,
    false: "pineapple",
    ram: function () {
        // console.log(this);
        console.log(this.false);
    }
}

// ram.call(x, 100, 200, 300);
// ram.apply(x, [100, 200, 300]);
var temp = ram.bind(x, 100, 200, 300);
temp();