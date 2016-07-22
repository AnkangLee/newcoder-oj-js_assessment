# (newcoder-oj-js_assessment)[http://www.nowcoder.com/ta/js-assessment]

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

### 04 移除数组中的元素 **要求返回原数组**

#### v1
- 正向遍历，splice会修改数组长度，需要对指针特殊处理

#### v2
- 逆向遍历，不需要对指针特殊处理

### 05 添加元素 **要求返回新数组**

#### v1
- 使用slice函数返回一个新数组，然后push(item) **注意: Array.prototype.slice是一级深拷贝**

#### v2
- 使用concat,添加item组成新数组

### 06 删除数组最后一个元素 **要求返回新数组**

- 使用slice截取新数组 **注意: Array.prototype.slice是一级深拷贝

### 07 添加元素 **要求返回新数组**

#### v1
- 使用slice函数返回一个新数组，然后unshift(item) **注意: Array.prototype.slice是一级深拷贝**

#### v2
- 使用concat,[item]添加原数组

### 08 删除数组第一个元素 **要求返回新数组**

- 同06

### 09 数组合并 **要求返回新数组**

- 使用concat合并数据

### 10 添加元素 **要求返回新数组**

- 使用slice复制数组，使用splice在指定位置添加元素

### 11 计数

#### v1
- 使用filter新建一个数组，返回数组的长度，空间复杂度O(N)

#### v2
- 使用reduce新建一个对象，hash查询效率比使用indexOf(**IE8,9存在兼容性问题**)查询效率高很多

### 12 查找重复元素

#### v1
- 使用sort排序后，过滤出相同元素的通后一个(return arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]),排序时间复杂度O(NLogN)

#### v2
- 使用reduce新建一个对象，遍历过滤出value !== 1的属性

### 13 求二次方 **要求返回新数组**

- 使用map处理数据

### 14 查找元素位置

#### v1
- 使用indexOf遍历数组，但是indexOf在IE8，9下存在兼容性问题

#### v2
- 使用map，更优雅的表达

### 15 避免全局变量

#### v1
- ES5版本，使用var声明变量，避免全局变量

#### v2
- ES6版本，使用let代替var

### 16 正确的函数定义

#### v1
- ES5版本，由于ES5不存在块级作用域，词法解析阶段会提升函数声明，使用函数表达式来解决

#### v2
- ES6版本，支持块级作用域，函数本身的作用域,在其所在的块级作用域之内
