function fun(x) {
    if (x > 0) {
        fun(x - 1);
        fun(x - 2);
        console.log(x);
    }
}
fun(5)
