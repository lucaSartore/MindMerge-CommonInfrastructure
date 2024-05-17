
/**
 * @typedef Organization
 * @type {Object}
 * @property {number} organizationId - The id of the organization
 * @property {string} organizationName - The name of the organization
 * @property {number[]} userIds - The ids of the users in the organization
 * @property {boolean} licenseValid - If the license of the organization is valid
 * @property {Date} licenseExpirationDate - The date when the license expires
 * @property {number} ownerId - The id of the owner of the organization
 */
class Organization{
    /**
     * @param {number} organizationId 
     * @param {string} organizationName 
     * @param {number[]} userIds 
     * @param {boolean} licenseValid 
     * @param {Date} licenseExpirationDate
     * @param {number} ownerId
     */
    constructor(organizationId, organizationName, userIds, licenseValid, licenseExpirationDate ,ownerId){
        this.organizationId = organizationId;
        this.organizationName = organizationName;
        this.userIds = userIds;
        this.licenseValid = licenseValid;
        this.licenseExpirationDate = licenseExpirationDate;
        this.ownerId = ownerId;
    }

    validate(){
        return this != undefined &&
        typeof(this.organizationName) == 'string' &&
        this.organizationName != "" &&
        this.ownerId != undefined &&
        Array.isArray(this.userIds) &&
        this.userIds.every((id) => typeof(id) == 'number') &&
        this.licenseValid;
    }
}

exports.Organization = Organization;