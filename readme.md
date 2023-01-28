
## NODE-TRELLO-API
A fully asynchronous node module for trello api in CommonJS.

Report bugs on my Discord : Mattis#5249

## Usage
### Installation using NPM.
`npm i node-trello-api`
### Import and use
  ```js
 const trelloClient = require('node-trello-api')
 const Trello = new trelloClient("API_KEY", "API_TOKEN")
```
## Exemple
```js
Trello.getBoard(boardId).then(board => {
console.log(board);
});
```
## Documentation summary
- [Actions](https://mattis44.github.io/node-trello-api/#Actions "Actions")
- [Applications](https://mattis44.github.io/node-trello-api/#Applications "Applications")
- [Boards](https://mattis44.github.io/node-trello-api/#Boards "Boards")
- [Cards](https://mattis44.github.io/node-trello-api/#Cards "Cards")
- [CustomFields](https://mattis44.github.io/node-trello-api/#CustomFields "CustomFields")
- [Emojis](https://mattis44.github.io/node-trello-api/#Emojis "Emojis")
- [Labels](https://mattis44.github.io/node-trello-api/#Labels "Labels")
- [Lists](https://mattis44.github.io/node-trello-api/#Lists "Lists")
- [Members](https://mattis44.github.io/node-trello-api/#Members "Members")
- [Plugins](https://mattis44.github.io/node-trello-api/#Plugins "Plugins")
- [Search](https://mattis44.github.io/node-trello-api/#Search "Search")
- [Tokens](https://mattis44.github.io/node-trello-api/#Tokens "Tokens")
- [Webhooks](https://mattis44.github.io/node-trello-api/#Webhooks "Webhooks")


## Documentation
### Actions
**Methods**
> getAction(**idAction**, **options**) :
Options : {display, entities, fields, member, member_fields, memberCreator, memberCreator_field}

> updateAction(**idAction**, **text**)

> deleteAction(**idAction**)

> getActionSpecifiedField(**idAction**, **field**)

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-actions/

### Applications
**Methods**
> getApplicationdata(**applicationId**)

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-applications/

### Batch
**Methods**
>Batch(**urls**)

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-batch/

### Boards
**Methods**
> getBoardMembership(**boardId**)

>getBoard (**boardId**)

>updateBoard(**boardId**, **options**) :
Options : {name, desc, descData, closed, subscribed, idOrganization, prefs_permissionLevel, prefs_voting, prefs_comments, prefs_invitations, prefs_selfJoin, prefs_cardCovers, prefs_background, prefs_cardAging, prefs_calendarFeedEnabled, labelNames_green/yellow/orange/red/purple/blue}

>deleteBoard(**boardId**)

>getBoardField(**boardId**, **field**)

>getBoardActions(**boardId**, **options**) :
Options : {filter}

>getBoardCard(**boardId**, **idCard**)

>getBoardboardStars(**boardId**, **options**)

>getBoardChecklists(**boardId**)

>getBoardCards(**boardId**)

>getBoardCustomFields(**boardId**)

>getBoardLabels(**boardId**, **options**) :
Options : {fields, limit}

>createBoardLabel(**boardId**, **options**) :
Options : {name, color}

>getBoardLists(**boardId**, **options**) :
Options : {filter, fields, limit, cards, card_fields}

>createBoardList(**boardId**, **options**) :
Options : {name, pos}

>getBoardFilteredLists(**boardId**, **filter** )

>getBoardMembers(**boardId**)

>inviteMemberEmailToBoard(**boardId**, **email**, **options**) :
Options : {type, fullName}

>addBoardMember(**boardId**, **memberId**, **type**, **options**) :
Options : {allowBillableGuest}

>removeBoardMember(**boardId**, **memberId**)

>updateBoardMembership(**boardId**, **membershipId**, **type**, **options**) :
Options : {member_fields}

>updateBoardEmailPositionPref(**boardId**, **value**)

>updateBoardIdEmailListPref(**boardId**, **value**)

>updateBoardShowListGuidePref(**boardId**, **value**)

>updateBoardShowSidebarPref(**boardId**, **value**)

>updateBoardShowSidebarActivityPref(**boardId**, **value**)

>updateBoardShowSidebarBoardActionsPref(**boardId**, **value**)

>updateBoardShowSidebarMembersPref(**boardId**, **value**)

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-boards/

### Cards
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-cards/

### CustomFields
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/

### Emojis
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-emojis/

### Labels
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-labels/

### Lists
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-lists/

### Members
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-members/

### Plugins
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-plugins/

### Search
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-search/

### Tokens
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-tokens/

### Webhooks
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-webhooks/

## TO-DO LIST
`Checklists, Enterprises, Notification, Organizations`.