const Trello = require("../trello");
const fetch = require("node-fetch");
const BASE_URL = "https://api.trello.com/1/plugins";

Trello.prototype.getPlugin = async function (idPlugin) {
    const url = `${BASE_URL}/${idPlugin}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updatePlugin = async function (idPlugin) {
    const url = `${BASE_URL}/${idPlugin}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.createPluginListing = async function (idPlugin, options) {
    const Defaults = {
        name: '',
        description: '',
        locale: '',
        overview: '',
    }
    let url = `${BASE_URL}/${idPlugin}/listing?key=${this.key}&token=${this.token}`;
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

Trello.prototype.getPluginMemberPrivacy = async function (idPlugin) {
    const url = `${BASE_URL}/${idPlugin}/compliance/memberPrivacy?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updatePluginListing = async function (idPlugin, idListing, options) {
    const Defaults = {
        description: '',
        locale: '',
        overview: '',
        name: '',
    }
    let url = `${BASE_URL}/${idPlugin}/listing/${idListing}?key=${this.key}&token=${this.token}`;
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