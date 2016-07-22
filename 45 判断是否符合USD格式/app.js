function isUSD(str) {
    var reg = /^\$([1-9]\d{0,2})(,\d{3})*(\.\d{2})?$/;
    return reg.test(str);
}
