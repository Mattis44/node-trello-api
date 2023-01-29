const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/actions';


/**
 * Get an action by ID.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction - The ID of the action.
 * @param {Object} options - {display, entities, fields, member, member_fields, memberCreator, memberCreator_fields}
 * @returns {promise<*>}
 */
Trello.prototype.getAction = async function (idAction, options) {
    const Defaults = {
        display: '',
        entities: '',
        fields: '',
        member: '',
        member_fields: '',
        memberCreator: '',
        memberCreator_fields: '',
    }
    let url = `${BASE_URL}/${idAction}?key=${this.key}&token=${this.token}`;
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
 * Update an action by ID.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {string} text
 * @returns {Promise<*>}
 */
Trello.prototype.updateAction = async function (idAction, text) {
    const url = `${BASE_URL}/${idAction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers}, body = JSON.stringify({text: text}))
    const json = await response.json();
    return json;
}

/**
 * Delete an action by ID.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @returns {Promise<*>}
 */

Trello.prototype.deleteAction = async function (idAction) {
    const url = `${BASE_URL}/${idAction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get the action's board for a specified field.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getActionSpecifiedField = async function (idAction, field) {
    const url = `${BASE_URL}/${idAction}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get the action's board.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getActionBoard = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/board?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Get the action's card.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getActionCard = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/card?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Get the action's List.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object} options - {fields}
 * @returns {Promise<Object>}
 */
Trello.prototype.getActionList = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/list?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Get the action's member.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object}options - {fields}
 * @returns {Promise<Object>}
 */
Trello.prototype.getActionMember = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/member?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Get the action's member creator.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getActionMemberCreator = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/memberCreator?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Get the action's organization.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getActionOrganization = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/organization?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Update the action's comment.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateActionComment = async function (idAction, value) {
    const url = `${BASE_URL}/${idAction}/text?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers}, body = JSON.stringify({value: value}))
    const json = await response.json();
    return json;
}

/**
 * Get the action's reactions.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getActionReactions = async function (idAction, options) {
    const Default = {
        fields: '',
    }
    let url = `${BASE_URL}/${idAction}/reactions?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
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
 * Create a reaction on the action.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {Object} options - {shortName, skinVariation, native, unified}
 * @returns {Promise<*>}
 */
Trello.prototype.createActionReaction = async function (idAction, options) {
    const Default = {
        shortName: '',
        skinVariation: '',
        native: '',
        unified: '',
    }
    let url = `${BASE_URL}/${idAction}/reactions?key=${this.key}&token=${this.token}`;
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
 * Get the action's reaction by Id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {string} idReaction
 * @param {Object} options - {member, emoji}
 * @returns {Promise<*>}
 */
Trello.prototype.getActionReactionsId = async function (idAction, idReaction, options) {
    const Defaults = {
        member: '',
        emoji: '',
    }
    let url = `${BASE_URL}/${idAction}/reactions/${idReaction}?key=${this.key}&token=${this.token}`;
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
 * Delete the action's reaction by Id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @param {string} idReaction
 * @returns {Promise<*>}
 */
Trello.prototype.deleteActionReactionsId = async function (idAction, idReaction) {
    const url = `${BASE_URL}/${idAction}/reactions/${idReaction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get the action's reaction summary.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idAction
 * @returns {Promise<*>}
 */
Trello.prototype.getActionSummaryReactions = async function (idAction) {
    const url = `${BASE_URL}/${idAction}/reactionsSummary?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}