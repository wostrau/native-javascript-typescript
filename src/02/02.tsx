export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
};
export type AddressType = {
    streetTitle: string
    city: LocalCityType
};
export type LocalCityType = {
    cityTitle: string
    countryTitle: string
};
export type TechType = {
    id: number
    title: string
};

export const student: StudentType = {
    id: 1,
    name: 'Alex',
    age: 33,
    isActive: true,
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

console.log(student.address.city.countryTitle);
console.log(student.technologies[5].title)