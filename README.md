# newcoder-oj-js_assessment
(牛客网题目)[http://www.nowcoder.com/ta/js-assessment]

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

### 17 正确的函数定义

#### v1
- parseInt(string, [radix]),radix表示要解析的基数，如果不指定radix,字符串 string 以"0"开头, 基数是8（八进制）或者10（十进制），那么具体是哪个基数由实现环境决定。ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，**永远都要明确给出radix参数的值**

#### v2
- ES6版本，为了逐步减少全局性方法,使得语言逐步模块化，ES6 将全局方法 parseInt()和 parseFloat(),移植到 Number 对象上面,行为完全保持不变。

### 18 完全相等

#### v1
- ==（相等） 和 ===（恒等），使用== 进行判断之前，如果两个值类型不匹配，就会进行类型转换后再进行判断；使用=== 类型不一样即不相等

#### v2
- ES6新api（**不能说ES6版，两个功能不一样，不能替代v1版本**），Object.is() 用来比较两个值是否严格相等。它与严格比较运算符(===)的行为基本一致，不同之处只有两个：一是 +0 不等于 -0，二是 NaN 等于自身。

### 19 计时器

#### v1
- 设置定时器时返回一个引用，用来取消定时器

#### v2
- ES6版本，ES6 允许直接写入变量和函数,作为对象的属性和方法。

### 20 流程控制

- 基础的if else 使用

### 21 函数传参

#### v1
- 使用apply调用函数，并传入参数数组

#### v2
- ES6版本，扩展运算符(spread)是三个点(...)。它好比 rest 参数的逆运算,将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用。

### 22 函数的上下文

- 可以使用apply，call，bind来绑定函数运行时的上下文

### 23 返回函数

#### v1
- 简单明了，符合题目要求，但是函数不能接受多个参数

#### v2
- 使用ES6 api Array.from(arguments)构造数组，然后用', '连接

### 24 使用闭包

#### v1
- 使用立即执行函数实现闭包

#### v2
- 使用闭包的原因是当迭代停止时，i为最终迭代停止的值，在函数被调用时，i依旧为最终迭代停止的值。这个可以使用ES6 的let来定义i，不使用闭包也可以达到目的

### 25 二次封装函数

- 修改apply,call,bind的参数

### 26 使用arguments

#### v1
- 使用Array.prototype.slice.call(arguments)构造数组(这里也可以使用ES6 api Array.from)，然后使用reduce求和

#### v2
- 直接使用[].reduce.call(arguments),注意[].reduce和Array.prototype.reduce恒等

### 27 柯里化

#### v1
- arguments.callee返回当前函数本身

#### v2
- 严格模式下不允许使用arguments.callee,这里使用函数表达式

### 28 或运算

- 逻辑运算 ||

### 29 且运算

- 逻辑运算 &&
