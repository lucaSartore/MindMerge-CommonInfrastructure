
/**
 * @typedef User
 * @type {Object}
 * @property {number} userId - The id of the user
 * @property {string} userName - The name of the user
 * @property {number[]} organizations - The ids of the organizations that the user is in
 * @property {number} userKind - The kind of the user (Custom, Google, Facebook)
 * @param {string} email - The email of the user
 */
class User{
    /**
     * @param {number} userId
     * @param {string} userName
     * @param {number[]} organizations
     * @param {number} userKind
     * @param {string} email
     */
    constructor(userId, userName, organizations, userKind, email){
        this.userId = userId;
        this.userName = userName;
        this.organizations = organizations;
        this.userKind = userKind;
        this.email = email;
    }

    validate(){
        return this != undefined &&             //if user not undefined
        typeof(this.userName) == 'string' &&      //if username is string
        typeof(this.email) == 'string' &&         //if email is string
        Array.isArray(this.organizations) &&      //if organizations is array
        this.organizations.every((element) => typeof(element) == 'number') && //if all elements in organizations are numbers
        this.userName != "" &&                  //username has to be defined
        this.email != "" &&                     //email has to be defined
        (this.userKind > 0 && this.userKind <= 3);        //userKind (enum) has to be in range between 0 and 2
    }
}

module.exports = {User};