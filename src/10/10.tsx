export type CompaniesType = {
    [key: string]: Array<{ id: number, title: string }>
};

export type AddressType = {
    title: string
    house: number
};

export type UserType = {
    name: string
    hair: number
    address: AddressType
};

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

export type UserWithCompaniesType = UserType & {
    companies: Array<{ id: number, title: string }>
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
    return {...u, books: u.books.map(b => prevBook ? newBook : b)};
    /*const copyUser = {...u, books: [...u.books]};
    copyUser.books = copyUser.books.map(b => b === prevBook ? newBook : b);
    return copyUser; --> IT SHOULD WORKS*/
};

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {...u, books: u.books.filter(b => b !== book)};
};

export const addCompany = (u: UserWithLaptopType & UserWithCompaniesType, company: string) => {
    return {
        ...u, companies: [...u.companies, {
            id: u.companies.length + 1,
            title: company
        }]
    };
};

export const updateCompany = (u: UserWithCompaniesType, companyId: number, newTitle: string) => {
    const userCopy: UserWithCompaniesType = {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    };
    return userCopy;
};

export const updateAssociativeCompanies = (companies: CompaniesType, userName: string, companyId: number, newTitle: string) => {
    const updatedCompany = {...companies};
    updatedCompany[userName] = updatedCompany[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c);
    return updatedCompany;
};