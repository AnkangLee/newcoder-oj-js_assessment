function functions(flag) {
    if (flag) {
        function getValue() {
            return 'a';
        }
    } else {
        function getValue() {
            return 'b';
        }
    }

    return getValue();
}
