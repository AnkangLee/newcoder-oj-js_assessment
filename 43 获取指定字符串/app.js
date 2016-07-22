function captureThreeNumbers(str) {
    var result = str.match(/\d{3}/);
    if (result)
        return result[0];
    else return false;
}
