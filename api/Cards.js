const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/cards";

/**
 * Create a card by id list.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idList
 * @param {Object} options - {name, desc, pos, due, start, dueComplete, idList, idMembers, idLabels, urlSource, fileSource, mimeType, idCardSource, keepFromSource, address, locationName, coordinates}
 * @returns {Promise<*>}
 */
Trello.prototype.createCard = async function (idList, options) {
    const Defaults = {
        name: '',
        desc: '',
        pos: '',
        due: '',
        start: '',
        dueComplete: '',
        idList: '',
        idMembers: '',
        idLabels: '',
        urlSource: '',
        fileSource: '',
        mimeType: '',
        idCardSource: '',
        keepFromSource: '',
        address: '',
        locationName: '',
        coordinates: '',
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
 * Get card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields, actions, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checklists, checklist_fields, list, pluginData, stickers, sticker_fields, customFieldItems}
 * @returns {Promise<*>}
 */
Trello.prototype.getCard = async function (idCard, options) {
    const Defaults = {
        fields: '',
        actions: '',
        attachments: '',
        attachment_fields: '',
        members: '',
        member_fields: '',
        membersVoted: '',
        memberVoted_fields: '',
        checkItemStates: '',
        checklists: '',
        checklist_fields: '',
        list: '',
        pluginData: '',
        stickers: '',
        sticker_fields: '',
        customFieldItems: '',
    }
    let url = `${BASE_URL}/${idCard}?key=${this.key}&token=${this.token}`;
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
 * Update card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {name, desc, pos, due, start, dueComplete, subscribed, address, locationName, coordinates, cover}
 * @returns {Promise<*>}
 */
Trello.prototype.updateCard = async function (idCard, options) {
    const Defaults = {
        name: '',
        desc: '',
        pos: '',
        due: '',
        start: '',
        dueComplete: '',
        subscribed: '',
        address: '',
        locationName: '',
        coordinates: '',
        cover: '',
    }
    let url = `${BASE_URL}/${idCard}?key=${this.key}&token=${this.token}`;
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
 * Delete card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCard = async function (idCard) {
    let url = `${BASE_URL}/${idCard}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get card field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getCardField = async function (idCard, field) {
    let url = `${BASE_URL}/${idCard}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get card actions by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {filter, page}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardActions = async function (idCard, options) {
    const Defaults = {
        filter: '',
        page: '',
    }
    let url = `${BASE_URL}/${idCard}/actions?key=${this.key}&token=${this.token}`;
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
 * Get card attachments by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields, filter}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardAttachments = async function (idCard, options) {
    const Defaults = {
        filter: '',
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/attachments?key=${this.key}&token=${this.token}`;
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
 * Create card attachment by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {name, mimeType, file, setCover, url}
 * @returns {Promise<*>}
 */
Trello.prototype.createCardAttachment = async function (idCard, options) {
    const Defaults = {
        name: '',
        mimeType: '',
        file: '',
        setCover: '',
        url: '',
    }
    let url = `${BASE_URL}/${idCard}/attachments?key=${this.key}&token=${this.token}`;
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
 * Get card attachment by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idAttachment
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardAttachment = async function (idCard, idAttachment, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/attachments/${idAttachment}?key=${this.key}&token=${this.token}`;
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
 * Delete card attachment by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idAttachment
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCardAttachment = async function (idCard, idAttachment) {
    let url = `${BASE_URL}/${idCard}/attachments/${idAttachment}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get the board that a card is on.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardBoard = async function (idCard, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/board?key=${this.key}&token=${this.token}`;
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
 * Get card check items by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardCheckItems = async function (idCard, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/checkItemStates?key=${this.key}&token=${this.token}`;
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
 * Get card checklists by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {checkItems, checkItem_fields, filter, fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardChecklists = async function (idCard, options) {
    const Defaults = {
        checkItems: '',
        checkItem_fields: '',
        filter: '',
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/checklists?key=${this.key}&token=${this.token}`;
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
 * Create card checklist.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {name, idChecklistSource, pos}
 * @returns {Promise<*>}
 */
Trello.prototype.createCardChecklist = async function (idCard, options) {
    const Defaults = {
        name: '',
        idChecklistSource: '',
        pos: '',
    }
    let url = `${BASE_URL}/${idCard}/checklists?key=${this.key}&token=${this.token}`;
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
 * Get card checklist by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idCheckItem
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardCheckItem = async function (idCard, idCheckItem, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/checkItem/${idCheckItem}?key=${this.key}&token=${this.token}`;
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
 * Update card checkitem by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idCheckItem
 * @param {Object} options - {name, pos, state}
 * @returns {Promise<*>}
 */
Trello.prototype.updateCardCheckItem = async function (idCard, idCheckItem, options) {
    const Defaults = {
        name: '',
        state: '',
        pos: '',
    }
    let url = `${BASE_URL}/${idCard}/checkItem/${idCheckItem}?key=${this.key}&token=${this.token}`;
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
 * Delete card checkitem by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idCheckItem
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCardCheckItem = async function (idCard, idCheckItem) {
    let url = `${BASE_URL}/${idCard}/checkItem/${idCheckItem}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get card list by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardList = async function (idCard, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/list?key=${this.key}&token=${this.token}`;
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
 * Get card members by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardMembers = async function (idCard, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/members?key=${this.key}&token=${this.token}`;
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
 * Get members voted on a card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getMembersVotedOnACard = async function (idCard, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/membersVoted?key=${this.key}&token=${this.token}`;
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
 * Add member voted on a card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @returns {Promise<*>}
 */
Trello.prototype.addCardMemberVote = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/membersVoted?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get card plugin data by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @returns {Promise<*>}
 */
Trello.prototype.getCardPluginData = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/pluginData?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get card sticker by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardStickers = async function (idCard, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/stickers?key=${this.key}&token=${this.token}`;
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
 * Add card sticker by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param image
 * @param top
 * @param left
 * @param zIndex
 * @param {Object} options - {rotate}
 * @returns {Promise<*>}
 */
Trello.prototype.addCardSticker = async function (idCard, image, top, left, zIndex, options) {
    const Defaults = {
        rotate: '',
    }
    let url = `${BASE_URL}/${idCard}/stickers?key=${this.key}&token=${this.token}&image=${image}&top=${top}&left=${left}&zIndex=${zIndex}`;
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
 * Get card sticker by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idSticker
 * @param {Object} options - {fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getCardSticker = async function (idCard, idSticker, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idCard}/stickers/${idSticker}?key=${this.key}&token=${this.token}`;
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
 * Update card sticker by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idSticker
 * @param image
 * @param top
 * @param left
 * @param zIndex
 * @param {Object} options - {rotate}
 * @returns {Promise<*>}
 */
Trello.prototype.updateCardSticker = async function (idCard, idSticker, image, top, left, zIndex, options) {
    const Defaults = {
        rotate: '',
    }
    let url = `${BASE_URL}/${idCard}/stickers/${idSticker}?key=${this.key}&token=${this.token}&image=${image}&top=${top}&left=${left}&zIndex=${zIndex}`;
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
 * Delete card sticker by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idSticker
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCardSticker = async function (idCard, idSticker) {
    let url = `${BASE_URL}/${idCard}/stickers/${idSticker}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update Card comment action by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idAction
 * @param {string} text
 * @returns {Promise<*>}
 */
Trello.prototype.updateCardCommentAction = async function (idCard, idAction, text) {
    let url = `${BASE_URL}/${idCard}/actions/${idAction}/comments?key=${this.key}&token=${this.token}&text=${text}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Delete Card comment action by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idAction
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCardComment = async function (idCard, idAction) {
    let url = `${BASE_URL}/${idCard}/actions/${idAction}/comments?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update card custom field item by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idCustomField
 * @returns {Promise<*>}
 */
Trello.prototype.updateCardCustomFieldItem = async function (idCard, idCustomField) {
    let url = `${BASE_URL}/${idCard}/customField/${idCustomField}/item?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get card custom field item by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @returns {Promise<*>}
 */
Trello.prototype.getCardCustomFieldItems = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/customFieldItems?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Add comment to card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} text
 * @returns {Promise<*>}
 */
Trello.prototype.addCardComment = async function (idCard, text) {
    let url = `${BASE_URL}/${idCard}/actions/comments?key=${this.key}&token=${this.token}&text=${text}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Add label to card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {value}
 * @returns {Promise<*>}
 */
Trello.prototype.addCardLabel = async function (idCard, options) {
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${idCard}/idLabels?key=${this.key}&token=${this.token}`;
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
 * Add member to card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {Object} options - {value}
 * @returns {Promise<*>}
 */
Trello.prototype.addCardMember = async function (idCard, options) {
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${idCard}/idMembers?key=${this.key}&token=${this.token}`;
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
 * Create new label for card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} color
 * @param {Object} options - {name}
 * @returns {Promise<*>}
 */
Trello.prototype.createCardNewLabel = async function (idCard, color, options) {
    const Defaults = {
        name: '',
    }
    let url = `${BASE_URL}/${idCard}/labels?key=${this.key}&token=${this.token}&color=${color}`;
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
 * Mark card notification as read by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @returns {Promise<*>}
 */
Trello.prototype.markCardNotificationAsRead = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/markAssociatedNotificationsRead?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove label from card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idLabel
 * @returns {Promise<*>}
 */
Trello.prototype.removeCardLabel = async function (idCard, idLabel) {
    let url = `${BASE_URL}/${idCard}/idLabels/${idLabel}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove member from card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.removeCardMember = async function (idCard, idMember) {
    let url = `${BASE_URL}/${idCard}/idMembers/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove member vote from card by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.removeCardMemberVote = async function (idCard, idMember) {
    let url = `${BASE_URL}/${idCard}/membersVoted/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update card check item on checklist by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idChecklist
 * @param {string}idCheckItem
 * @param {Object} options - {pos}
 * @returns {Promise<*>}
 */
Trello.prototype.updateCardCheckItemOnChecklist = async function (idCard, idChecklist, idCheckItem, options) {
    const Defaults = {
        pos: '',
    }
    let url = `${BASE_URL}/${idCard}/checklist/${idChecklist}/checkItem/${idCheckItem}?key=${this.key}&token=${this.token}`;
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
 * Delete card check item on checklist by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idCard
 * @param {string} idChecklist
 * @returns {Promise<*>}
 */
Trello.prototype.deleteCardChecklist = async function (idCard, idChecklist) {
    let url = `${BASE_URL}/${idCard}/checklist/${idChecklist}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}