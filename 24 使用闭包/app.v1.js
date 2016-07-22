function makeClosures(arr, fn) {
    var result = [];
    for (var i = 0, j = arr.length; i < j; i++) {
        result.push(function(i) {
            return function() {
                return fn(arr[i])
            }
        }(i));
    }
    return result;
}
