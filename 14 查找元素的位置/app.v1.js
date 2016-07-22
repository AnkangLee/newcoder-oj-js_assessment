function findAllOccurrences(arr, target) {
    var result = [];

    index = arr.indexOf(target);
    while (index != -1) {
        result.push(index);
        index = arr.indexOf(target, index + 1);
    }
    return result;
}
