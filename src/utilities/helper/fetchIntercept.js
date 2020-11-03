import axios from 'axios';

const qaHost = 'https://ext-qamobile3-aws1.freecharge.in/';
const prodHost = 'https://mobile-rest.freecharge.in/';

const configuration = {
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    }
};
/**
 * No pinning for staging.
 * Custom fetch for pinning on production.
 */

const requestHandler = request => {
    return request;
};

const errorHandler = error => {
    if (!error.status) { //Internal Server error
        // network error
        throw new Error('Something went wrong . Please try again later.');
    }

    if (error) {
        return error;
    }
    return Promise.reject({ ...error });
};

const successHandler = response => {
    return response;
};
class fetchIntercept {
    constructor() {
        this.isStaging = true;
        this.instance = axios.create(configuration);
        this.instance.interceptors.request.use(request => requestHandler(request));
        this.instance.interceptors.response.use(response => successHandler(response), error => errorHandler(error));
    }
    setFetchConfig = ({ env, certs }) => {
        this.isStaging = env;
        this.instance = axios.create(configuration);
        // !env && this.instance.setPinningOptions(certs) //ssl for prod
    }
    getInstance = () => {
        return this.instance;
    }
    getEnv = () => {
        return this.isStaging;
    }
    getUrl = endpoint => {
        const baseURL = this.isStaging ? qaHost : prodHost;
        return baseURL + endpoint;
    }
}

const fetchInstance = new fetchIntercept();

const apiLogger = (method, url, options, body, response) => {

    console.log(
        `${method} URL : ${url}\nHEADERS: `,
        options && options.headers,
        `\nPARAMS: `,
        body,
        `\nRESPONSE: `,
        response.data
    );

};

const modifyOptions = (options = {}, method = '') => {
    const timeoutIntervalDefaultConfig = {
        GET: 15 * 1000, //15 sec
        POST: 25 * 1000, //25 sec
        PUT: 25 * 1000 //25 sec
    };
    if (true) {//staging-true
        return {
            ...options,
            // timeout: timeoutIntervalDefaultConfig[method],
            validateStatus: () => {
                return true;
            }
        };
    }
    return options;
};

const POST = (_URL, data = null, options = {}) => {
    const _options = modifyOptions(options, 'POST');

    const instance = fetchInstance.getInstance();
    let opt = fetchInstance.getEnv() ? { //staging
        ..._options,
        disableAllSecurity: true
    } : _options;
    return instance.post(fetchInstance.getUrl(_URL), data, opt).then(response => {
        apiLogger('POST', fetchInstance.getUrl(_URL), options, data, response);
        return response;
    });

};


const GET = (_URL, options = {}) => {
    const _options = modifyOptions(options, 'GET');
    const instance = fetchInstance.getInstance();
    let url = fetchInstance.getUrl(_URL);
    let opt = fetchInstance.getEnv() ? { //staging
        ..._options,
        disableAllSecurity: true
    } : _options;
    return instance.get(url, opt).then(response => {
        apiLogger('GET', fetchInstance.getUrl(_URL), options, options && options.params, response);
        return response;
    });
};

export { POST, GET, fetchInstance };

// export default instance;
