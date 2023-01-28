const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/emojis';


/**
 * Get emojis
 * @async
 * @function
 * @memberOf Trello
 * @param options
 * @returns {Promise<*>}
 */
Trello.prototype.getEmojis = async function (options) {
    const Defaults = {
        locale: '',
        spritesheet: ''
    }
    let url = `${BASE_URL}/key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Defaults, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
        const response = await fetch(url, {method: 'GET', headers: this.headers}, body = JSON.stringify(options))
        const json = await response.json();
        return json;
}