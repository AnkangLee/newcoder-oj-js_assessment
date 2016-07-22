function useArguments() {
    var temp = Array.prototype.slice.apply(arguments);
    return temp.reduce(function(prev, next) {
        return prev + next;
    });
}
