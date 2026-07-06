function fun(x, y, z) {
    if (x > 0) {

        y = y - 5;
        fun(x - 1, y, z)
        console.log(x, y, z);
        fun(x - 2, y, z)
        z = z + 10;
        fun(x - 2, y, z)
    }
}
fun(4,50,90)