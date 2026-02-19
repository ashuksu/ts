/*

// EDGE CASE 1 — Distributive Conditional Types

type ToArray1<T> = T extends any ? T[] : never
type Result1 = ToArray1<string | number> // string[] | number[]

type ToArray2<T> = [T] extends [any] ? T[] : never
type Result2 = ToArray2<string | number> // (string | number)[]

// EDGE CASE 2 — never в union

type A = string | never //string
type B = never | number //number

// EDGE CASE 3 — Почему generic “растворяется”

function identity<T>(value: T) {
    return value;
}

const x = identity('hello') // type x = "hello"

let str = 'hello'
const y = identity(str) // type y = string

// EDGE CASE 4 — extends с union

type IsString1<T> = T extends string ? true : false
type Result3 = IsString1<string | number> // true | false

type IsString2<T> = [T] extends [string] ? true : false
type Result4 = IsString2<string | number> // false


// ЧАСТЬ 1 — Что такое infer вообще?

// T extends SompePattern<infer U> ? U : never
type ExtractPromise<T> = T extends Promise<infer U> ? U : T;
// string[] extends (infer U)[]
// U = string

// Пример 2 — функции
type GerReturnType<T> = T extends (...args: any) => infer R ? R : never;

function test() {
    return 42;
}

type R = GerReturnType<typeof test>

// typeof test -> () => never
// () => number extends (...args) => infer R
// R = number

// ЧАСТЬ 2 — infer с union

type GetArrayElement<T> = T extends (infer U)[] ? U : never
type A2 = GetArrayElement<string[] | number[]> // => string | number


// ЧАСТЬ 3 — infer несколько раз

type ExtendsPromise<T> = T extends Promise<infer U> ? U : T;
type A1 = ExtractPromise<Promise<string>> // => U
type B1 = ExtractPromise<string> // => T


// ЧАСТЬ 4 — Глубже: вложенный infer

type DeepPromise<T> = T extends Promise<infer U> ? DeepPromise<U> : T;
type A3 = DeepPromise<Promise<Promise<number>>>
// => U = Promise<number>
// => U = number


// ЧАСТЬ 5 — infer в параметрах функции

type FirstArgument<T> = T extends (arg: infer A, ...args: any) => any ? A : never;
type A4 = FirstArgument<(x: number, y: string) => void>
// => A = number


 */