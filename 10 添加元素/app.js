function insert(arr, item, index) {
	var result = arr.slice(0);
    result.splice(index, 0, item);
    return result;
}
