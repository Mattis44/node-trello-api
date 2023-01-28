const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/enterprises';


/**
 * Get enterprise by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterprise = async function (idEntreprise, options) {
    const Defaults = {
        display: '',
        entities: '',
        fields: '',
        member: '',
        member_fields: '',
        member_filter: '',
        member_sort: '',
        member_sortBy: '',
        member_sortOrder: '',
        member_startIndex: '',
        member_count: '',
        organizations: '',
        organization_fields: '',
        organization_paid_account: '',
        organization_memberships: '',
    }
    let url = `${BASE_URL}/${idEntreprise}?key=${this.key}&token=${this.token}`;
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
 * Get enterprise auditlog data by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterpriseAuditlogData = async function (idEntreprise) {
    const url = `${BASE_URL}/${idEntreprise}/auditlogData?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get enterprise admin members by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterpriseAdminMembers = async function (idEntreprise, options) {
    const Defaults = {
        fields: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/admins?key=${this.key}&token=${this.token}`;
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
 * Get entreprise Signup url.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterpriseSignupUrl = async function (idEntreprise, options) {
    const Defaults = {
        return_url: '',
        authenticate: '',
        confirmationAccepted: '',
        tosAccepted: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/signupUrl?key=${this.key}&token=${this.token}`;
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
 * Get enterprise members by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterpriseMembers = async function (idEntreprise, options) {
    const Defaults = {
        fields: '',
        filter: '',
        sort: '',
        sortBy: '',
        sortOrder: '',
        startIndex: '',
        count: '',
        organization_fields: '',
        board_fields: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/members?key=${this.key}&token=${this.token}`;
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
 * Get enterprise member by id.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idMember
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterpriseMember = async function (idEntreprise, idMember, options) {
    const Defaults = {
        fields: '',
        organization_fields: '',
        board_fields: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/members/${idMember}?key=${this.key}&token=${this.token}`;
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
 * Get Organization can be added to an enterprise.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.getOrganizationCanAddToEnterprise = async function (idEntreprise, idOrganization) {
    const url = `${BASE_URL}/${idEntreprise}/transferrable/organizations/${idOrganization}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get Bulk Organization can be added to an enterprise.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idOrganizations
 * @returns {Promise<*>}
 */
Trello.prototype.getBulkOrganizationCanAddToEnterprise = async function (idEntreprise, idOrganizations) {
    const url = `${BASE_URL}/${idEntreprise}/transferrable/bulk/${idOrganizations}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Get Enterprise claimable organizations.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterpriseClaimableOrganizations = async function (idEntreprise, options) {
    const Defaults = {
        limit: '',
        cursor: '',
        name: '',
        activeSince: '',
        inactiveSince: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/claimableOrganizations?key=${this.key}&token=${this.token}`;
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
 * Get Enterprise pending organizations.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.getEnterprisePendingOrganizations = async function (idEntreprise, options) {
    const Defaults = {
        activeSince: '',
        inactiveSince: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/pendingOrganizations?key=${this.key}&token=${this.token}`;
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
 * Get Enterprise authentication token.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.createEnterpriseAuthToken = async function (idEntreprise, options) {
    const Defaults = {
        expiration: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/tokens?key=${this.key}&token=${this.token}`;
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
 * Transfer Organization to Enterprise.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.transferOrganizationToEnterprise = async function (idEntreprise, idOrganization) {
    const url = `${BASE_URL}/${idEntreprise}/organizations/?key=${this.key}&token=${this.token}&idOrganization=${idOrganization}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Update Enterprise Member Licensed.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idMember
 * @param {string} value
 * @returns {Promise<*>}
 */
Trello.prototype.updateEnterpriseMemberLicensed = async function (idEntreprise, idMember, value) {
    const url = `${BASE_URL}/${idEntreprise}/members/${idMember}/licensed?key=${this.key}&token=${this.token}&licensed=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Deactivate Enterprise Member.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idMember
 * @param {string} value
 * @param {Object} options
 * @returns {Promise<*>}
 */
Trello.prototype.deactivateEnterpriseMember = async function (idEntreprise, idMember, value, options) {
    const Defaults = {
        fields: '',
        organization_fields: '',
        board_fields: '',
    }
    let url = `${BASE_URL}/${idEntreprise}/members/${idMember}/deactivated?key=${this.key}&token=${this.token}&deactivated=${value}`;
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
 * Update Enterprise Member Admin.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.updateEnterpriseAdminMember = async function (idEntreprise, idMember) {
    const url = `${BASE_URL}/${idEntreprise}/admins/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Remove Enterprise Member Admin.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idMember
 * @returns {Promise<*>}
 */
Trello.prototype.removeEnterpriseAdminMember = async function (idEntreprise, idMember) {
    const url = `${BASE_URL}/${idEntreprise}/admins/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Delete Enterprise Organization.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idOrganization
 * @returns {Promise<*>}
 */
Trello.prototype.deleteEnterpriseOrganization = async function (idEntreprise, idOrganization) {
    const url = `${BASE_URL}/${idEntreprise}/organizations/${idOrganization}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

/**
 * Bulk Accept Enterprise Organization.
 * @async
 * @function
 * @memberOf Trello
 * @param {string} idEntreprise
 * @param {string} idOrganizations
 * @returns {Promise<*>}
 */
Trello.prototype.bulkAcceptEnterpriseOrganization = async function (idEntreprise, idOrganizations) {
    const url = `${BASE_URL}/${idEntreprise}/organizations/bulk/${idOrganizations}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}