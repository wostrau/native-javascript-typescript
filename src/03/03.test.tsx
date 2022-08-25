import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Alex',
        age: 33,
        isActive: false,
        address: {
            streetTitle: 'Surganova2',
            city: {
                cityTitle: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {id: 1, title: 'JS'},
            {id: 2, title: 'HTML'},
            {id: 3, title: 'NodeJS'},
            {id: 4, title: 'CSS'},
            {id: 5, title: 'React'},
            {id: 6, title: 'Redux Toolkit'},
        ]
    };
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(6);
    addSkill(student, 'Typescript');
    expect(student.technologies.length).toBe(7);
    expect(student.technologies[6].title).toBeDefined();
    expect(student.technologies[6].title).toBe('Typescript');
});

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
});

test('does student live in the city?', () => {
   let result1 = doesStudentLiveIn(student, 'Sumy');
   let result2 = doesStudentLiveIn(student, 'Minsk');

   expect(result1).toBe(false);
   expect(result2).toBe(true);
});

