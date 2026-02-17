/*

// mapped type

interface User {
    id: number
    namer: string
    isActive: boolean
}

type UserBooleans = {
    [K in keyof User]: boolean
}

// type UserBooleans = {
//     id: boolean
//     namer: boolean
//     isActive: boolean
// }

// [K in keyof User] → keyof User → "id" | "name" | "isActive"
// [K in keypf T]: NewType


// Partial внутри TS:

type MyPartial<T> = {
    [K in keyof T]?: T[K]
}

type ReadonlyUser<T> = {
    readonly [K in keyof T]: T[K]
}

type Test = ReadonlyUser<User>

// type Test = {
//     readonly id: number
//     readonly namer: string
//     readonly isActive: boolean
// }


 */