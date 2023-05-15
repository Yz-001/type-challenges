type TupleToObject<T extends readonly (number |string)[]> = {
  [P in T[number]]:P
}

// 可以使用 T[number]  不能使用T[string]原因：
// T[number] 表示访问这个元组中的数字索引,这是合法的
// T[string] 表示以字符串为索引访问元组,这是不合法的