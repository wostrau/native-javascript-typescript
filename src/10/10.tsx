export type AddressType = {
    title: string
}

export type UserType = {
    name: string
    hair: number
    address: AddressType
}

const user: UserType = {
    name: 'Alex',
    hair: 200,
    address: {
        title: 'Miensk'
    }
};

export type LaptopType = {
    title: string
};

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
};

export const makeHairstyle = (u: UserType, intensivity: number) => {
    const copyUser = {...u, hair: u.hair / intensivity};
    return copyUser;
};

export const moveUser = (u: UserWithLaptopType, city: string) => {
    const movedUser = {...u, address: {...u.address}};
    movedUser.address.title = city;
    return movedUser;
};