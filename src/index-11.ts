/*

// Пример 1 — Превращает readonly поля в обычные

type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
}


// Пример 1 — Если T — union, происходит распределение.

type NonNullable<T> = T extends null | undefined ? never : T;
type A1 = NonNullable<string | null | undefined> // => string

// NonNullable<string> => string
// NonNullable<null> => never
// NonNullable<undefined> => never


// Пример 3

type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// (...args infer P) => any
// если T- функция => вытащи массив аргументов

type A2 = Parameters<(a: number, b: string) => void> // => [number, string]
// T подходит под формулу  P = [number, string]


// Пример 4

type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;
type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : never;
// Если T — конструктор → вытащи возвращаемый тип

class User {}

type A3 = InstanceType<typeof User>;
// A4 = User


type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T // Рекурсивно разворачивает Promise.
type A4 = Awaited<Promise<Promise<string>>>
// U = Promise<string>
// U = string
// => string


 */