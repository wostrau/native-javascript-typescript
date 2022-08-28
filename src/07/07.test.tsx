import {ManType} from './07';

let man: ManType;

beforeEach(()=>{
    man = {
        name: 'Alex',
        age: 33,
        lessons: [
            {title: '01'},
            {title: '02'},
            {title: '03'}
        ],
        address: {
            street: {
                title: 'Nezaleznasti street'
            }
        }
    };
});

test('Get some adj from object man', () => {
    const {age: mansAge} = man;
    const {title: mansAddress} = man.address.street;

    expect(mansAge).toBe(33);
    expect(mansAddress).toBe('Nezaleznasti street');
});

test('Destructing for array', () => {
    const lesson1 = man.lessons[0];
    const lesson2 = man.lessons[1];

    const [ls1, ls2] = man.lessons;
    const [ls01, ...restLessons] = man.lessons;

    expect(lesson1.title).toBe('01');
    expect(lesson2.title).toBe('02');
    expect(ls1.title).toBe('01');
    expect(ls2.title).toBe('02');
    expect(ls01.title).toBe('01');
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe('02');
});
