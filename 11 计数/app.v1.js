function count(arr, item) {
    if (Array.prototype.filter) {
        return arr.filter(function(val) {
            if (val === item) return true;
        }).length;
    } else {
        var count = 0;
        for (var i = 0, j = arr.length; i < j; i++) {
            if (item === arr[i])
                count++;
        }
        return count;
    }
}
