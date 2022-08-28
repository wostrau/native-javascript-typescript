export type UsersType = {
    name: string
    age: number
    address: {title: string}
};

const user = {
    name: 'Alex',
    age: 33,
    address: {
        title: 'Miensk'
    }
};

export function increaseAge(u: UsersType) {
    u.age++;
};

export const users: Array<UsersType> = [
    {name: 'Alex', age: 33, address: {title: 'Miensk'}},
    {name: 'Coby', age: 35, address: {title: 'Smallville'}}
];

export const letters = ['a', 'g', 'h', 'e', 'y', 'z', 'o', 'p'];

