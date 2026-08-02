

function stringConsonent(str) {
    let vowelCount = 0;
    let consonetCount = 0;

    for (let i of str) {

        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            vowelCount++
        } else {
            consonetCount++
        }
    }
    console.log("vowel :", vowelCount);
    console.log("consonet :", consonetCount);
}

stringConsonent("avinash is a good boy");

// let x=[10,30,40,50,60];
// let [a,b,...c]=x
// console.log(a,b,);
