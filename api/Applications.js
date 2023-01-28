const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/applications';


/**
 * Get application data
 * @async
 * @function
 * @memberOf Trello
 * @param {string} applicationId
 * @returns {Promise<*>}
 */
Trello.prototype.getApplicationData = async function (applicationId) {
    const url = `${BASE_URL}/${applicationId}/data?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}