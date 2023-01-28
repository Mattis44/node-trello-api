const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/tokens";

/**
 * Get token by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getToken = async function (idToken, options) {
    const Defaults = {
        fields: '',
        webhooks: '',
    }
    let url = `${BASE_URL}/${idToken}?key=${this.key}&token=${this.token}`;
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

/**
 * Get token member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @param {Object}options
 * @returns {Promise<*>}
 */
Trello.prototype.getTokenMember = async function (idToken, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idToken}/member?key=${this.key}&token=${this.token}`;
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

/**
 * Get token webhooks by id Token.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @returns {Promise<*>}
 */
Trello.prototype.getTokenWebhooks = async function (idToken) {
    const url = `${BASE_URL}/${idToken}/webhooks?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create token webhook by id Token.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @param callbackURL
 * @param {string} idModel
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.createTokenWebhook = async function (idToken, callbackURL, idModel, options) {
    const Default = {
        description: '',
    }
    let url = `${BASE_URL}/${idToken}/webhooks?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Get webhook belonging to token by Id Token and Id Webhook.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @param {string} idWebhook
 * @returns {Promise<*>}
 */
Trello.prototype.getWebhookBelongingToToken = async function (idToken, idWebhook) {
    const url = `${BASE_URL}/${idToken}/webhooks/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update webhook created by token by Id Token and Id Webhook.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @param {string} idWebhook
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.updateWebhookCreatedByToken = async function (idToken, idWebhook, options) {
    const Default = {
        description: '',
        callbackURL: '',
        idModel: '',
    }
    let url = `${BASE_URL}/${idToken}/webhooks/${idWebhook}?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Delete webhook created by token by Id Token and Id Webhook.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @param {string} idWebhook
 * @returns {Promise<*>}
 */
Trello.prototype.deleteWebhookCreatedByToken = async function (idToken, idWebhook) {
    const url = `${BASE_URL}/${idToken}/webhooks/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Delete token by Id Token.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idToken
 * @returns {Promise<*>}
 */
Trello.prototype.deleteToken = async function (idToken) {
    const url = `${BASE_URL}/${idToken}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}