import React from 'react';

export type StreetType = {
    title: string
};

export type AddressType = {
    street: StreetType
};

export type LessonsType = {
    title: string
};

export type ManType ={
    name: string
    age: number
    lessons: Array<LessonsType>
    address: AddressType
};

type PropsType = {
    title: string
    man: ManType
};

export const ManComponent: React.FC<PropsType> = (props: PropsType) => {
    const {title} = props;
    const {name} = props.man;

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
    </div>
};
