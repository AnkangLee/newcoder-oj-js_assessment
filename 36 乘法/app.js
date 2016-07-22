function multiply(a, b) {
    var temp = (a + b).toString();
    var len = temp.length - 1 - temp.indexOf('.');
    return parseFloat(a * b).toFixed(len);

}
