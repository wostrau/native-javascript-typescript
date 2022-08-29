export type AddressType = {
    title: string
    house: number
}

export type UserType = {
    name: string
    hair: number
    address: AddressType
}

const user: UserType = {
    name: 'Alex',
    hair: 200,
    address: {
        title: 'Miensk',
        house: 2
    }
};

export type LaptopType = {
    title: string
};

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
};

export type UserWithBooksType = UserType & {
    books: Array<string>
};

export const makeHairstyle = (u: UserType, intensivity: number) => {
    const copyUser = {...u, hair: u.hair / intensivity};
    return copyUser;
};

export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {...u, address: {...u.address, title: city}};
};

export const upgradeLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {...u, laptop: {...u.laptop, title: laptop}};
};

export const moveUserToAnotherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {...u, address: {...u.address, house: house}};
};

export const addBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {...u, books: [...u.books, book]};
};

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, prevBook: string, newBook: string) => {
    const copyUser = {...u, books: [...u.books]};
    copyUser.books.map(b => b === prevBook ? newBook : b);
    return copyUser;
};

