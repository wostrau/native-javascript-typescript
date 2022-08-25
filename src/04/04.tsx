const ages = [18, 20, 22, 36, 43, 51, 76, 80, 92, 1, 14, 16, 7];

export const predicate = (age: number) => {
    return age > 90;
};

export type CoursesType = {
    title: string
    price: number
}

const courses: Array<CoursesType> = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 300}
];

export const cheapPredicate = (course: CoursesType) => {
    return course.price < 250;
};
