const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/emoji';


/**
 * Get emojis
 * @async
 * @function
 * @memberOf Trello
 * @param options - {locale, spritesheets}
 * @returns {Promise<*>}
 */
Trello.prototype.getEmoji = async function (options) {
    const Defaults = {
        locale: '',
        spritesheets: ''
    }
    let url = `${BASE_URL}key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Defaults, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
        const response = await fetch(url, {method: 'GET', headers: this.headers})
        const json = await response.json();
        return json;
}