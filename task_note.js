
/**
 * @typedef TaskNote
 * @type {Object}
 * @property {number} noteId - The id of the note
 * @property {number} taskId - The id of the task the notes are for
 * @property {string} notes - The note itself
 * @property {Date} date - The date when the note was last edited
 */
class TaskNote{

    /**
     * @param {number} noteId
     * @param {number} taskId
     * @param {string} notes
     * @param {Date} date
    */
    constructor(noteId, taskId, notes, date){
        this.noteId = noteId;
        this.taskId = taskId;
        this.notes = notes;
        this.date = date; 
    }
    /**
     * @returns {boolean} - true if the task note is valid, false otherwise
     */
    validate(){
        return this.noteId != undefined &&
        this.taskId != undefined &&
        this.notes != undefined &&
        this.date != undefined && 
        typeof(this.noteId) == 'number' &&
        typeof(this.taskId) == 'number' &&
        typeof(this.notes) == 'string' &&
        this.date instanceof Date;
    }
}

exports.TaskNote = TaskNote;