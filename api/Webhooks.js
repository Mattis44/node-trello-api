const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/webhooks";

Trello.prototype.createWebhook = async function (idModel, callbackURL, options) {
    const Defaults = {
        description: '',
        active: '',
    }
    let url = `${BASE_URL}?key=${this.key}&token=${this.token}&idModel=${idModel}&callbackURL=${callbackURL}`;
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

Trello.prototype.getWebhook = async function (idWebhook) {
    const url = `${BASE_URL}/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateWebhook = async function (idWebhook, options) {
    const Defaults = {
        description: '',
        callbackURL: '',
        idModel: '',
        active: '',
    }
    let url = `${BASE_URL}/${idWebhook}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.deleteWebhook = async function (idWebhook) {
    const url = `${BASE_URL}/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getWebhookField = async function (idWebhook, field) {
    const url = `${BASE_URL}/${idWebhook}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}