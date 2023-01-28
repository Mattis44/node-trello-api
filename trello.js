class Trello {

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
require('./api/Emojis.js')
require('./api/Enterprises.js')
require('./api/Labels.js')
require('./api/Lists.js')
require('./api/Members.js')
require('./api/Notifications.js')
require('./api/Plugins.js')
require('./api/Search.js')
require('./api/Tokens.js')
require('./api/Webhooks.js')
