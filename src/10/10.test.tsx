import {
    addBook,
    makeHairstyle,
    moveUser,
    moveUserToAnotherHouse, updateBook,
    upgradeLaptop,
    UserWithBooksType,
    UserWithLaptopType
} from './10';

let user: UserWithLaptopType & UserWithBooksType;

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
        books: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'REDUX']
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