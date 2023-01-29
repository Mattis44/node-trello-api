const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/notifications';

/**
 * Get notification by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {board, board_fields, card, card_fields, display, entities, fields, list, member, member_fields, memberCreator, memberCreator_fields, organization, organization_fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotification = async function (idNotification, options) {
    const Defaults = {
        board: '',
        board_fields: '',
        card: '',
        card_fields: '',
        display: '',
        entities: '',
        fields: '',
        list: '',
        member: '',
        member_fields: '',
        memberCreator: '',
        memberCreator_fields: '',
        organization: '',
        organization_fields: '',
    }
    let url = `${BASE_URL}/${idNotification}?key=${this.key}&token=${this.token}`;
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
 * Update notification Read status by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {unread}
 * @returns {Promise<*>}
 */
Trello.prototype.updateNotificationReadStatus = async function (idNotification, options) {
    const Defaults = {
        unread: '',
    }
    let url = `${BASE_URL}/${idNotification}?key=${this.key}&token=${this.token}`;
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
 * Get notification field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationField = async function (idNotification, field) {
    const url = `${BASE_URL}/${idNotification}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Mark all notifications as read.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} options - {read, ids}
 * @returns {Promise<*>}
 */
Trello.prototype.markAllNotificationsAsRead = async function (options) {
    const Defaults = {
        read: '',
        ids: '',
    }
    let url = `${BASE_URL}/all/read?key=${this.key}&token=${this.token}`;
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
 * Update notifications read status.
 * @async
 * @function
 * @memberOf Trello
 * @param id
 * @param options - {value}
 * @returns {Promise<*>}
 */
Trello.prototype.updateNotificationsReadStatus = async function (id, options){
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${id}/unread?key=${this.key}&token=${this.token}`;
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
 * Get notification board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationBoard = async function (idNotification, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idNotification}/board?key=${this.key}&token=${this.token}`;
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
 * Get notification card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {string} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationCard = async function (idNotification, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idNotification}/card?key=${this.key}&token=${this.token}`;
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
 * Get notification list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationList = async function (idNotification, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idNotification}/list?key=${this.key}&token=${this.token}`;
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
 * Get notification member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationMember = async function (idNotification, options) {
const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idNotification}/member?key=${this.key}&token=${this.token}`;
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
 * Get notification member creator by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationMemberCreator = async function (idNotification, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idNotification}/memberCreator?key=${this.key}&token=${this.token}`;
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
 * Get notification organization by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idNotification
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getNotificationOrganization = async function (idNotification, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idNotification}/organization?key=${this.key}&token=${this.token}`;
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