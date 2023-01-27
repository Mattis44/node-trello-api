const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/batch';


Trello.prototype.Batch = async function (urls) {
    const url = `${BASE_URL}?urls=${urls}&key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers});
    const json = await response.json();
    return json;
}