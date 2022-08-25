export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Alex Chaplinsky', age: 33},
    {name: 'Boris Johnston', age: 34},
    {name: 'Coby Brighthill', age: 28},
    {name: 'Suzy Sarandon', age: 30},
];

const Transformator = (man: ManType) => {
    return {
        stack: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TDD'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
};

const devs = [
    {
        stack: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TDD'],
        firstName: 'Alex',
        lastName: 'Chaplinsky'
    },
    {
        stack: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TDD'],
        firstName: 'Boris',
        lastName: 'Johnston'
    },
    {
        stack: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TDD'],
        firstName: 'Coby',
        lastName: 'Brighthill'
    },
    {
        stack: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TDD'],
        firstName: 'Suzy',
        lastName: 'Sarandon'
    },
];

const devs2 = [
    Transformator(people[0]),
    Transformator(people[1]),
    Transformator(people[2]),
    Transformator(people[3])
];

const devs3 = people.map(Transformator);

const devs4 = people.map(man => ({
    stack: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TDD'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator!`);

export const createGreetingMessage = (people: Array<ManType>) => {
  return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator!`);
};



