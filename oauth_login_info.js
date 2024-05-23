
/**
 * @typedef OauthLogInInfo
 * @type {Object}
 * @property {string} redirectUrl - The url to redirect the user to after the login
 */
class OauthLogInInfo{
    constructor(redirectUrl){
        this.redirectUrl = redirectUrl;
    }
}

exports.OauthLogInInfo = OauthLogInInfo;