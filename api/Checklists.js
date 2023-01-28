const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/checklists';


Trello.prototype.createChecklist = async function (idBoard, options) {
const Defaults = {
        name: '',
        idChecklistSource: '',
        pos: '',
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

Trello.prototype.getChecklist = async function (idChecklist, options) {
    const Defaults = {
        cards: '',
        checkItems: '',
        checkItems_fields: '',
        fields: '',
    }
    let url = `${BASE_URL}/${idChecklist}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.updateChecklist = async function (idChecklist, options) {
    const Defaults = {
        name: '',
        pos: '',
    }
    let url = `${BASE_URL}/${idChecklist}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.deleteChecklist = async function (idChecklist) {
    let url = `${BASE_URL}/${idChecklist}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getChecklistField = async function (idChecklist, field) {
    let url = `${BASE_URL}/${idChecklist}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateChecklistField = async function (idChecklist, field, value) {
    let url = `${BASE_URL}/${idChecklist}/${field}?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getChecklistBoard = async function (idChecklist, options) {
const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idChecklist}/board?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getChecklistCard = async function (idChecklist) {
    let url = `${BASE_URL}/${idChecklist}/cards?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getChecklistCheckItem = async function (idChecklist, options) {
const Defaults = {
        filter: '',
        fields: '',
    }
    let url = `${BASE_URL}/${idChecklist}/checkItems?key=${this.key}&token=${this.token}`;
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

Trello.prototype.createChecklistCheckItem = async function (idChecklist, name, options) {
const Defaults = {
        pos: '',
        checked: '',
        due: '',
        dueReminder: '',
        idMember: '',
    }
    let url = `${BASE_URL}/${idChecklist}/checkItems?key=${this.key}&token=${this.token}&name=${name}`;
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

Trello.prototype.getChecklistCheckItemField = async function (idChecklist, idCheckItem) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idChecklist}/checkItems/${idCheckItem}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.deleteChecklistCheckItem = async function (idChecklist, idCheckItem) {
    let url = `${BASE_URL}/${idChecklist}/checkItems/${idCheckItem}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}
