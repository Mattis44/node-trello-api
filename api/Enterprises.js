const fetch = require('node-fetch');
const Trello = require('../trello');
const BASE_URL = 'https://api.trello.com/1/enterprises';


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

Trello.prototype.getEnterpriseAuditlogData = async function (idEntreprise) {
    const url = `${BASE_URL}/${idEntreprise}/auditlogData?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.getOrganizationCanAddToEnterprise = async function (idEntreprise, idOrganization) {
    const url = `${BASE_URL}/${idEntreprise}/transferrable/organizations/${idOrganization}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.getBulkOrganizationCanAddToEnterprise = async function (idEntreprise, idOrganizations) {
    const url = `${BASE_URL}/${idEntreprise}/transferrable/bulk/${idOrganizations}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'GET', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.transferOrganizationToEnterprise = async function (idEntreprise, idOrganization) {
    const url = `${BASE_URL}/${idEntreprise}/organizations/?key=${this.key}&token=${this.token}&idOrganization=${idOrganization}`;
    const response = await fetch(url, {method: 'POST', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.updateEnterpriseMemberLicensed = async function (idEntreprise, idMember, value) {
    const url = `${BASE_URL}/${idEntreprise}/members/${idMember}/licensed?key=${this.key}&token=${this.token}&licensed=${value}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

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

Trello.prototype.updateEnterpriseAdminMember = async function (idEntreprise, idMember) {
    const url = `${BASE_URL}/${idEntreprise}/admins/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.removeEnterpriseAdminMember = async function (idEntreprise, idMember) {
    const url = `${BASE_URL}/${idEntreprise}/admins/${idMember}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.deleteEnterpriseOrganization = async function (idEntreprise, idOrganization) {
    const url = `${BASE_URL}/${idEntreprise}/organizations/${idOrganization}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'DELETE', headers: this.headers})
    const json = await response.json();
    return json;
}

Trello.prototype.bulkAcceptEnterpriseOrganization = async function (idEntreprise, idOrganizations) {
    const url = `${BASE_URL}/${idEntreprise}/organizations/bulk/${idOrganizations}?key=${this.key}&token=${this.token}`;
    const response = await fetch(url, {method: 'PUT', headers: this.headers})
    const json = await response.json();
    return json;
}