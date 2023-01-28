const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/search";


/**
 * Search Trello
 * @async
 * @function
 * @memberOf Trello
 * @param query
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.searchTrello = async function (query, options) {
    const Defaults = {
        modelTypes: '',
        partial: '',
        idBoards: '',
        idOrganizations: '',
        idCards: '',
        idMembers: '',
        card_fields: '',
        board_fields: '',
        organization_fields: '',
        member_fields: '',
        partial: '',
        card_board: '',
        card_list: '',
        card_members: '',
        card_member_fields: '',
        card_stickers: '',
        card_attachments: '',
        board_fields: '',
        board_lists: '',
        board_memberships: '',
        board_organization: '',
        board_organization_fields: '',
        board_organization_memberships: '',
        organization_fields: '',
        organization_memberships: '',
        member_fields: '',
        member_boards: '',
    }
    let url = `${BASE_URL}?query=${query}&key=${this.key}&token=${this.token}`;
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

/**
 * Search Members
 * @async
 * @function
 * @memberOf Trello
 * @param query
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.searchMembers = async function (query, options) {
    const Defaults = {
        limit: '',
        idBoard: '',
        idOrganizations: '',
        onlyOrgMembers: '',
    }
    let url = `${BASE_URL}/members?query=${query}&key=${this.key}&token=${this.token}`;
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
