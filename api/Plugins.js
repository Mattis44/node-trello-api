const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/plugins";


/**
 * Get plugin by id
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idPlugin
 * @returns {Promise<*>}
 */
Trello.prototype.getPlugin = async function (idPlugin) {
    const url = `${BASE_URL}/${idPlugin}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update plugin by id
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idPlugin
 * @returns {Promise<*>}
 */
Trello.prototype.updatePlugin = async function (idPlugin) {
    const url = `${BASE_URL}/${idPlugin}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * create plugin listing by id
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idPlugin
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.createPluginListing = async function (idPlugin, options) {
    const Defaults = {
        name: '',
        description: '',
        locale: '',
        overview: '',
    }
    let url = `${BASE_URL}/${idPlugin}/listing?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Defaults, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get plugin Member Privacy by id
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idPlugin
 * @returns {Promise<*>}
 */
Trello.prototype.getPluginMemberPrivacy = async function (idPlugin) {
    const url = `${BASE_URL}/${idPlugin}/compliance/memberPrivacy?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update plugin Member Privacy by id
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idPlugin
 * @param {string} idListing
 * @param {Object} options - {description, locale, overview, name}
 * @returns {Promise<*>}
 */
Trello.prototype.updatePluginListing = async function (idPlugin, idListing, options) {
    const Defaults = {
        description: '',
        locale: '',
        overview: '',
        name: '',
    }
    let url = `${BASE_URL}/${idPlugin}/listings/${idListing}?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Defaults, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}