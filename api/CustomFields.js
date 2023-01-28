const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/customFields";

Trello.prototype.createCustomField = async function (idModel, modelType, name, type, pos, options) {
    const Defaults = {
        options: '',
        display_cardFront: '',
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

Trello.prototype.getCustomField = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateCustomField = async function (idCustomField, options) {
    const Defaults = {
        name: '',
        pos: '',
        display_cardFront: '',
    }
    let url = `${BASE_URL}/${idCustomField}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.deleteCustomField = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getCustomFieldOptions = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}/options?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createCustomFieldOption = async function (idCustomField) {
    const url = `${BASE_URL}/${idCustomField}/options?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getCustomFieldOption = async function (idCustomField, idOption) {
    const url = `${BASE_URL}/${idCustomField}/options/${idOption}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.deleteCustomFieldOption = async function (idCustomField, idOption) {
    const url = `${BASE_URL}/${idCustomField}/options/${idOption}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}