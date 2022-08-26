import {GovernmentBuildingsType, HouseType} from '../02/02_02';

export const getStreetTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title);
};

export const getStreetTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title);
};

export const createMessage = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}!`)
};