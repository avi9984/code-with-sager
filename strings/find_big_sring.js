

let y = ["Potato", "Tomato", "Okhra", "Cauliflower", "Brinjle", "Bottle Gourd", "Bitter Gourd", "Moringa", "Brocoli", "Cucumber"];
let bigString = "";

for (let i of y) {
    if (bigString.length < i.length) {
        bigString = i
    }
}

console.log(bigString);
