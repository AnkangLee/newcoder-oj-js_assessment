function valueAtBit(num, bit) {
	var temp = num.toString(2);
	return temp.charAt(temp.length - bit);
}
