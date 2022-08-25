import {StudentType} from '../02/02';
import {GovernmentBuildingsType, HouseType} from '../02/02_02';

/*const sum = (a: number, b: number) => {
    return a + b;
};*/

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
    return st.address.city.cityTitle === city;
};

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
};

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
};

export const fireStaff = (building: GovernmentBuildingsType, staff: number) => {
    building.staffCount -= staff;
};