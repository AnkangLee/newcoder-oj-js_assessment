function indexOf(arr, item) {
    if (Array.prototype.indexOf) {
        return arr.indexOf(item);
    } else {
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    }
}
