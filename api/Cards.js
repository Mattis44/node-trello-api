const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/cards";

Trello.prototype.createCard = async function (idList, name, options) {
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
    const response = await fetch(url, {method: 'POST', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}


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

Trello.prototype.deleteCard = async function (idCard) {
    let url = `${BASE_URL}/${idCard}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getCardField = async function (idCard, field) {
    let url = `${BASE_URL}/${idCard}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteCardAttachment = async function (idCard, idAttachment) {
    let url = `${BASE_URL}/${idCard}/attachments/${idAttachment}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteCardCheckItem = async function (idCard, idCheckItem) {
    let url = `${BASE_URL}/${idCard}/checkItem/${idCheckItem}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.addCardMemberVote = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/membersVoted?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getCardPluginData = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/pluginData?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.updateCardCommentAction = async function (idCard, idAction, text) {
    let url = `${BASE_URL}/${idCard}/actions/${idAction}?key=${this.key}&token=${this.token}&text=${text}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.deleteCardComment = async function (idCard, idAction) {
    let url = `${BASE_URL}/${idCard}/actions/${idAction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateCardCustomFieldItem = async function (idCard, idCustomField) {
    let url = `${BASE_URL}/${idCard}/customField/${idCustomField}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getCardCustomFieldItem = async function (idCard, idCustomField) {
    let url = `${BASE_URL}/${idCard}/customField/${idCustomField}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.addCardComment = async function (idCard, text) {
    let url = `${BASE_URL}/${idCard}/actions/comments?key=${this.key}&token=${this.token}&text=${text}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.markCardNotificationAsRead = async function (idCard) {
    let url = `${BASE_URL}/${idCard}/markAssociatedNotificationsRead?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.removeCardLabel = async function (idCard, idLabel) {
    let url = `${BASE_URL}/${idCard}/idLabels/${idLabel}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.removeCardMember = async function (idCard, idMember) {
    let url = `${BASE_URL}/${idCard}/idMembers/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.removeCardMemberVote = async function (idCard, idMember) {
    let url = `${BASE_URL}/${idCard}/membersVoted/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteCardChecklist = async function (idCard, idChecklist) {
    let url = `${BASE_URL}/${idCard}/checklist/${idChecklist}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}