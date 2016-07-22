function duplicates(arr) {
    return arr.sort().filter(function(e, i) {
        return arr[i] === arr[i - 1] &&
            arr[i] !== arr[i + 1];
    });
}
