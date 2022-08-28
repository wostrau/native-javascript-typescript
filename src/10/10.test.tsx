import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from './10';

let user: UserWithLaptopType;

beforeEach(() => {
    user = {
        name: 'Alex',
        hair: 200,
        address: {
            title: 'Miensk'
        },
        laptop: {
            title: 'MacBook'
        }
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