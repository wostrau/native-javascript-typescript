import {increaseAge, users, UsersType} from './09';

let user: UsersType;

beforeEach(()=>{
    user = {
        name: 'Alex',
        age: 33,
        address: {
            title: 'Miensk'
        }
    };
});

test('age should be increased correctly', ()=>{
    increaseAge(user);

    expect(user.age).toBe(34);
});

test('reference type test', ()=>{
    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000);
    expect(superman.age).toBe(1000);
});

test('array reference type test', ()=>{
    let admins = users;
    admins.push({name: 'Bobby', age: 39, address: user.address});


    expect(users[2].name).toBe('Bobby');
    expect(users[2].age).toBe(39);
});

test('value reference type test', ()=>{
    let usersAddress = user.address;
    let user2: UsersType = {
        name: 'Maryna',
        age: 35,
        address: usersAddress
    };
    user2.address.title = 'Magilew';

    expect(user.address.title).toBe('Magilew');
    expect(user2.address.title).toBe('Magilew');
});

test('reference array type test', ()=>{
    let newAddress = {
        title: 'Lida'
    };

    user.address = newAddress;

    let user2: UsersType = {
        name: 'Maryna',
        age: 35,
        address: newAddress
    };

    const newUsers = [user, user2, {name: 'Shmul', age: 37, address: newAddress}];

    const newAdmins = [user, user2];

    newAdmins[0].name = 'Alexander';

    expect(newUsers[0].address.title).toBe('Lida');
    expect(newUsers[1].address.title).toBe('Lida');
    expect(newUsers[2].address.title).toBe('Lida');
    expect(newUsers[0].name).toBe('Alexander');
});