/**
 * @typedef LogInResponse
 * @type {Object}
 * @property {number} userId - The id of the user
 * @property {string} userToken - The token of the user, will be used to authorize the successive requests.
 */
export default class LogInResponse{
    constructor(userId, userToken){
        this.userId = userId;
        this.userToken = userToken;
    }
}


