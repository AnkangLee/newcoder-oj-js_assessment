function iterate(obj) {
    var result = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(prop + ": " + obj[prop]);
        }
    }
    return result;
}
