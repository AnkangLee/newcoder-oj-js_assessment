function functions(flag) {
    var getValue;
    if (flag) {
        getValue = function() {
            return 'a';
        }
    } else {
        getValue = function() {
            return 'b';
        }
    }

    return getValue();
}
