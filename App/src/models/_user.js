export const url = "http://localhost:3000"


export const _User = async () => {
    return fetch(`${url}/users`, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((responseJson) => {
        return responseJson.json()
    })
        .catch((error) => {
            console.error('用户信息错误',error);
        });
}

export const _UserPOST = async () => {
    return fetch(`${url}/users`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((responseJson) => {
        return responseJson.json()
    })
        .catch((error) => {
            console.error('用户信息错误',error);
        });
}

export const _UserPUT = async () => {
    return fetch(`${url}/users`, {
        method: 'PUT',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((responseJson) => {
        return responseJson.status
    })
        .catch((error) => {
            console.error('用户信息错误',error);
        });
}

export const _UserDelete = async () => {
    return fetch(`${url}/users`, {
        method: 'Delete',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((responseJson) => {
        return responseJson.status
    })
        .catch((error) => {
            console.error('用户信息错误',error);
        });
}


