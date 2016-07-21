function indexOf(arr, item) {
    if (Array.prototype.findIndex) {
        return arr.findIndex(function(val) {
            return Object.is(item, val);
        });

    } else {
        for (var i = 0, j = arr.length; i < j; i++) {
            if (Object.is(item,arr[i]) {
                return i;
            }
        }
    }
}
