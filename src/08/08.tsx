export const usersObj = {
    '0': 'Alex',
    '1': 'Kimmel',
    '2': 'Coby',
    '3': 'Cody',
    '4': 'Muddy',
    '5': 'Buddy'
};

export const usersArray = [
    {id: 100, name: 'Alex'},
    {id: 101, name: 'Kimmel'},
    {id: 102, name: 'Coby'},
    {id: 103, name: 'Cody'},
    {id: 104, name: 'Muddy'},
    {id: 105, name: 'Buddy'}
];

export type UsersType = {
    [key: string]: {id: number, name: string}
};

export const users = {
    '100': {id: 100, name: 'Alex'},
    '101': {id: 101, name: 'Kimmel'},
    '102': {id: 102, name: 'Coby'},
    '103': {id: 103, name: 'Cody'},
    '104': {id: 104, name: 'Muddy'},
    '105': {id: 105, name: 'Buddy'}
};
