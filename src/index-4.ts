/*

// keyof

interface User {
    id: number
    email: string
    isActive: boolean
}

type UserKeys = keyof User

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user: User = {
    id: 111,
    email: 'a@email.com',
    isActive: true
}

const value = getProperty(user, 'email');
// console.log(value); // "user" → User, "email" → string

// getProperty(user, 'sss'); // error: Argument of type '"sss"' is not assignable to parameter of type '"id" | "email" | "isActive"'.

type EmailType = User['email']; // → string, indexed access type.

function getProperty2<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const idValue = getProperty2(user, 'id'); // → number
// console.log(idValue);

 */