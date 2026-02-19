// ЧАСТЬ 1 — Базовые сущности

interface BaseEntity {
    readonly id: number
    readonly createdAt: Date
}

interface User extends BaseEntity {
    email: string
    role: 'admin' | 'manager' | 'user'
    isActive: boolean
}


// ЧАСТЬ 2 — Create / Update модели (через generics)

type CreateEntity<T extends BaseEntity> = Omit<T, 'id' | 'createdAt'>

type UpdateEntity<T extends BaseEntity> = Partial<Omit<T, 'id' | 'createdAt'>>

type CreateUser = CreateEntity<User>

// {
//     email: string
//     role: ...
//     isActive: boolean
// }

type UpdateUser = UpdateEntity<User>

// {
//     email?: string
//     role?: ...
//     isActive?: boolean
// }


// ЧАСТЬ 3 — Система ролей и прав

type Permission =
    | 'user:create'
    | 'user:update'
    | 'user:delete'

type RolePermissions = Record<User['role'], Permission[]>

const rolePermissions: RolePermissions = {
    admin: ['user:create', 'user:update', 'user:delete'],
    manager: ['user:update'],
    user: []
}


// ЧАСТЬ 4 — Типобезопасная проверка доступа

function hasPermission<R extends User["role"], P extends Permission>(role: R, permission: P) {
    return rolePermissions[role].includes(permission);
}

// R ограничен допустимыми ролями
// P ограничен допустимыми permission
// Ошибка невозможна на уровне типов


// ЧАСТЬ 5 — Типизированные события

type EventMap = {
    'user:created': User
    'user:updated': UpdateUser
    'user:deleted': { id: number }
    "user:suspended": { id: number }
}

function emit<K extends keyof EventMap>(event: K, payload: EventMap[K]) {
    console.log(event, payload);
}

// если emit("user:created", ...) => payload = EventMap["user:created"] // Связка ключ → тип значения.


// ЧАСТЬ 6 — Универсальный API-ответ

type ApiSuccess<T> = {
    status: 'success'
    data: T
}

type ApiError = {
    status: 'error'
    error: string
}

type ApiResponse<T> =
    | ApiSuccess<T>
    | ApiError


function getUser(): ApiResponse<User> {
    return {
        status: 'success',
        data: {
            id: 11,
            createdAt: new Date(),
            email: 'a@email.com',
            role: 'admin',
            isActive: true
        }
    }
}