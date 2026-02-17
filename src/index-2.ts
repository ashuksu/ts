/*

//Utility types

interface User {
    id: number,
    email: string,
    role: 'admin' | 'user'
}

type UpdateUser = Partial<User>

function updateUser(id: number, data: Partial<User>) {
    console.log('Updating:', data)
}

// updateUser(1, {email: 'new-email@mail.com'});

type UserPreview = Pick<User, 'id' | 'email'>

type CreateUserInput = Omit<User, 'id'>;

type RolePermission = Record<
    'admin' | 'user',
    string[]
>;

const permission: RolePermission = {
    admin: ['create', 'delete'],
    user: ['read']
};

// console.log(ppermission)

interface Product {
    id: number,
    title: string,
    price: number,
    description: string
}

// Создай тип ProductPreview только с id и title
type ProductPreview = Pick<Product, 'id' | 'title'>;
// Создай тип UpdateProduct (частичное обновление)
type UpdateProduct = Partial<Product>;
// Создай тип CreateProductInput без id
type CreateProductInput = Omit<Product, 'id'>;
// Создай тип словаря ProductStock, где ключ — id (number), значение — количество (number)
type ProductStock = Record<number, number>;
const stock: ProductStock = {
    1: 10,
    2: 5,
    3: 0
}

*/