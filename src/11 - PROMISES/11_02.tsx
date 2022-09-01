export const findUserInDB = (id: number) => {
    const users = [
        {id: 1, name: 'Alex', friend: 2},
        {id: 2, name: 'Mari', friend: 3},
        {id: 3, name: 'Coby', friend: null},
    ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id);
            if (user === null) {
                rej('user not found');
            } else {
                res(user);
            }
        }, randomIntFromInterval(500, 1000));
    });

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (min - max + 1) + min);
    }
};

export let axios = {
    _fake(url: string, data: any) {
        return new Promise((resolve) => {
            let responseData: any = {};
            setTimeout(() => {
                responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we\'ll prepare students for you'
                    };
                } else if (url.indexOf('https://google.com') > 0) {
                    responseData = {
                          vacancies: 12
                    };
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1000, 5000));
        });

        function randomIntFromInterval(min: number, max: number) {
            return Math.floor(Math.random() * (min - max + 1) + min);
        }
    },
    post(url: string, data: any) {
        return this._fake(url, data);
    },
    get(url: string, data: any) {
        return this._fake(url, data);
    }
};