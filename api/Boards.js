const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/boards';

Trello.prototype.getBoardMembership = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/memberships?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoard = async function (boardId) {
    const url = `${BASE_URL}/${boardId}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteBoard = async function (boardId) {
    const url = `${BASE_URL}/${boardId}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardField = async function (boardId, field) {
    const url = `${BASE_URL}/${boardId}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

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
        const response = await fetch(url, {method: 'GET', headers: this.headers}, body = JSON.stringify(options))
        const json = await response.json();
        return json;
    }
}

Trello.prototype.getBoardCard = async function (boardId, idCard) {
    const url = `${BASE_URL}/${boardId}/cards/${idCard}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'GET', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardChecklists = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/checklists?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardCards = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/cards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardFilteredCards = async function (boardId, filter) {
    const url = `${BASE_URL}/${boardId}/cards/${filter}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardCustomFields = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/customFields?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'GET', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'POST', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'GET', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

Trello.prototype.createBoardList = async function (boardId, options) {
    const defaults = {
        name: '',
        pos: null,
    }
    let url = `${BASE_URL}/${boardId}/lists?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, defaults, options);
    for (let key in options) {
        if (options[key] !== '' && options[key] !== null) {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'POST', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardFilteredLists = async function (boardId, filter) {
    const url = `${BASE_URL}/${boardId}/lists/${filter}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardMembers = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/members?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'POST', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'PUT', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

Trello.prototype.removeBoardMember = async function (boardId, memberId) {
    const url = `${BASE_URL}/${boardId}/members/${memberId}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers});
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'PUT', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardEmailPositionPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/emailPosition?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardIdEmailListPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/idEmailList?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardShowListGuidePref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/showListGuide?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardShowSidebarPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/showSidebar?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardShowSidebarActivityPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/showSidebarActivity?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardShowSidebarBoardActionsPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/showSidebarBoardActions?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.updateBoardShowSidebarMembersPref = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/showSidebarMembers?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers});
    const json = await response.json();
    return json;
}

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
    const response = await fetch(url, {method: 'POST', headers: this.headers}, body = JSON.stringify(options))
    const json = await response.json();
    return json;
}

Trello.prototype.createBoardCalendarKey = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/calendarKey?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.createBoardEmailKey = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/emailKey?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.createBoardTag = async function (boardId, value) {
    const url = `${BASE_URL}/${boardId}/tags?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.markBoardAsViewed = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/markAsViewed?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardEnabledPowerUps = async function (boardId) {
    const url = `${BASE_URL}/${boardId}/boardPlugins?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}

Trello.prototype.getBoardPowerUps = async function (boardId, options) {
    const defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${boardId}/boardPlugins/all?key=${this.key}&token=${this.token}`;
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