import {
    addBook, addCompany, CompaniesType, makeHairstyle,
    moveUser,
    moveUserToAnotherHouse, removeBook, updateAssociativeCompanies, updateBook, updateCompany,
    upgradeLaptop,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from './10';

let user: UserWithLaptopType & UserWithBooksType & UserWithCompaniesType;

beforeEach(() => {
    user = {
        name: 'Alex',
        hair: 200,
        address: {
            title: 'Miensk',
            house: 2
        },
        laptop: {
            title: 'MacBook'
        },
        books: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'REDUX'],
        companies: [
            {id: 1, title: 'Electroservice'},
            {id: 2, title: 'Ventra Recruting'},
            {id: 3, title: 'Mobile City'},
            {id: 4, title: 'Imarket Trade'},
            {id: 5, title: 'Samsung Electronics'}
        ]
    };
});

test('hairdresser should sut hair correctly', () => {
    const cutUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(200);
    expect(cutUser.hair).toBe(100);
    expect(cutUser.address).toBe(user.address);
});

test('change address', () => {
    const movedUser = moveUser(user, 'Braslau');

    expect(user).not.toBe(movedUser);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.address.title).toBe('Miensk');
    expect(movedUser.address.title).toBe('Braslau');
});

test('upgrade laptop to macbook pro', () => {
    const upgradedLaptopUser = upgradeLaptop(user, 'MacBook PRO');

    expect(user).not.toBe(upgradedLaptopUser);
    expect(user.address).toBe(upgradedLaptopUser.address);
    expect(user.laptop).not.toBe(upgradedLaptopUser.laptop);
    expect(user.laptop.title).toBe('MacBook');
    expect(upgradedLaptopUser.laptop.title).toBe('MacBook PRO');
});

test('user should be moved to another house correctly', () => {
    const movedUser = moveUserToAnotherHouse(user, 99);

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.books).toBe(movedUser.books);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.title).toBe('Miensk');
    expect(movedUser.address.house).toBe(99);
});

test('book should be added correctly', () => {
    const userWithAddedBook = addBook(user, 'ALGORITHMS');

    expect(user).not.toBe(userWithAddedBook);
    expect(user.books).not.toBe(userWithAddedBook.books);
    expect(user.address).toBe(userWithAddedBook.address);
    expect(user.laptop).toBe(userWithAddedBook.laptop);
    expect(user.books.length).toBe(6);
    expect(userWithAddedBook.books.length).toBe(7);
    expect(userWithAddedBook.books[6]).toBe('ALGORITHMS');
});

test('book should be updated correctly', () => {
    const userWithUpdatedBook = updateBook(user, 'REACT', 'ALGORITHMS');

    expect(user).not.toBe(userWithUpdatedBook);
    expect(user.books).not.toBe(userWithUpdatedBook.books);
    expect(user.address).toBe(userWithUpdatedBook.address);
    expect(user.laptop).toBe(userWithUpdatedBook.laptop);
    expect(user.books.length).toBe(6);
    expect(userWithUpdatedBook.books.length).toBe(user.books.length);
    expect(userWithUpdatedBook.books[4]).toBe('ALGORITHMS');
});

test('book should be removed correctly', () => {
    const userWithoutBook = removeBook(user, 'REACT');

    expect(user).not.toBe(userWithoutBook);
    expect(user.books).not.toBe(userWithoutBook.books);
    expect(user.address).toBe(userWithoutBook.address);
    expect(user.laptop).toBe(userWithoutBook.laptop);
    expect(user.books.length).toBe(6);
    expect(userWithoutBook.books.length).toBe(5);
    expect(userWithoutBook.books.length).not.toBe(user.books.length);
    expect(userWithoutBook.books[4]).toBe('REDUX');
});

test('company should be added correctly', () => {
    const userWithAddedCompany = addCompany(user, 'Softeq');

    expect(user).not.toBe(userWithAddedCompany);
    expect(user.companies).not.toBe(userWithAddedCompany.companies);
    expect(user.address).toBe(userWithAddedCompany.address);
    expect(user.laptop).toBe(userWithAddedCompany.laptop);
    expect(user.companies.length).toBe(5);
    expect(userWithAddedCompany.companies.length).toBe(6);
    expect(userWithAddedCompany.companies.length).not.toBe(user.companies.length);
    expect(userWithAddedCompany.companies[5].title).toBe('Softeq');
    expect(userWithAddedCompany.companies[5].id).toBe(6);
});

test('company should be updated correctly', () => {
    let userWithUpdatedCompany = updateCompany(user, 4, 'Imdistri');

    expect(user).not.toBe(userWithUpdatedCompany);
    expect(user.companies).not.toBe(userWithUpdatedCompany.companies);
    expect(user.address).toBe(userWithUpdatedCompany.address);
    expect(user.companies.length).toBe(5);
    expect(userWithUpdatedCompany.companies.length).toBe(5);
    expect(userWithUpdatedCompany.companies.length).toBe(user.companies.length);
    expect(userWithUpdatedCompany.companies[3].title).toBe('Imdistri');
});

test('company should be updated correctly in associative array', () => {
    let companies: CompaniesType = {
        'Alex': [
            {id: 1, title: 'Electroservice'},
            {id: 2, title: 'Ventra Recruting'},
            {id: 3, title: 'Mobile City'},
            {id: 4, title: 'Imarket Trade'},
            {id: 5, title: 'Samsung Electronics'}
        ],
        'Mari': [
            {id: 1, title: 'Zoo Soft'},
            {id: 2, title: 'Softswiss'},
            {id: 3, title: 'B Gaming'}
        ]
    };

    let companyCopy = updateAssociativeCompanies(companies, 'Mari', 2, 'Soft Swiss');

    expect(companyCopy['Alex'].length).toBe(5);
    expect(companyCopy['Mari'].length).toBe(3);
    expect(companyCopy['Mari']).not.toBe(companies['Mari']);
    expect(companyCopy['Alex']).toBe(companies['Alex']);
    expect(companyCopy['Mari'][0].title).toBe('Zoo Soft');
    expect(companyCopy['Mari'][1].title).toBe('Soft Swiss');
});