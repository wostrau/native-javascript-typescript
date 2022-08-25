import {CityType} from '../02/02_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                builtAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central street'
                    }
                }
            },
            {
                type: 'Fire Station',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South street'
                    }
                }
            },
        ],
        citizenNumber: 1000000
    }
});

test('List of titles of government buildings', ()=>{
    let streets = getStreetTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2);

})