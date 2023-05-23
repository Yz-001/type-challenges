type Includes<T extends readonly any[], U> = T extends readonly [
  infer L,
  ...infer R
]
  ? Exclude<L, U> extends never
    ? true
    : Includes<R, U>
  : false
