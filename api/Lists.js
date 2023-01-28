const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/lists";


Trello.prototype.getList = async function (idList, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idList}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.updateList = async function (idList, options) {
    const Defaults = {
        name: '',
        closed: '',
        idBoard: '',
        pos: '',
        subscribed: '',
    }
    let url = `${BASE_URL}/${idList}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.archiveListCards = async function (idList) {
    const url = `${BASE_URL}/${idList}/archiveAllCards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.moveListCards = async function (idList, idList2, idBoard) {
    const url = `${BASE_URL}/${idList}/moveAllCards?idBoard=${idBoard}&idList=${idList2}&key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.archiveOrUnarchiveList = async function (idList, options) {
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${idList}/closed?key=${this.key}&token=${this.token}`;
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

Trello.prototype.moveListToBoard = async function (idList, idBoard) {
    const url = `${BASE_URL}/${idList}/idBoard?idBoard=${idBoard}&key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateListFIelds = async function (idList, field, options) {
    const Defaults = {
        value: '',
    }
    let url = `${BASE_URL}/${idList}/${field}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getListActions = async function (idList, options) {
    const Defaults = {
        filter: '',
    }
    let url = `${BASE_URL}/${idList}/actions?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getListBoard = async function (idList, options) {
const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idList}/board?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getListCards = async function (idList) {
    const url = `${BASE_URL}/${idList}/cards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}