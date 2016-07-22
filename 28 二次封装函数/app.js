function partialUsingArguments(fn) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
        var innerArgs = outerArgs.concat(Array.prototype.slice.call(arguments));
        return fn.apply(this, innerArgs);
    };
}
