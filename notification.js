
/**
 * @typedef Notification
 * @type {Object}
 * @property {number} notificationId - The id of the notification
 * @property {number} userId - The id of the user that the notification is for
 * @property {string} notificationText - The text of the notification
 * @property {Date} date - The date when the notification was created
 * @property {boolean} read - If the notification was read or not
 */
class Notification{
    
    /**
     * @param {number} notificationId
     * @param {number} userId
     * @param {string} notificationText
     * @param {Date} date
     * @param {boolean} read
    */
    constructor(notificationId, userId, notificationText, date, read){
        this.notificationId = notificationId;
        this.userId = userId;
        this.notificationText = notificationText;
        this.date = date;
        this.read = read;
    }
    

    /**
     * 
     * @returns {boolean} If the notification is valid
     */
    validate(){
        return this != undefined &&
        typeof(this.notificationId) == 'number' &&
        typeof(this.userId) == 'number' &&
        typeof(this.notificationText) == 'string' &&
        this.notificationText != "" &&
        typeof(this.date) == 'object' &&
        this.date instanceof Date &&
        typeof(this.read) == 'boolean';
    }
}

module.exports = {Notification};