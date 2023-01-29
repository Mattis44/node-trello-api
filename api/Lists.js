const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/lists";


/**
 * Get list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getList = async function (idList, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idList}?key=${this.key}&token=${this.token}`;
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
 * Update list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {Object} options - {name, closed, idBoard, pos, subscribed}
 * @returns {Promise<*>}
 */
Trello.prototype.updateList = async function (idList, options) {
    const Defaults = {
        name: '',
        closed: '',
        idBoard: '',
        pos: '',
        subscribed: '',
    }
    let url = `${BASE_URL}/${idList}?key=${this.key}&token=${this.token}`;
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
 * Create a list on a board.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} name
 * @param {string} idBoard
 * @param {Object} options - {idListSource, pos}
 * @returns {Promise<*>}
 */
Trello.prototype.CreateList = async function (name, idBoard, options) {
    const Defaults = {
        idListSource: '',
        pos: '',
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
 * Archive card of a list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @returns {Promise<*>}
 */
Trello.prototype.archiveListCards = async function (idList) {
    const url = `${BASE_URL}/${idList}/archiveAllCards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Move all cards of a list to another list.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {string} idList2
 * @param {string} idBoard
 * @returns {Promise<*>}
 */
Trello.prototype.moveListCards = async function (idList, idList2, idBoard) {
    const url = `${BASE_URL}/${idList}/moveAllCards?idBoard=${idBoard}&idList=${idList2}&key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Achive or unarchive list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {Object} options - {value}
 * @returns {Promise<*>}
 */
Trello.prototype.archiveOrUnarchiveList = async function (idList, options) {
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${idList}/closed?key=${this.key}&token=${this.token}`;
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
 * Move list to another board.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {string} idBoard
 * @returns {Promise<*>}
 */
Trello.prototype.moveListToBoard = async function (idList, idBoard) {
    const url = `${BASE_URL}/${idList}/idBoard?idBoard=${idBoard}&key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update fields of a list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {string} field
 * @param {Object} options - {value}
 * @returns {Promise<*>}
 */
Trello.prototype.updateListFields = async function (idList, field, options) {
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${idList}/${field}?key=${this.key}&token=${this.token}`;
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
 * Get list actions by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {Object} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getListActions = async function (idList, options) {
    const Defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${idList}/actions?key=${this.key}&token=${this.token}`;
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
 * Get list board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getListBoard = async function (idList, options) {
const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idList}/board?key=${this.key}&token=${this.token}`;
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
 * Get list cards by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @returns {Promise<*>}
 */
Trello.prototype.getListCards = async function (idList) {
    const url = `${BASE_URL}/${idList}/cards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}