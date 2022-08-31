findUserInDB(1).then(user => {
   console.log(user.name)
});

function getNumber() {
    return Promise.resolve(Math.random());
}

getNumber().then(n => console.log(n));
getNumber().then(n => console.log(n));

function wait(ms) {
    return new Promise((res)=>{
        setTimeout(()=>{res()}, ms);
    });
}

async function run() {
    await wait(1000);
    console.log(1);
    await wait(1000);
    console.log(2);
    await wait(1000);
    console.log(3);
}

run();


