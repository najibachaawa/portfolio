import axios from 'axios';
//change with yours
const BaseURL = process.env.REACT_APP_API_URL || 'https://portfolio-api-bahachammakhi.herokuapp.com/';

export let authorizationBearer = null;
export const setAuthorizationBearer = (token) => {
    authorizationBearer = token;
};
function axiosRequest(method, baseURL, url, params, headers) {
    return new Promise((resolve, reject) => {
        axios(Object.assign(Object.assign({ baseURL,
            method,
            url, timeout: 300000 }, params), { headers: Object.assign({}, headers) }))
            .then((payload) => {
            resolve({ data: payload.data, code: payload.status });
        }, (payload) => {
            if (payload.response) {
                const { response } = payload;
                if (response.status >= 400 && response.status < 500) {
                    resolve(response.data);
                }
                else {
                    reject(response);
                }
            }
            else {
                reject(payload);
            }
        })
            .catch((e) => {
            throw e;
        });
    });
}
/* ------ Request POST ------ */
export function axiosPost(url, params, timeout = null) {
    let p = {
        sendToken: true,
        data: {},
        headers: {}
    };
    if (params) {
        p = Object.assign(Object.assign({}, p), params);
    }
    const { headers } = p;
    if (p.sendToken && authorizationBearer) {
        headers.Authorization = `Bearer ${authorizationBearer}`;
    }
    const reqParams = { data: p.data };
    if (timeout) {
        reqParams.timeout = timeout;
    }
    return axiosRequest('POST', BaseURL, url, reqParams, headers);
}
/* ------ Request PUT ------ */
export function axiosPut(url, params, timeout = null) {
    let p = { sendToken: true, data: {}, headers: {} };
    if (params) {
        p = Object.assign(Object.assign({}, p), params);
    }
    const { headers } = p;
    if (p.sendToken && authorizationBearer) {
        headers.Authorization = `Bearer ${authorizationBearer}`;
    }
    const reqParams = { data: p.data };
    if (timeout) {
        reqParams.timeout = timeout;
    }
    return axiosRequest('PUT', BaseURL, url, reqParams, headers);
}
/* ------ Request PATCH ------ */
export function axiosPatch(url, params, timeout = null) {
    let p = { sendToken: true, data: {}, headers: {} };
    if (params) {
        p = Object.assign(Object.assign({}, p), params);
    }
    const { headers } = p;
    if (p.sendToken && authorizationBearer) {
        headers.Authorization = `Bearer ${authorizationBearer}`;
    }
    const reqParams = { data: p.data };
    if (timeout) {
        reqParams.timeout = timeout;
    }
    return axiosRequest('PATCH', BaseURL, url, reqParams, headers);
}
/* ------ Request GET ------ */
export function axiosGet(url, params, timeout = null) {
    let p = { sendToken: true, params: {}, headers: {} };
    if (params) {
        p = Object.assign(Object.assign({}, p), params);
    }
    const { headers } = p;
    if (p.sendToken && authorizationBearer) {
        headers.Authorization = `Bearer ${authorizationBearer}`;
    }
    const reqParams = {
        params: p.params
    };
    if (timeout) {
        reqParams.timeout = timeout;
    }
    return axiosRequest('GET', BaseURL, url, reqParams, headers);
}
/* ------ Request DELETE ------ */
export function axiosDelete(url, params, timeout = null) {
    let p = Object.assign({ sendToken: true, headers: {} }, params);
    if (params) {
        p = Object.assign(Object.assign({}, p), params);
    }
    const { headers } = p;
    if (p.sendToken && authorizationBearer) {
        headers.Authorization = `Bearer ${authorizationBearer}`;
    }
    const reqParams = {
        params: p.params
    };
    if (timeout) {
        reqParams.timeout = timeout;
    }
    return axiosRequest('DELETE', BaseURL, url, reqParams, headers);
}
/* ------ Request POST files ------ */
export function axiosPostFilesData(url, params, timeout = 60000) {
    const p = Object.assign({ sendToken: true, form: {}, headers: {} }, params);
    const { headers } = p;
    if (p.sendToken && authorizationBearer) {
        headers.Authorization = `Bearer ${authorizationBearer}`;
    }
    const reqParams = { data: p.data };
    if (timeout) {
        reqParams.timeout = timeout;
    }
    return axiosRequest('POST', BaseURL, url, reqParams, headers);
}
