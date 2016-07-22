function partial(fn, str1, str2) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
        var innerArgs = outerArgs.concat(Array.prototype.slice.call(arguments));
        console.log(innerArgs);
        return fn.apply(this, innerArgs);
    };
}
