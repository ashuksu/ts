/*

function identity<T>(value: T): T {
    return value
}

// const a = identity<string>("hello")
// const b = identity<number>(42)
// const c = identity(true)


// console.log(11, a);
// console.log(22, b);
// console.log(33, c);

function getFirstElement<T>(arr: T): T | undefined {
    // if (!!arr.length) return;

    return arr;
}

// const n = getFirstElement([1, 'a']);
// const n = getFirstElemen([1, 2, 3]);
// const s = getFirstElement(['a', 'b', 'c']);

// console.log(44, n);
// console.log(55, s);

function logLengt<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

// logLengt('hello');
// logLengt([1, 2, 3]);
function wrap<T>(value: T) {
    return {value}
}

const result = wrap(123)

// console.log(result)

function createPair<T, U>(first: T, second: U): {
    first: T,
    second: U
} {
    return {
        first: first,
        second: second
    }
}

function createPair2<T, U>(first: T, second: U) {
    return {first, second}
}

console.log(createPair("age", 230))
console.log(createPair2("age", 230))

interface User {
    id: number,
    email: string,
    role: 'admin' | 'user'
    isActive: boolean
}

interface ApiResponse<T> {
    data: T,
    status: number
}

const userResponse: ApiResponse<User> = {
    data: {
        id: 1,
        email: 'a@mail.com',
        role: 'admin',
        isActive: true
    },
    status: 200
}

*/