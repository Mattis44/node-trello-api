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
require('./api/CustomFields.js')
require('./api/Emoji.js')
require('./api/Labels.js')
require('./api/List.js')
require('./api/Members.js')
require('./api/Plugins')
require('./api/Search.js')
require('./api/Tokens.js')
require('./api/Webhooks')
