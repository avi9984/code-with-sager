let a = 100;
let b = 200;
let c = 300;
let d = 400;

if (a > b) {
    if (b >= c) {
        console.log("equal or grater than");
    } else {
        if (c == d) {
            console.log("yes its equal");
        } else {
            console.log("Not equal");
        }
    }
} else {
    if (c > d) {
        if (d < a) {
            console.log("Yes is can do ");
        } else {
            if (d > a && a < b) {
                console.log("And condition");
            }
        }
    }
}