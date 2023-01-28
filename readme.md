![Alt test](https://raw.githubusercontent.com/Mattis44/node-trello-api/main/trello-logo/Node-Trello-Logo.png)

A fully asynchronous node module for trello api in CommonJS.


/!\ => Report bugs on my Discord : **Mattis#5249**

## Usage
### Installation using NPM.
```bash
npm i node-trello-api 
```
### Import and use
  ```js
 const trelloClient = require('node-trello-api')
 const Trello = new trelloClient("API_KEY", "API_TOKEN")
```
## Exemples
```js
Trello.getBoard(boardId).then(board => {
console.log(board);
});

(async () => {
	[...]
    const res = await Trello.createBoardList(boardId, {name: "My list"})
    resolve(res)
})
```

## Documentation summary
- [Actions](https://mattis44.github.io/node-trello-api/#actions "Actions")
- [Applications](https://mattis44.github.io/node-trello-api/#applications "Applications")
- [Boards](https://mattis44.github.io/node-trello-api/#boards "Boards")
- [Cards](https://mattis44.github.io/node-trello-api/#cards "Cards")
- [CustomFields](https://mattis44.github.io/node-trello-api/#customFields "CustomFields")
- [Emojis](https://mattis44.github.io/node-trello-api/#emojis "Emojis")
- [Labels](https://mattis44.github.io/node-trello-api/#labels "Labels")
- [Lists](https://mattis44.github.io/node-trello-api/#lists "Lists")
- [Members](https://mattis44.github.io/node-trello-api/#members "Members")
- [Plugins](https://mattis44.github.io/node-trello-api/#plugins "Plugins")
- [Search](https://mattis44.github.io/node-trello-api/#search "Search")
- [Tokens](https://mattis44.github.io/node-trello-api/#tokens "Tokens")
- [Webhooks](https://mattis44.github.io/node-trello-api/#webhooks "Webhooks")


## Documentation

Official repository documentation : https://mattis44.github.io/node-trello-api/
### Actions

Used to request the actions of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-actions/

### Applications

Used to request the applications of a member.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-applications/

### Batch

Used to request multiple resources in a single request.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-batch/

### Boards

Used to request the boards of a member.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-boards/

### Cards

Used to request the cards of a board, a checklist, a list, or a member.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-cards/

### Checklists

Used to request the checklists of a board, a card, or a member.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/

### CustomFields

Used to request the custom fields of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/

### Emojis

Used to request the emojis of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-emojis/

### Enterprises

Used to request the enterprises of a member.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-enterprises/

### Labels

Used to request the labels of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-labels/

### Lists

Used to request the lists of a board, a card, a checklist, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-lists/

### Members

Used to request the members of a board, a card, a checklist, a list, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-members/

### Notifications

Used to request the notifications of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-notifications/

### Plugins

Used to request the plugins of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-plugins/

### Search

Used to request the search of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-search/

### Tokens

Used to request the tokens of a member.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-tokens/

### Webhooks

Used to request the webhooks of a board, a card, a checklist, a list, a member, or an organization.

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-webhooks/

## Working on !
Organizations' methods are missing.