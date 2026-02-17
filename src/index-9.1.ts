/*


// # ЧАСТЬ 1 — Строгая модель CRUD-системы

interface BaseEntity {
    readonly id: number
    readonly createAt: Date
}

interface User extends BaseEntity {
    email: string
    role: 'admin' | 'user'
    isActive: boolean
}


// ## 1 Модель Create

type CreateEntity<T extends BaseEntity> = Omit<T, 'id' | 'createAt'>
type CreateUser = CreateEntity<User>

// {
//     email: string
//     role: 'admin' | 'user'
//     isActive: boolean
// }


// ## 2 Модель Update

type UpdateEntity<T extends BaseEntity> = Partial<Omit<T, 'id' | 'createAt'>>
type UpdateUser = UpdateEntity<User>

// {
//     email?: string
//     role?: 'admin' | 'user'
//     isActive?: boolean
// }


// -------------------------------------


// # ЧАСТЬ 2 — Типизация API ответа

type AppiSuccess<T> = {
    status: 'success'
    data: T
}

type ApiError = {
    status: 'error'
    error: string
}

type ApiRespons<T> = AppiSuccess<T> | ApiError


function handleResponse<T>(response: ApiRespons<T>) {
    if (response.status === 'success') {
        return response.data
    }

    throw new Error(response.error)
}


// -------------------------------------


// # ЧАСТЬ 3 — Умная трансформация типов

// сделать все поля nullable

type Nuullable<T> = {
    [K in keyof T]: T[K] | null
}

type NullableUser = Nuullable<User>

// {
//     id: number | null
//     createdAt: Date | null
//     email: string | null
//     role: "admin" | "user" | null
//     isActive: boolean | null
// }


// -------------------------------------


// # ЧАСТЬ 4 — Фильтрация ключей по типу

// получить только boolean-поля

type OnlyBoolean<T> = {
    [K in keyof T as T[K] extends boolean ? K : never]: T[K]
}

type BooleanFields = OnlyBoolean<User>

// {
//     isActive: boolean
// }


*/