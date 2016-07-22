function duplicates(arr) {
    var temp = arr.reduce(function(prev, next) {
        prev[next] = prev[next] + 1 || 1;
        return prev;
    }, {});

    var result = [];
    for (var prop in temp) {
        if (temp.hasOwnProperty(prop)) {
            if (temp[prop] !== 1) {
                result.push(prop);
            }
        }
    }
    return result;
}
