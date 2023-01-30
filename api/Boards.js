const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/boards';


/**
 * Get Board Membership by id Board.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardMembership = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/memberships?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoard = async function (boardId) {
    const url = `${BASE_URL}/${boardId}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {Object} options - {name, desc, descData, closed, subscribed, idOrganization, prefs_permissionLevel, prefs_voting, prefs_comments, prefs_invitations, prefs_selfJoin, prefs_cardCovers, prefs_background, prefs_cardAging, prefs_calendarFeedEnabled, labelNames_green, labelNames_yellow, labelNames_orange, labelNames_red, labelNames_purple, labelNames_blue
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoard = async function (boardId, options) {
    const defaults = {
        name: '',
        desc: '',
        descData: null,
        closed: null,
        subscribed: null,
        idOrganization: '',
        prefs_permissionLevel: '',
        prefs_voting: '',
        prefs_comments: '',
        prefs_invitations: '',
        prefs_selfJoin: '',
        prefs_cardCovers: '',
        prefs_background: '',
        prefs_cardAging: '',
        prefs_calendarFeedEnabled: '',
        labelNames_green: '',
        labelNames_yellow: '',
        labelNames_orange: '',
        labelNames_red: '',
        labelNames_purple: '',
        labelNames_blue: '',
    }
    options = Object.assign({}, defaults, options);
    let url = `${BASE_URL}/${boardId}?key=${this.key}&token=${this.token}`;
    for (let key in options) {
        if (options[key] !== null && options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Delete Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.deleteBoard = async function (boardId) {
    const url = `${BASE_URL}/${boardId}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Board Field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardField = async function (boardId, field) {
    const url = `${BASE_URL}/${boardId}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Board Actions by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {Object} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardActions = async function (boardId, options) {
    const defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${boardId}/actions?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
        const response = await fetch(url, {method: 'GET', headers: this.headers})
        const json = await response.json();
        return json;
    }
}

/**
 * Get Board Cards by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} idCard
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardCard = async function (boardId, idCard) {
    const url = `${BASE_URL}/${boardId}/cards/${idCard}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Board stars of a board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardboardStars = async function (boardId, options) {
    const defaults = {
        filter: ''
    }
    let url = `${BASE_URL}/${boardId}/boardStars?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
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
 * Get Board Checklists by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardChecklists = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/checklists?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Card of a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardCards = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/cards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Filtered Cards of a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} filter
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardFilteredCards = async function (boardId, filter) {
    const url = `${BASE_URL}/${boardId}/cards/${filter}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Board Custom Fields by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardCustomFields = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/customFields?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Labels of a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {Object} options - {fields, limit}
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardLabels = async function (boardId, options) {
    const defaults = {
        fields: '',
        limit: null,
    }
    let url = `${BASE_URL}/${boardId}/labels?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create a Label for a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {Object} options - {name, color}
 * @returns {Promise<*>}
 */
Trello.prototype.createBoardLabel = async function (boardId, options) {
    const defaults = {
        name: '',
        color: null,
    }
    let url = `${BASE_URL}/${boardId}/labels?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get Lists of a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {Object} options - {filter, fields, limit, cards, card_fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardLists = async function (boardId, options) {
    const defaults = {
        filter: '',
        fields: '',
        limit: null,
        cards: null,
        card_fields: '',
    }
    let url = `${BASE_URL}/${boardId}/lists?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create a List for a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} name
 * @param {Object} options - {pos}
 * @returns {Promise<*>}
 */
Trello.prototype.createBoardList = async function (boardId, name, options) {
    const defaults = {
        pos: null,
    }
    let url = `${BASE_URL}/${boardId}/lists?key=${this.key}&token=${this.token}&name=${name}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get Filtered Lists of a Board by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} filter
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardFilteredLists = async function (boardId, filter) {
    const url = `${BASE_URL}/${boardId}/lists/${filter}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Get Members of a Board by id.
 * @async
 * @function
 * @memberOf {string} Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardMembers = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/members?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Invite a Member to a Board by his email.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} email
 * @param {Object} options - {type, fullName}
 * @returns {Promise<*>}
 */
Trello.prototype.inviteMemberEmailToBoard = async function (boardId, email, options) {
    const defaults = {
        type: '',
        fullName: '',
    }
    let url = `${BASE_URL}/${boardId}/members?key=${this.key}&token=${this.token}&email=${email}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Add a member to a board by his id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} memberId
 * @param {string} type
 * @param {Object} options - {allowBillableGuest}
 * @returns {Promise<*>}
 */
Trello.prototype.addBoardMember = async function (boardId, memberId, type, options) {
    const defaults = {
        allowBillableGuest: null,
    }
    let url = `${BASE_URL}/${boardId}/members/${memberId}?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove a member from a board by his id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} memberId
 * @returns {Promise<*>}
 */
Trello.prototype.removeBoardMember = async function (boardId, memberId) {
    const url = `${BASE_URL}/${boardId}/members/${memberId}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the Membership of a Member on a Board.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} membershipId
 * @param {string} type
 * @param {Object} options - {member_fields}
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardMembership = async function (boardId, membershipId, type, options) {
    const defaults = {
        member_fields: '',
    }
    let url = `${BASE_URL}/${boardId}/memberships/${membershipId}?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update the board email position preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardEmailPositionPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/emailPosition?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the board id email list preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardIdEmailListPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/idEmailList?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the board show list guide preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardShowListGuidePref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/showListGuide?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the board show sidebar preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardShowSidebarPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/showSidebar?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the board show sidebar activity preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardShowSidebarActivityPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/showSidebarActivity?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the board show sidebar board actions preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardShowSidebarBoardActionsPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/showSidebarBoardActions?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Update the board show sidebar board members preference.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateBoardShowSidebarMembersPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/myPrefs/showSidebarMembers?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Create a Board
 * @async
 * @function
 * @memberOf Trello
 * @param {string} name
 * @param {Object} options - {desc, idOrganization, idBoardSource, keepFromSource, powerUps, prefs_permissionLevel, prefs_voting, prefs_comments, prefs_invitations, prefs_selfJoin, prefs_cardCovers, prefs_background, prefs_cardAging
 * @returns {Promise<*>}
 */
Trello.prototype.createBoard = async function (name, options) {
    const defaults = {
        desc: '',
        idOrganization: '',
        idBoardSource: '',
        keepFromSource: '',
        powerUps: '',
        prefs_permissionLevel: '',
        prefs_voting: '',
        prefs_comments: '',
        prefs_invitations: '',
        prefs_selfJoin: '',
        prefs_cardCovers: '',
        prefs_background: '',
        prefs_cardAging: '',
    }
    let url = `${BASE_URL}?key=${this.key}&token=${this.token}&name=${name}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create a Board Calendar Key
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.createBoardCalendarKey = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/calendarKey/generate?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Create a Board Email Key
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.createBoardEmailKey = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/emailKey/generate?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}


/**
 * Create a board tag
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.createBoardTag = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/idTags?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * Mark a board as viewed
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.markBoardAsViewed = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/markAsViewed?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * get Board enabled PowerUps
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardEnabledPowerUps = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/boardPlugins?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

/**
 * get Board PowerUps
 * @async
 * @function
 * @memberOf Trello
 * @param {string} boardId
 * @param {Object} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getBoardPowerUps = async function (boardId, options) {
    const defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${boardId}/plugins?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}