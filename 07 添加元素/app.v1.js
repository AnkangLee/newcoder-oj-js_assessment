function prepend(arr, item) {
     //将arr数组复制给a
     var result = arr.slice(0);
     //使用unshift方法向a开头添加item
     result.unshift(item);
     return result;
 }
