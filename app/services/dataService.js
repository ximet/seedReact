let singleton = Symbol();
let singletonEnforcer = Symbol();
/**
 * @class Represents DataService.
 */
export default class DataService {

    /**
     * Construct data url.
     * Fire 'DataUrl must be provided!' error if dataUrl not specified.
     * @param {string} dataUrl - url to fetch data.
     */
    constructor(dataUrl, enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot construct singleton!');
        }

        if(!dataUrl) {
            throw new Error('DataUrl must be provided!');
        }

        this.listeners = [];
        this.dataUrl = dataUrl;
    }

    /**
     * Fetches data from server using dataUrl
     */
    fetchData() {
        return fetch(this.dataUrl)
            .then(response => {
                if(response.status !== 200) {
                    console.error('FetchData method: there was a problem. Code:', response.status);
                }

                return response.json().then(data => data.results);
            })
            .catch(err => {
                console.error('FetchData error:', err);
            });
    }

    /**
     * @return Singleton
     */
    static getInstance(dataUrl) {
        if (!this[singleton]) {
            this[singleton] = new DataService(dataUrl, singletonEnforcer);
        }
        return this[singleton];
    }
};
