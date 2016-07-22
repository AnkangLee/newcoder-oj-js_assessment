function matchesPattern(str) {
    var reg = /^(\d{3}-){2}(\d{4})$/;
    return reg.test(str);
}
