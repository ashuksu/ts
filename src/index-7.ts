/*

// Conditional Types (Условные типы)
// T extends X ? A : B


type IsString<T> = T extends string ? true : false;

// Если T совместим со string → true
// Иначе → false

type A = IsString<string> // true
type B = IsString<number> // false
type C = IsString<'hello'> // true
type D = IsString<any> // true
type E = IsString<never> // never
// Это не выполнение кода.
// Это проверка совместимости типов.

type ElementType<T> = T extends (infer U)[] ? U : T
type ToArray<T> = T extends any ? T[] : never

type A1 = ToArray<string> // string[]
type B1 = ToArray<number> // number[]
type C1 = ToArray<any> // any[]
type D1 = ToArray<never> // never

type E1 = ToArray<string | number> // (string | number)[], Distributive Conditional Types
// ToArray<string> | ToArray<number>

type ApiResponse<T> = T extends string ? { type: 'text', value: string } : { type: 'json', value: T }
type A2 = ApiResponse<string> // { type: 'text', value: string }
type B2 = ApiResponse<number> // { type: 'json', value: number }


// -----------------------


// infer


type GetArrayType<T> = T extends (infer U)[] ? U : never
// infer U - извлекает тип из конструкции.

type A3 = GetArrayType<string[]> // string
type B3 = GetArrayType<number[]> // number
type C3 = GetArrayType<boolean[]> // boolean
type D3 = GetArrayType<string> // never, так как string не является массивом.

// Если T — массив чего-то То извлеки тип элемента И назови его U


type MyReturnType<T> = T extends (...argg: any[]) => infer R ? R : never

function test() {
    return 42
}

type R = MyReturnType<typeof test> // number


 */