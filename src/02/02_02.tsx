export type StreetType = {
    title: string
};
export type Address2Type = {
    number?: number
    street: StreetType
};
export type HouseType = {
    builtAt: number
    repaired: boolean
    address: Address2Type
};
export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: Address2Type
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
};

