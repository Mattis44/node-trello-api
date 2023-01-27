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


require('./api/Boards.js');