---
title: Rust基本语法
description: 'Rust核心的基本语法'
pubDate: 2024-10-27
heroColor: ''
abbrlink: it/Rust基本语法
cover: "/rust1.png"
coverAlt: "Rust1"
tags: 
    - '编程基础'
    - 'Rust'
    - 'IT'
category: 'Rust'
---
# Rust 基础语法

# 说明

复制滴别想，抄作业滴不要，若需要，滴开启超级复制插件

变量，基本类型，函数，注释和控制流，这些几乎是每种编程语言都具有的编程概念。

这些基础概念将存在于每个 Rust 程序中，及早学习它们将使你以最快的速度学习 Rust 的使用。

# 变量
首先必须说明，Rust 是强类型语言，但具有自动判断变量类型的能力。这很容易让人与弱类型语言产生混淆。

默认情况下，Rust 中的变量是不可变的，除非使用 mut 关键字声明为可变变量。
~~~rust
let a = 123;       // 不可变变量
let mut b = 10;  // 可变变量
~~~
如果要声明变量，需要使用 let 关键字。例如：
```rust
let a = 123;
```
只学习过 JavaScript 的开发者对这句话很敏感，只学习过 C 语言的开发者对这句话很不理解。

在这句声明语句之后，以下三行代码都是被禁止的：
```rust
a = "abc";
a = 4.56; 
a = 456;
```
第一行的错误在于当声明 a 是 123 以后，a 就被确定为整型数字，不能把字符串类型的值赋给它。

第二行的错误在于自动转换数字精度有损失，Rust 语言不允许精度有损失的自动数据类型转换。

第三行的错误在于 a 不是个可变变量。

前两种错误很容易理解，但第三个是什么意思？难道 a 不是个变量吗？

这就牵扯到了 Rust 语言为了高并发安全而做的设计：在语言层面尽量少的让变量的值可以改变。所以 a 的值不可变。但这不意味着 a 不是"变量"（英文中的 variable），官方文档称 a 这种变量为"不可变变量"。

如果我们编写的程序的一部分在假设值永远不会改变的情况下运行，而我们代码的另一部分在改变该值，那么代码的第一部分可能就不会按照设计的意图去运转。由于这种原因造成的错误很难在事后找到。这是 Rust 语言设计这种机制的原因。

当然，使变量变得"可变"（mutable）只需一个 mut 关键字。
```rust
let mut a = 123;
a = 456;
```

这个程序是正确的。

常量与不可变变量的区别
既然不可变变量是不可变的，那不就是常量吗？为什么叫变量？

变量和常量还是有区别的。在 Rust 中，以下程序是合法的：
```rust
let a = 123;   // 可以编译，但可能有警告，因为该变量没有被使用
let a = 456;
```
但是如果 a 是常量就不合法：
```rust
const a: i32 = 123;
let a = 456;

```
变量的值可以"重新绑定"，但在"重新绑定"以前不能私自被改变，这样可以确保在每一次"绑定"之后的区域里编译器可以充分的推理程序逻辑。 虽然 Rust 有自动判断类型的功能，但有些情况下声明类型更加方便：
```rust
let a: u64 = 114;
```

这里声明了 a 为无符号 64 位整型变量，如果没有声明类型，a 将自动被判断为有符号 32 位整型变量，这对于 a 的取值范围有很大的影响。

# 数据类型

Rust 是静态类型语言，在变量声明时可以显式指定类型，但通常可以依赖类型推断。

基本类型: i32 (32位有符号整数), u32 (32位无符号整数), f64 (64位浮点数), bool (布尔类型), char (字符)

- 实例
```rust
let x: i32 = 42;
let y: f64 = 3.14;
let is_true: bool = true;
let letter: char = 'A';
```

# 函数

Rust 函数通过 fn 关键字定义，函数的返回类型通过箭头符号 -> 指定。

- 实例
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
如果函数没有返回值，类型默认为 ()（即空元组）。

**控制流**
# if 表达式

- 实例
```rust
let number = 7;
if number < 5 {
    println!("小于 5");
} else {
    println!("大于等于 5");
}
```
# loop 循环

loop 是 Rust 中的无限循环，可以使用 break 退出循环。

- 实例
```rust
let mut counter = 0;
loop {
    counter += 1;
    if counter == 10 {
        break;
    }
}
```

# while 循环

- 实例
```rust
let mut number = 3;
while number != 0 {
    println!("{}!", number);
    number -= 1;
}
```

# for 循环

- 实例
```rust
for number in 1..4 {
    println!("{}!", number);
}
```
# 所有权
Rust 中的所有权是独特的内存管理机制，核心概念包括所有权 (ownership)、借用 (borrowing) 和引用 (reference)。

所有权规则:

Rust 中的每个值都有一个所有者。
每个值在任意时刻只能有一个所有者。
当所有者超出作用域时，值会被删除。
```rust
let s1 = String::from("hello");
let s2 = s1; // s1 的所有权被转移给了 s2
// println!("{}", s1); // 此处编译会报错，因为 s1 已不再拥有该值
```
# 借用和引用
借用允许引用数据而不获取所有权，通过 & 符号实现。
```rust
fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);  // 借用
    println!("The length of '{}' is {}.", s, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```
# 结构体

结构体用于创建自定义类型，字段可以包含多种数据类型。

- 实例
```rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

let user1 = User {
    username: String::from("someusername"),
    email: String::from("someone@example.com"),
    sign_in_count: 1,
    active: true,
};
```
# 枚举

枚举允许定义可能的几种数据类型中的一种。

- 实例
```rust
enum IpAddrKind {
    V4,
    V6,
}

let four = IpAddrKind::V4;
let six = IpAddrKind::V6;
```
# 模式匹配
match 是 Rust 中强大的控制流工具，类似于 switch 语句。

- 实例
```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```
# 错误处理

Rust 有两种主要的错误处理方式：Result<T, E> 和 Option<T>。

Result:

- 实例
```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}

fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}
```
Option:

- 实例
```rust
fn get_element(index: usize, vec: &Vec<i32>) -> Option<i32> {
    if index < vec.len() {
        Some(vec[index])
    } else {
        None
    }
}
```
所有权与借用的生命周期
Rust 使用生命周期来确保引用的有效性。生命周期标注用 'a 等来表示，但常见的情况下，编译器会自动推导。

- 实例
```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```
# 重影

重影的概念与其他面向对象语言里的"重写"（Override）或"重载"（Overload）是不一样的。重影就是刚才讲述的所谓"重新绑定"，之所以加引号就是为了在没有介绍这个概念的时候代替一下概念。

重影就是指变量的名称可以被重新使用的机制：

- 实例
```rust
fn main() {
    let x = 5;
    let x = x + 1;
    let x = x * 2;
    println!("The value of x is: {}", x);
}
```
这段程序的运行结果：
```rust
The value of x is: 12
```
重影与可变变量的赋值不是一个概念，重影是指用同一个名字重新代表另一个变量实体，其类型、可变属性和值都可以变化。但可变变量赋值仅能发生值的变化。
```rust
let mut s = "114";
s = s.len();

```
这段程序会出错：不能给字符串变量赋整型值。