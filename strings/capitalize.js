
function capitalize(str) {

    let newStr = str.split(' ');
    let arr = [];
    for (let i of newStr) {
        arr.push(i[0].toUpperCase() + i.slice(1));
    }
    let x = arr.join(" ");
    return x;
}

console.log(capitalize("coding wise"));