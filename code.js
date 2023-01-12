function isPythagorean(side1, side2, side3) {
    

    pow1 = side1 * side1;
    pow2 = side2 ** 2;
    pow3 = Math.pow(side3, 2);

    return pow1 == (pow2 + pow3) || pow2 == (pow1 + pow3) || pow3 == (pow1 + pow2);

}