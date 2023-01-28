
## NODE-TRELLO-API
A fully asynchronous node module for trello api in CommonJS.

![Alt test](https://raw.githubusercontent.com/Mattis44/node-trello-api/main/trello-logo/Node-Trello-Logo.png)

Report bugs on my Discord : Mattis#5249

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

### Checklists
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-checklists/

### CustomFields
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-customfields/

### Emojis
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-emojis/

### Enterprises
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-enterprises/

### Labels
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-labels/

### Lists
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-lists/

### Members
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-members/

### Notifications
**Methods**

Official documentation API : https://developer.atlassian.com/cloud/trello/rest/api-group-notifications/

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

## Working on !
Organizations' methods are missing.