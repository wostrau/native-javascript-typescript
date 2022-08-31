const resolvedPromise = Promise.resolve(100);
resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error));


const rejectedPromise = Promise.reject({message: 'Some error'});
rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error));

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'}])
    },
    login(login: string, password: string) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect login or password'});
        } else {
            return Promise.resolve({name: 'Alex', id: 12, avatarUrl: ''});
        }
    }
};

const promise = usersAPI.getAllUsers();
promise.then(users => console.log(users));

usersAPI.login('123', '422')
    .then((data) => {
        // make redirect!
    })
    .catch(error => {
        // show error
    });

const findUserInDB = (id: number) => {
    return {id: id, name: 'Alex'};
};

findUserInDB(1)
    .then(user => user.name)
    .then(name => console.log(name));

axios.get('https://google.com')
    .then(response => response.data)
    .then(data => console.log(data));

const makeGoogleRequest = () => {
    return axios.get('https://google.com')
        .then(response => response.data)
        .then(data => data.vacancies);
};

makeGoogleRequest().then(vacancies => console.log(vacancies));

async function run() {
    let user = await findUserInDB(1);
    console.log(user.name);
    let friend1 = await findUserInDB(user.name);
    console.log(friend1.name);
    let friend2 = await findUserInDB(friend1.name);
    console.log(friend2.name);
}

run();







