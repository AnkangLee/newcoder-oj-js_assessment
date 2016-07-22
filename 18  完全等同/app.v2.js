function identity(val1, val2) {
    return Object.is(val1, val2); // 注意：这里+0和-0不相等，NaN和NaN相等
}
