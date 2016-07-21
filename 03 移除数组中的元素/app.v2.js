function remove(arr, item) {
	return arr.filter(function(val){
        return val !== item;
    })
}
