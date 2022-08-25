import {StudentType} from '../02/02';

const sum = (a: number, b: number) => {
    return a + b;
};

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
};

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true;
};

export const doesStudentLiveIn = (st: StudentType, city: string) => {

};