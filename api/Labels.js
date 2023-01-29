const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/labels";


/**
 * Get label by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idLabel
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getLabel = async function (idLabel, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idLabel}?key=${this.key}&token=${this.token}`;
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
 * Update label by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idLabel
 * @param {Object} options - {color, name}
 * @returns {Promise<*>}
 */
Trello.prototype.updateLabel = async function (idLabel, options) {
    const Defaults = {
        color: '',
        name: '',
    }
    let url = `${BASE_URL}/${idLabel}?key=${this.key}&token=${this.token}`;
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
 * Delete label by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idLabel
 * @returns {Promise<*>}
 */
Trello.prototype.deleteLabel = async function (idLabel) {
    const url = `${BASE_URL}/${idLabel}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update label field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idLabel
 * @param {string} field
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateLabelField = async function (idLabel, field, value) {
    const url = `${BASE_URL}/${idLabel}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create label.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idBoard
 * @param {string} name
 * @param {string} color
 * @returns {Promise<*>}
 */
Trello.prototype.createLabel = async function (idBoard, name, color) {
    const url = `${BASE_URL}?key=${this.key}&token=${this.token}&idBoard=${idBoard}&name=${name}&color=${color}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}
