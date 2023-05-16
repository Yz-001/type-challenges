type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
//1. type First<T extends any[]> = T extends [] ? never : T[0]

// 注意：
// never 类型的变量只能被 never 类型和 any 类型的变量所赋值