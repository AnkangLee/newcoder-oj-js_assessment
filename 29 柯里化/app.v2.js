function curryIt(fn) {
    var n = fn.length;
    var args = [];
    var curry = function(val) {
        args.push(val);
        if (args.length === n) {
            return fn.apply(this, args);
        } else {
            return curry;
        }
    };

    return curry;
}
