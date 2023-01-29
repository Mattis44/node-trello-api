/**
 * A class representating the Trello API.
 * @class
 * @classdesc A class for making requests to the Trello API.
 * @param {string} key - The API key for your Trello account.
 * @param {string} token - The API token for your Trello account.
 */
class Trello {

    /**
     * Create an instance of Trello
     * @constructor
     * @param {string} key
     * @param {string} token
     */
    constructor(key, token) {
        this.key = key;
        this.token = token;
        this.headers = {
            'Accept': 'application/json',
        }
    }

}
module.exports = Trello;


require('./api/Actions.js')
require('./api/Applications.js')
require('./api/Batch.js')
require('./api/Boards.js')
require('./api/Cards.js')
require('./api/Checklists.js')
require('./api/CustomFields.js')
require('./api/Emoji.js')
require('./api/Enterprises.js')
require('./api/Labels.js')
require('./api/Lists.js')
require('./api/Members.js')
require('./api/Notifications.js')
require('./api/Organizations.js')
require('./api/Plugins.js')
require('./api/Search.js')
require('./api/Tokens.js')
require('./api/Webhooks.js')
