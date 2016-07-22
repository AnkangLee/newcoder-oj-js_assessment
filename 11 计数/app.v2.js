function count(arr, item) {
    return arr.reduce(function(prev, next) {
        prev[next] = prev[next] + 1 || 1; // 如果对象有next对象，计数器加1，否则记为1
        return prev;
    }, {})[item];
}
