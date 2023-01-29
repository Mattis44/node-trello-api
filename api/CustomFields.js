const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/customFields";

/**
 * Create custom field.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idModel
 * @param {string} modelType
 * @param {string} name
 * @param {string} type
 * @param {string} pos
 * @param {Object} options - {options, display/cardFront}
 * @returns {Promise<*>}
 */
Trello.prototype.createCustomField = async function (idModel, modelType, name, type, pos, options) {
    const Defaults = {
        options: '',
        "display/cardFront": '',
    }
    let url = `${BASE_URL}?key=${this.key}&token=${this.token}`;
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
 * Get custom field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @returns {Promise<*>}
 */
Trello.prototype.getCustomField = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update custom field.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @param {Object} options - {name, pos, display/cardFront}
 * @returns {Promise<*>}
 */
Trello.prototype.updateCustomField = async function (idCustomField, options) {
    const Defaults = {
        name: '',
        pos: '',
        "displaycard/Front": '',
    }
    let url = `${BASE_URL}/${idCustomField}?key=${this.key}&token=${this.token}`;
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
 * Delete custom field.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCustomField = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get custom field options.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @returns {Promise<*>}
 */
Trello.prototype.getCustomFieldOptions = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}/options?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create custom field option.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @returns {Promise<*>}
 */
Trello.prototype.createCustomFieldOption = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}/options?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get custom field option by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @param {string} idOption
 * @returns {Promise<*>}
 */
Trello.prototype.getCustomFieldOption = async function (idCustomField, idOption) {
    const url = `${BASE_URL}/${idCustomField}/options/${idOption}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Delete custom field option by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCustomField
 * @param {string} idOption
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCustomFieldOption = async function (idCustomField, idOption) {
    const url = `${BASE_URL}/${idCustomField}/options/${idOption}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}