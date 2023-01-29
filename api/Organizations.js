const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/organizations';


/**
 * Create an organization
 * @async
 * @function
 * @memberOf Trello
 * @param {string} displayName
 * @param {string} options - {desc, name, website}
 * @returns {Promise<*>}
 */
Trello.prototype.createOrganization = async function (displayName, options) {
    const Defaults = {
        desc: '',
        name: '',
        website: '',
    }
    let url = `${BASE_URL}?key=${this.key}&token=${this.token}&displayName=${displayName}`;
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

/**
 * Get an organization by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganization = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update an organization by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {Object} options -
 * @returns {Promise<*>}
 */
Trello.prototype.updateOrganization = async function (idOrganization, options) {
const Defaults = {
        desc: '',
        displayName: '',
        name: '',
        website: '',
        "prefs/associatedDomain": '',
        "prefs/externalMembersDisabled": '',
        "prefs/googleAppsVersion": '',
        "prefs/boardVisibilityRestrict/org": '',
        "prefs/boardVisibilityRestrict/private": '',
        "prefs/boardVisibilityRestrict/public": '',
        "prefs/orgInviteRestrict": '',
        "prefs/permissionLevel": '',
    }
    let url = `${BASE_URL}/${idOrganization}?key=${this.key}&token=${this.token}`;
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

/**
 * Delete an organization by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.deleteOrganization = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get an organization field by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} field
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationField = async function (idOrganization, field) {
    const url = `${BASE_URL}/${idOrganization}/${field}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get organizations actions by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationActions = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/actions?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get organization boards by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {Object} options - {filter, fields}
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationBoards = async function (idOrganization, options) {
    const Defaults = {
        filter: '',
        fields: '',
    }
    let url = `${BASE_URL}/${idOrganization}/boards?key=${this.key}&token=${this.token}`;
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

/**
 * Retrieve organization exports by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.retrieveOrganizationExports = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/exports?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create organization export by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {Object} options - {attachments}
 * @returns {Promise<*>}
 */
Trello.prototype.createOrganizationExport = async function (idOrganization, options) {
    const Defaults = {
        attachments: '',
    }
    let url = `${BASE_URL}/${idOrganization}/exports?key=${this.key}&token=${this.token}`;
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

/**
 * Get organization members by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationMembers = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/members?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update organization members by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} email
 * @param {string} fullName
 * @param {Object} options - {type}
 * @returns {Promise<*>}
 */
Trello.prototype.updateOrganizationMembers = async function (idOrganization, email, fullName, options) {
    const Defaults = {
        type: '',
    }
    let url = `${BASE_URL}/${idOrganization}/members?key=${this.key}&token=${this.token}&email=${email}&fullName=${fullName}`;
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

/**
 * Get organization Memberships by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {Object} options - {filter, members}
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationMemberships = async function (idOrganization, options) {
    const Defaults = {
        filter: '',
        members: '',
    }
    let url = `${BASE_URL}/${idOrganization}/memberships?key=${this.key}&token=${this.token}`;
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

/**
 * Get organization Membership by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idMembership
 * @param {Object} options - {member}
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationMembershipById = async function (idOrganization, idMembership, options) {
    const Defaults = {
        member: '',
    }
    let url = `${BASE_URL}/${idOrganization}/memberships/${idMembership}?key=${this.key}&token=${this.token}`;
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

/**
 * Get organization plugin data by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationPluginData = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/pluginData?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get organization Tags by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationTags = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/tags?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Create organization tag by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.createOrganizationTag = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/tags?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update organization member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idMember
 * @param {string} type
 * @returns {Promise<*>}
 */
Trello.prototype.updateOrganizationMember = async function (idOrganization, idMember, type) {
    const url = `${BASE_URL}/${idOrganization}/members/${idMember}?key=${this.key}&token=${this.token}&type=${type}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove organization member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.removeOrganizationMember = async function (idOrganization, idMember) {
    const url = `${BASE_URL}/${idOrganization}/members/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Deactivate or reactivate organization member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idMember
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.deactivateORreactivateOrganizationMember = async function (idOrganization, idMember, value) {
    const url = `${BASE_URL}/${idOrganization}/members/${idMember}/deactivated?key=${this.key}&token=${this.token}&value=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update organization logo by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {Object} options - {file}
 * @returns {Promise<*>}
 */
Trello.prototype.updateOrganizationLogo = async function (idOrganization, options) {
    const Defaults = {
        file: '',
    }
    let url = `${BASE_URL}/${idOrganization}/logo?key=${this.key}&token=${this.token}`;
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

/**
 * Delete organization logo by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.deleteOrganizationLogo = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/logo?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove organization member and all organization boards by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.removeOrganizationMemberAndAllOrganizationBoards = async function (idOrganization, idMember) {
    const url = `${BASE_URL}/${idOrganization}/members/${idMember}/all?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove google apps domain by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.removeGoogleAppsDomain = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/prefs/associatedDomain?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Delete domain restriction by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.deleteDomainRestriction = async function (idOrganization) {
    const url = `${BASE_URL}/${idOrganization}/prefs/orgInviteRestrict?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Delete organization tag by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idTag
 * @returns {Promise<*>}
 */
Trello.prototype.deleteOrganizationTag = async function (idOrganization, idTag) {
    const url = `${BASE_URL}/${idOrganization}/tags/${idTag}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get organization new billable guests by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idOrganization
 * @param {string} idBoard
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationNewBillableGuests = async function (idOrganization, idBoard) {
    const url = `${BASE_URL}/${idOrganization}/newBillableGuests/${idBoard}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}