var x = {
    apple: 100,
    banana: 1300,
    100: true,
    mango: 500,
    false: "pineapple",
    ram: function () {
        console.log(this);
        console.log(this.false);

    }
}

x.ram()