const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/actions';


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

Trello.prototype.updateAction = async function (idAction, text) {
    const url = `${BASE_URL}/${idAction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers}, body = JSON.stringify({text: text}))
    const json = await response.json();
    return json;
}

Trello.prototype.deleteAction = async function (idAction) {
    const url = `${BASE_URL}/${idAction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getActionSpecifiedField = async function (idAction, field) {
    const url = `${BASE_URL}/${idAction}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.updateActionComment = async function (idAction, value) {
    const url = `${BASE_URL}/${idAction}/comments?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers}, body = JSON.stringify({value: value}))
    const json = await response.json();
    return json;
}

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

Trello.prototype.deleteActionReactionsId = async function (idAction, idReaction) {
    const url = `${BASE_URL}/${idAction}/reactions/${idReaction}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getActionSummaryReactions = async function (idAction) {
    const url = `${BASE_URL}/${idAction}/reactionsSummary?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}