
/**
 * @typedef TaskNote
 * @type {Object}
 * @property {number} noteId - The id of the note
 * @property {number} taskId - The id of the task the notes are for
 * @property {string} notes - The note itself
 * @property {Date} date - The date when the note was last edited
 */
export default class TaskNote{

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
}