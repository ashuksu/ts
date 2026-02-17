/*

interface BaseEntity {
    readonly id: number
    readonly createdAt: Date
    readonly udatedAt: Date
}

type Role = 'admin' | 'manager' | 'user';

interface User extends BaseEntity {
    email: string
    passwordHash: string
    role: Role
    isActive: boolean
}

// Create
type CreateEntity<T extends BaseEntity> = Omit<T, 'id' | 'createdAt' | 'udatedAt'>
type CreateUser = CreateEntity<User>

// Update
type UpdateEntitry<T extends BaseEntity> = Partial<Omit<T, 'id' | 'createdAt' | 'udatedAt'>>
type UpdateUser = UpdateEntitry<User>


type Permission =
    | 'user.create'
    | 'user.update'
    | 'user.delete'
    | 'post.create'
    | 'post.delete'


type RolePermissions = Record<Role, Permission[]>

const rolePermisions: RolePermissions = {
    admin: [
        'user.create',
        'user.update',
        'user.delete',
        'post.create',
        'post.delete'
    ],
    manager: [
        'user.create',
        'post.create',
    ],
    user: [
        'post.create'
    ]
}

function hasPermission<R extends Role, P extends Permission>(role: R, permission: P): boolean {
    return rolePermisions[role].includes(permission)
}


type ApiSuccess<T> = {
    status: 'success'
    data: T
}

type ApiError = {
    status: 'error'
    error: string
}

type ApiResponsive<T> = ApiSuccess<T> | ApiError

function getUser(): ApiResponsive<User> {
    return {
        status: 'success',
        data: {
            id: 1,
            createdAt: new Date(),
            udatedAt: new Date(),
            email: 'a@email.com',
            passwordHash: 'hash',
            role: 'admin',
            isActive: true
        }
    }
}

type PublicUser = Omit<User, 'passwordHash'>
type WithoutSensitive<T> = Omit<T, 'passwordHash'>


type D<T> = {
    [K in keyof T as T[K] extends boolean ? K : never]: T[K]
}

type Example = {
    a: string
    b: boolean
    c: number
}


 */