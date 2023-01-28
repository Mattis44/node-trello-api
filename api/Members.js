const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/members";

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

Trello.prototype.updateMember = async function (idMember, options) {
    const Defaults = {
        fullName: '',
        bio: '',
        initials: '',
        username: '',
        avatarSource: '',
        prefs_colorBlind: '',
        prefs_locale: '',
        prefs_minutesBetweenSummaries: '',
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

Trello.prototype.getMemberField = async function (idMember, field) {
    let url = `${BASE_URL}/${idMember}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.getMemberCustomBoardBackgrounds = async function (idMember, options) {
    const Defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds?key=${this.key}&token=${this.token}`;
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

Trello.prototype.uploadMemberNewBoardBackground = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

Trello.prototype.getMemberBoardBackground = async function (idMember, idBoardBackground, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.uploadMemberCustomBoardBackground = async function (idMember, idBoardBackground, options) {
    const Defaults = {
        brightness: '',
        tile: '',
    }
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.deleteMemberCustomBoardBackground = async function (idMember, idBoardBackground) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getMemberBoardStars = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/boardStars?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createBoardStar = async function (idMember, idBoard, pos) {
    let url = `${BASE_URL}/${idMember}/boardStars?key=${this.key}&token=${this.token}&idBoard=${idBoard}&pos=${pos}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getMemberBoardStar = async function (idMember, idStar) {
    let url = `${BASE_URL}/${idMember}/boardStars/${idStar}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteBoardStar = async function (idMember, idStar) {
    let url = `${BASE_URL}/${idMember}/boardStars/${idStar}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.getMemberCustomBoardBackgrounds = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createMemberNewCustomBoardBackground = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

Trello.prototype.getCustomBoardBackgroundMember = async function (idMember, idBoardBackground) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteCustomBoardBackgroundMember = async function (idMember, idBoardBackground) {
    let url = `${BASE_URL}/${idMember}/customBoardBackgrounds/${idBoardBackground}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getMemberCustomEmoji = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/customEmoji?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createMemberNewCustomEmoji = async function (idMember, file, name) {
    let url = `${BASE_URL}/${idMember}/customEmoji?key=${this.key}&token=${this.token}&name=${name}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

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

Trello.prototype.getMemberCustomStickers = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/customStickers?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createMemberCustomSticker = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/customStickers?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: file})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteMemberCustomSticker = async function (idMember, idSticker) {
    let url = `${BASE_URL}/${idMember}/customStickers/${idSticker}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.getMemberSavedSearched = async function (idMember) {
    let url = `${BASE_URL}/${idMember}/savedSearches?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createMemberSavedSearch = async function (idMember, name, query, pos) {
    let url = `${BASE_URL}/${idMember}/savedSearches?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: {name, query, pos}})
    const json = await response.json();
    return json;
}

Trello.prototype.getMemberSavedSearch = async function (idMember, idSearch) {
    let url = `${BASE_URL}/${idMember}/savedSearches/${idSearch}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteMemberSavedSearch = async function (idMember, idSearch) {
    let url = `${BASE_URL}/${idMember}/savedSearches/${idSearch}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.createMemberAvatar = async function (idMember, file) {
    let url = `${BASE_URL}/${idMember}/avatar?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers, body: {file}})
    const json = await response.json();
    return json;
}

Trello.prototype.dismissMemberMessage = async function (idMember, value) {
    let url = `${BASE_URL}/${idMember}/onTimeMessagesDismissed/${value}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}