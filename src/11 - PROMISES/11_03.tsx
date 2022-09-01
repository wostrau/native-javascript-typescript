import {findUserInDB} from './11_02';

findUserInDB(1)
    .then(user => {
        console.log(user);
        return user;
    })
    .then(user => findUserInDB(user.friend))
    .catch(error => {
        return {name: 'Friend Bot', friend: 1}
    })
    .then(friend1 => {
        console.log(friend1.name);
        return friend1;
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => console.log(friend2))
    .catch(error => alert(error));

async function run() {
    try {
        let user = await findUserInDB(1);
        console.log(user.name);
        let friend1;
        try {
            friend1 = await findUserInDB(user.friend);
        } catch(error) {
            friend1 = {name: 'Friend Bot', friend: 1}
        }
        console.log(friend1.name);
        let friend2 = await findUserInDB(friend1.friend);
        console.log(friend2.name);
    } catch(error) {
        alert(error)
    }
}

run();