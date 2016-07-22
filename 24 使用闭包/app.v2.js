function makeClosures(arr, fn) {
    let result = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        result.push(function(){return fn(arr[i])});
    }
    return result;
}
