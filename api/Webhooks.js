const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/webhooks";

/**
 * Create webhook by id model.
 * @param {string} idModel
 * @param callbackURL
 * @param {Object} options - {description, active}
 * @returns {Promise<*>}
 */
Trello.prototype.createWebhook = async function (idModel, callbackURL, options) {
    const Defaults = {
        description: '',
        active: '',
    }
    let url = `${BASE_URL}?key=${this.key}&token=${this.token}&idModel=${idModel}&callbackURL=${callbackURL}`;
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
 * Get webhooks by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idWebhook
 * @returns {Promise<*>}
 */
Trello.prototype.getWebhook = async function (idWebhook) {
    const url = `${BASE_URL}/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update webhook by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idWebhook
 * @param {Object} options - {description, callbackURL, idModel, active}
 * @returns {Promise<*>}
 */
Trello.prototype.updateWebhook = async function (idWebhook, options) {
    const Defaults = {
        description: '',
        callbackURL: '',
        idModel: '',
        active: '',
    }
    let url = `${BASE_URL}/${idWebhook}?key=${this.key}&token=${this.token}`;
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

/**
 * Delete webhook by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idWebhook
 * @returns {Promise<*>}
 */
Trello.prototype.deleteWebhook = async function (idWebhook) {
    const url = `${BASE_URL}/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get webhook field by id and field.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idWebhook
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getWebhookField = async function (idWebhook, field) {
    const url = `${BASE_URL}/${idWebhook}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}