import {cheapPredicate, CoursesType, predicate} from './04';

test('should take men older than 90 y.o.', ()=>{
    const ages = [18, 20, 22, 36, 43, 51, 76, 80, 92, 1, 14, 16, 7];

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(92);
});

test('should take courses cheaper than 250', ()=>{
    const courses: Array<CoursesType> = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 300}
    ];

    const cheapCourses = courses.filter(cheapPredicate);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
});

test('get only completed tasks', ()=>{
   const tasks = [
       {id: '1',title: 'Bread', isDone: false},
       {id: '1',title: 'Milk', isDone: true},
       {id: '1',title: 'Butter', isDone: false},
       {id: '1',title: 'Flour', isDone: true}
   ];

   const completedTasks = tasks.filter(t => t.isDone)

   expect(completedTasks.length).toBe(2);
   expect(completedTasks[0].title).toBe('Milk');
});

test('get only uncompleted tasks', ()=>{
    const tasks = [
        {id: '1',title: 'Bread', isDone: false},
        {id: '1',title: 'Milk', isDone: true},
        {id: '1',title: 'Butter', isDone: false},
        {id: '1',title: 'Flour', isDone: true}
    ];

    const completedTasks = tasks.filter(t => !t.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Bread');
});