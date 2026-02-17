/*

// #1. extends

function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

// Что значит T extends { length: number }?
// T может быть любым типом,
// T ДОЛЖЕН БЫТЬ НЕ МЕНЕЕ ЧЕМ ...
//     НО он обязан иметь поле length: number.

// logLength('hello');
// logLength([1, 2, 3]);
// logLength({length: 10});
// logLength(123)


// ----------------------


// #2. extends + keyof

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    console.log(obj[key]);
    return obj[key];
}

// K может быть только допустимым ключом объекта T.

interface User {
    id: number
    name: string
}

const user: User = {
    id: 111,
    name: 'Denys'
}

// getProperty(user, 'id');
// getProperty(user, 'name');
// getProperty(user, 'isAdmin'); // error: Argument of type '"isAdmin"' is not assignable to parameter of type '"id" | "name"'.

// extends здесь ограничивает generic-параметр.


// ----------------------


// #3. extends в интерфейсах (наследование)

interface Base {
    id: number
}

interface User extends Base {
    name: string
}

// User включает всё из Base + свои поля.


// ----------------------


// #4. extends в conditional types (пока без глубины)

type IsString<T> = T extends string ? true : false

// Это уже условный тип.

// <T extends Sompting>
// Это означает: Я разрешаю только те типы, которые совместимы с Something.

function printId<T extends { id: number }>(obj: T): void {
    console.log(obj.id);
}

// printId({id: 123, name: 'Denys'});
// printId({id: '456'}); // error
// printId({name: 456}); // error


// function double1<T extends number>(value: T): T {
    // return value * 2; // error: Type 'number' is not assignable to type 'T'. TS не может гарантировать, что результат остаётся тем же самым конкретным T.
// тут мы меняем тип, type Т на входе != на type выходе
// }

// <T extends number>
//     T — это некоторый тип,
//     который обязан быть совместим с number.

function double2<T extends number>(value: T): number {
    return value * 2; // ok, возвращаем number, а не T.
}

function identityNumber<T extends number>(value: T): T {
    return value
}

// console.log(identityNumber(123)); // ok
// console.log(identityNumber('qwert')) // error

*/