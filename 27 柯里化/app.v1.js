function curryIt(fn) {
    var n = fn.length;
    var args = [];
    return function(val) {
        args.push(val);
        if (args.length === n) {
            return fn.apply(this, args);
        } else {
            return arguments.callee;
        }
    }
}
