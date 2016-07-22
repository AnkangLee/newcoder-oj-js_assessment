function valueAtBit(num, bit) {
	return num.toString(2).split('').reverse()[bit - 1];
}
