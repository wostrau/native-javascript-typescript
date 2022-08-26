import {CityType} from '../02/02_02';
import {createMessage, getStreetTitlesOfGovernmentBuildings, getStreetTitlesOfHouses} from './05_02';

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
    let streetsNames = getStreetTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central street');
    expect(streetsNames[1]).toBe('South street');
});

test('List pf streets titles', ()=>{
   let streets = getStreetTitlesOfHouses(city.houses);

   expect(streets.length).toBe(3);
   expect(streets[0]).toBe('White street');
   expect(streets[1]).toBe('Happy street');
   expect(streets[2]).toBe('Happy street');
});

test('Create greeting messages for streets', ()=>{
   let messages = createMessage(city.houses);

   expect(messages.length).toBe(3);
   expect(messages[0]).toBe('Hello guys from White street!');
   expect(messages[1]).toBe('Hello guys from Happy street!');
   expect(messages[2]).toBe('Hello guys from Happy street!');
});