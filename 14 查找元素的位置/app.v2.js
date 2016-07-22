function findAllOccurrences(arr, target) {
    var result = [];

    arr.map(function(element, index) {
        if (element == target) {
            result.push(index);
        }
    });

    return result;
}
