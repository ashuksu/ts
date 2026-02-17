/*

// const age: number = 22;
// const username: string = 'John Doe';
// const isAdmin: boolean = true;

// let value;
// value = 5;
// value = 'hello';

// let name: string | null = 'John Doe';
// name = null;
// let nothing: null = null;
// let notDefined: undefined = undefined;

let arrNumber: number[] = [1, 2, 3];
let numberArray: Array<number> = [1, 2, 3];
let userObj: {
    name: string,
    age: number
} = {
    name: 'John Doe',
    age: 44
}

function add(a: number, b: number): number {
    return a + b;
}

const add2 = (a: number, b: number): number => {
    return a + b;
}

let id: string | number;
let role: 'admin' | 'user';

let value2: any
value2 = 5;
value2 = 'hello';
value2 = true;

let data: unknown;
data = 5;
data = 'hello';

let value3: any;
value3 = 5;
// value3.toUpperCase();
value3 = 'hello'

function printUpperCase(value: unknown): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log('Value is not a string');
    }
}

// printUpperCase('hello');

// printUpperCase(44);

function printUpperCase2(value: unknown) {
    // console.log(value.toUpperCase())
}

function sum(a: number, b: number): number {
    return a + b;
}

function getUser(id: number): { id: number; name: string } {
    return {id, name: 'Denys'};
}

// Optional Parameters

function createUser1(
    email: string,
    password = 'defaultPassword',
    role: 'admin' | 'user',
    isActive: boolean
): {
    id: number,
    email: string,
    password?: string,
    role: 'admin' | 'user',
    isActive: boolean
} {
    return {
        id: Math.random(),
        email: email,
        role: role,
        isActive: isActive
    }
}

function greet(options: {
    name: string,
    gender: 'male' | 'female',
    age?: number,
}): void {
    console.log(111, options);

    if (options.age !== undefined) {
        console.log(`Age: ${options.age}`);
    }
}

// greet({name: 'Sss', gender: 'male'});

// Destructuring

function greet2({
                    name = 'John Doe',
                    gender,
                    age
                }: {
    name?: string,
    gender: 'male' | 'female',
    age?: number,
}): void {
    console.log(222, name, gender)

    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }
}

// greet2({name: 'sss', gender: 'male'});
// greet2({gender: 'female'})

// Type Alias

type GreetOptions = {
    name?: string,
    gender: 'male' | 'female',
    age?: number
};

function greet3({name = 'John', gender, age}: GreetOptions): void {
    console.log(333, name, gender)
};

// greet3({gender: 'female'})

function throwError(message: string): never {
    throw new Error(message);
}

function infinitLoop(): never {
    while (true) {
    }
}

// Type Aliases vs Interfaces

type User1 = {
    name?: string
}

const u1: User1 = {}
const u2: User1 = {name: 'John Doe'};

type User2 = {
    name: string | undefined
}

// const u3: User2 = {}; // error
const u4: User2 = {name: 'John'};


// type vs interface

type User3 = {
    id: number,
    email: string
}

// union
type Role1 = 'admin' | 'user';

type MergeType = User3 & {
    role: Role1
}

const u5: MergeType = {id: 22, role: 'user', email: 'mylo'};

u5.id = 11
// console.log(u5.id)

// --------------

interface User4 {
    readonly id: number,
    name: string
}

interface User4 {
    email: string
    role: 'admin' | 'user'
}

const u6: User4 = {id: 44, email: 'mylo', name: 'John', role: 'admin'};
// u6.id = 33; // error
// console.log(u6.id)


// Classification of type

type CreateUserInput = {
    email: string,
    password: string
}

interface User0 {
    readonly id: number,
    email: string,
    role: 'admin' | 'user',
    readonly createdAt: Date
}

// union Type, base Entity, extended it, build a Model

type Role = 'administrator' | 'user';

interface BaseEntity {
    readonly id: number,
    readonly createdAt: Date
}

interface User extends BaseEntity {
    email: string,
    role: Role,
    isActive: boolean
}

// user factory

function createUser(email: string, role: Role): User {
    return {
        id: Math.random(),
        createdAt: new Date(),
        email,
        role,
        isActive: true
    }
}

const user = createUser("user@mail.com", "user")
console.log(user);

 */