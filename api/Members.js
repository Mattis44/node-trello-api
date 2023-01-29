const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/members";

/**
 * Get member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {actions, boards, boardBackgrounds, boardsInvited, boardsInvited_fields, boardStars, cards, customBoardBackgrounds, customEmoji, customStickers, fields, notifications, organizations, organization_fields, organization_paid_account, organizationInvited, organizationInvited_fields, paid_account, savedSearches, tokens}
 * @returns {Promise<*>}
 */
Trello.prototype.getMember = async function (idMember, options) {
    const Defaults = {
        actions: '',
        boards: '',
        boardBackgrounds: '',
        boardsInvited: '',
        boardsInvited_fields: '',
        boardStars: '',
        cards: '',
        customBoardBackgrounds: '',
        customEmoji: '',
        customStickers: '',
        fields: '',
        notifications: '',
        organizations: '',
        organization_fields: '',
        organization_paid_account: '',
        organizationInvited: '',
        organizationInvited_fields: '',
        paid_account: '',
        savedSearches: '',
        tokens: '',
    }
    let url = `${BASE_URL}/${idMember}?key=${this.key}&token=${this.token}`;
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
 * Update member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {fullName, bio, initials, username, avatarSource, prefs_colorBlind, prefs_locale, prefs_minutesBetweenSummaries}
 * @returns {Promise<*>}
 */
Trello.prototype.updateMember = async function (idMember, options) {
    const Defaults = {
        fullName: '',
        bio: '',
        initials: '',
        username: '',
        avatarSource: '',
        "prefs/colorBlind": '',
        "prefs/locale": '',
        "prefs/minutesBetweenSummaries": '',
    }
    let url = `${BASE_URL}/${idMember}?key=${this.key}&token=${this.token}`;
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
 * Get member field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberField = async function (idMember, field) {
    let url = `${BASE_URL}/${idMember}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update member action by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberActions = async function (idMember, options) {
    const Defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${idMember}/actions?key=${this.key}&token=${this.token}`;
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
 * Get member custom board backgrounds by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberCustomBoardBackgrounds = async function (idMember, options) {
    const Defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${idMember}/boardBackgrounds?key=${this.key}&token=${this.token}`;
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
 * Upload member new board background by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param file
 * @returns {Promise<*>}
 */
Trello.prototype.uploadMemberNewBoardBackground = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/boardBackgrounds?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

/**
 * Get member board background by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoardBackground
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberBoardBackground = async function (idMember, idBoardBackground, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/BoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
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
 * Upload member custom board background by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoardBackground
 * @param {Object} options - {brightness, tile}
 * @returns {Promise<*>}
 */
Trello.prototype.uploadMemberCustomBoardBackground = async function (idMember, idBoardBackground, options) {
    const Defaults = {
        brightness: '',
        tile: '',
    }
    let url = `${BASE_URL}/${idMember}/boardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Defaults, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'PUT', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

/**
 * Delete member custom board background by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoardBackground
 * @returns {Promise<*>}
 */
Trello.prototype.deleteMemberCustomBoardBackground = async function (idMember, idBoardBackground) {
    let url = `${BASE_URL}/${idMember}/boardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get member board stars by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberBoardStars = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/boardStars?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create member board star by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoard
 * @param {string} pos
 * @returns {Promise<*>}
 */
Trello.prototype.createBoardStar = async function (idMember, idBoard, pos) {
    let url = `${BASE_URL}/${idMember}/boardStars?key=${this.key}&token=${this.token}&idBoard=${idBoard}&pos=${pos}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get member board star by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idStar
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberBoardStar = async function (idMember, idStar) {
    let url = `${BASE_URL}/${idMember}/boardStars/${idStar}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update member board star position by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idStar
 * @param {Object} options - {pos}
 * @returns {Promise<*>}
 */
Trello.prototype.updateMemberBoardStarPosition = async function (idMember, idStar, options) {
    const Defaults = {
        pos: '',
    }
    let url = `${BASE_URL}/${idMember}/boardStars/${idStar}?key=${this.key}&token=${this.token}`;
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
 * Delete member board star by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idStar
 * @returns {Promise<*>}
 */
Trello.prototype.deleteBoardStar = async function (idMember, idStar) {
    let url = `${BASE_URL}/${idMember}/boardStars/${idStar}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get member boards by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string}idMember
 * @param {Object} options - {filter, fields, lists, organization, organization_fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberBoards = async function (idMember, options) {
    const Defaults = {
        filter: '',
        fields: '',
        lists: '',
        organization: '',
        organization_fields: '',
    }
    let url = `${BASE_URL}/${idMember}/boards?key=${this.key}&token=${this.token}`;
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
 * Get member boards invited by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberBoardsInvited = async function (idMember, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/boardsInvited?key=${this.key}&token=${this.token}`;
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
 * Get cards of a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberCard = async function (idMember, options) {
    const Default = {
        filter: '',
    }
    let url = `${BASE_URL}/${idMember}/cards?key=${this.key}&token=${this.token}`;
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
 * Get custom board backgrounds of a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberCustomBoardBackgrounds = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create new custom board background for a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param file
 * @returns {Promise<*>}
 */
Trello.prototype.createMemberNewCustomBoardBackground = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

/**
 * Get Custom Board Background Member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoardBackground
 * @returns {Promise<*>}
 */
Trello.prototype.getCustomBoardBackgroundMember = async function (idMember, idBoardBackground) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update Custom Board Background Member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoardBackground
 * @param {Object} options - {tile, brightness}
 * @returns {Promise<*>}
 */
Trello.prototype.updateCustomBoardBackgroundMember = async function (idMember, idBoardBackground, options) {
const Defaults = {
        tile: '',
        brightness: '',
    }
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
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
 * Delete Custom Board Background Member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idBoardBackground
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCustomBoardBackgroundMember = async function (idMember, idBoardBackground) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get Custom Emoji of a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberCustomEmoji = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/customEmoji?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create new custom emoji for a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param file
 * @param {string} name
 * @returns {Promise<*>}
 */
Trello.prototype.createMemberNewCustomEmoji = async function (idMember, file, name) {
    let url = `${BASE_URL}/${idMember}/customEmoji?key=${this.key}&token=${this.token}&name=${name}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

/**
 * Get Custom Emoji Member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idEmoji
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCustomEmojiMember = async function (idMember, idEmoji, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/customEmoji/${idEmoji}?key=${this.key}&token=${this.token}`;
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
 * Get Custom Emoji Members by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idEmoji
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCustomEmojiMembers = async function (idMember, idEmoji, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/customEmoji/${idEmoji}/members?key=${this.key}&token=${this.token}`;
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
 * Get Custom Stickers of a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberCustomStickers = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/customStickers?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create new custom sticker for a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param file
 * @returns {Promise<*>}
 */
Trello.prototype.createMemberCustomSticker = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/customStickers?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

/**
 * Get Custom Sticker of a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idSticker
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberCustomSticker = async function (idMember, idSticker, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/customStickers/${idSticker}?key=${this.key}&token=${this.token}`;
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
 * Delete Custom Sticker of a member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idSticker
 * @returns {Promise<*>}
 */
Trello.prototype.deleteMemberCustomSticker = async function (idMember, idSticker) {
    let url = `${BASE_URL}/${idMember}/customStickers/${idSticker}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get member notifications.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {entities, display, filter, read_filter, fields, limit, page, before, since, memberCreator, memberCreator_fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberNotifications = async function (idMember, options) {
    const Defaults = {
        entities: '',
        display: '',
        filter: '',
        read_filter: '',
        fields: '',
        limit: '',
        page: '',
        before: '',
        since: '',
        memberCreator: '',
        memberCreator_fields: '',
    }
    let url = `${BASE_URL}/${idMember}/notifications?key=${this.key}&token=${this.token}`;
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
 * Get member organizations.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {filter, fields, paid_account}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberOrganizations = async function (idMember, options) {
    const Defaults = {
        filter: '',
        fields: '',
        paid_account: '',
    }
    let url = `${BASE_URL}/${idMember}/organizations?key=${this.key}&token=${this.token}`;
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
 * Get member organizations invited.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberOrganizationsInvited = async function (idMember, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/organizationsInvited?key=${this.key}&token=${this.token}`;
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
 * get Member saved searches.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberSavedSearched = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/savedSearches?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create Member saved search.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} name
 * @param query
 * @param {string} pos
 * @returns {Promise<*>}
 */
Trello.prototype.createMemberSavedSearch = async function (idMember, name, query, pos) {
    let url = `${BASE_URL}/${idMember}/savedSearches?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: {name, query, pos}})
    const json = await response.json();
    return json;
}

/**
 * Get Member saved search by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idSearch
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberSavedSearch = async function (idMember, idSearch) {
    let url = `${BASE_URL}/${idMember}/savedSearches/${idSearch}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update Member saved search.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idSearch
 * @param {Object} options - {name, query, pos}
 * @returns {Promise<*>}
 */
Trello.prototype.updateMemberSavedSearch = async function (idMember, idSearch, options) {
    const Defaults = {
        name: '',
        query: '',
        pos: '',
    }
    let url = `${BASE_URL}/${idMember}/savedSearches/${idSearch}?key=${this.key}&token=${this.token}`;
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
 * Delete Member saved search.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} idSearch
 * @returns {Promise<*>}
 */
Trello.prototype.deleteMemberSavedSearch = async function (idMember, idSearch) {
    let url = `${BASE_URL}/${idMember}/savedSearches/${idSearch}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get Member tokens.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {Object} options - {webhooks}
 * @returns {Promise<*>}
 */
Trello.prototype.getMemberTokens = async function (idMember, options) {
    const Defaults = {
        webhooks: '',
    }
    let url = `${BASE_URL}/${idMember}/tokens?key=${this.key}&token=${this.token}`;
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
 * Create member avatar.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param file
 * @returns {Promise<*>}
 */
Trello.prototype.createMemberAvatar = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/avatar?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: {file}})
    const json = await response.json();
    return json;
}

/**
 * Dismiss member message.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idMember
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.dismissMemberMessage = async function (idMember, value) {
    let url = `${BASE_URL}/${idMember}/onTimeMessagesDismissed/${value}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}