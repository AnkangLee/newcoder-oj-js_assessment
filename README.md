ß# newcoder-oj-js_assessment

### 01 查找数组元素位置

#### v1
- 使用indexOf判断元素位置，但是无法判断NaN

#### v2
- 使用ES6 新增的api Array.findIndex Object.is 解决NaN问题

### 02 数组求和

#### v1
- 可以 **eval** 函数简化代码，但是不推荐使用eval函数

#### v2
- 使用数组的reduce函数，简化计算

### 03 移除数组中的元素

#### v1
- 使用 **lodash** 中的_.pull(array, [values]方法

#### v2
- 使用数组的filter函数

### 03 移除数组中的元素 **要求返回原数组**

#### v1
- 正向遍历，splice会修改数组长度，需要对指针特殊处理

#### v2
- 逆向遍历，不需要对指针特殊处理
