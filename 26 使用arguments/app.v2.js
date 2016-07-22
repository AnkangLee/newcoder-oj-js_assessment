function useArguments() {
    return [].reduce.call(arguments, function(prev, next) {
        return prev + next;
    });
}
