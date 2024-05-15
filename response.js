
/**
 * Represents a generic response with a status code and payload.
 * @template T
 * @property {number} statusCode - The status code of the response
 * @property {string} message - The message of the response
 * @property {T} payload - The payload of the response
 */
class CustomResponse {
    /**
     * @param {number} statusCode
     * @param {string} message
     * @param {T} payload
    */
    constructor(statusCode, message, payload){
        this.statusCode = statusCode;
        this.message = message;
        this.payload = payload;
    }
}

exports.CustomResponse = CustomResponse;