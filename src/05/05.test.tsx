import {createGreetingMessage, ManType} from './05';

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: 'Alex Chaplinsky', age: 33},
        {name: 'Boris Johnston', age: 34},
        {name: 'Coby Brighthill', age: 28},
        {name: 'Suzy Sarandon', age: 30},
    ];
});

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(4);
    expect(messages[0]).toBe('Hello Alex. Welcome to IT-Incubator!')
    expect(messages[1]).toBe('Hello Boris. Welcome to IT-Incubator!')
    expect(messages[2]).toBe('Hello Coby. Welcome to IT-Incubator!')
    expect(messages[3]).toBe('Hello Suzy. Welcome to IT-Incubator!')
});
