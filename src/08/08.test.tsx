import {usersObj, UsersType} from './08';

let users: UsersType;

beforeEach(() => {
    users = {
        '100': {id: 100, name: 'Alex'},
        '101': {id: 101, name: 'Kimmel'},
        '102': {id: 102, name: 'Coby'},
        '103': {id: 103, name: 'Cody'},
        '104': {id: 104, name: 'Muddy'},
        '105': {id: 105, name: 'Buddy'}
    };
});

test('should select corresponding user from obj', () => {
    expect(usersObj[0]).toBe('Alex');
    expect(usersObj[1]).toBe('Kimmel');
    expect(usersObj[2]).toBe('Coby');
    expect(usersObj[3]).toBe('Cody');
    expect(usersObj[4]).toBe('Muddy');
    expect(usersObj[5]).toBe('Buddy');
});

test('should select corresponding user from users', () => {
    expect(users['100'].name).toBe('Alex');
    expect(users['101'].name).toBe('Kimmel');
    expect(users['102'].name).toBe('Coby');
    expect(users['103'].name).toBe('Cody');
    expect(users['104'].name).toBe('Muddy');
    expect(users['105'].name).toBe('Buddy');
});

test('should update corresponding user', () => {
    users['105'].name = 'Bobby';

    expect(users['105'].name).toBe('Bobby');
    expect(users['105']).toEqual({id: 105, name: 'Bobby'});
});

test('should delete corresponding user', () => {
    delete users['105'];

    expect(users['105']).toBeUndefined();
});