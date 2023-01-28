const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/tokens";


Trello.prototype.getToken = async function (idToken, options) {
    const Defaults = {
        fields: '',
        webhooks: '',
    }
    let url = `${BASE_URL}/${idToken}?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getTokenMember = async function (idToken, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idToken}/member?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getTokenWebhooks = async function (idToken) {
    const url = `${BASE_URL}/${idToken}/webhooks?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createTokenWebhook = async function (idToken, callbackURL, idModel, options) {
    const Default = {
        description: '',
    }
    let url = `${BASE_URL}/${idToken}/webhooks?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getWebhookBelongingToToken = async function (idToken, idWebhook) {
    const url = `${BASE_URL}/${idToken}/webhooks/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateWebhookCreatedByToken = async function (idToken, idWebhook, options) {
    const Default = {
        description: '',
        callbackURL: '',
        idModel: '',
    }
    let url = `${BASE_URL}/${idToken}/webhooks/${idWebhook}?key=${this.key}&token=${this.token}`;
    options = Object.assign({}, Default, options);
    for (let key in options) {
        if (options[key] !== '') {
            url += `&${key}=${options[key]}`;
        }
    }
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.deleteWebhookCreatedByToken = async function (idToken, idWebhook) {
    const url = `${BASE_URL}/${idToken}/webhooks/${idWebhook}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.deleteToken = async function (idToken) {
    const url = `${BASE_URL}/${idToken}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}