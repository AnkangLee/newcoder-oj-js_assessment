function convertToBinary(num) {
    return ('00000000' + num.toString(2)).slice(-8);
}
