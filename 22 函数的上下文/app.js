function speak(fn, obj) {
	return fn.bind(obj)(obj);// return fn.apply(obj,obj); return fn.call(obj, obj);
}
