/**
 * @typedef TaskTree
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {TaskTree[]} childTasks - The child tasks of the task
 * @property {string} taskName - The name of the task
 */
class TaskTree{

    /**
     * @param {number} taskId 
     * @param {string} taskName
    */
    constructor(taskId,taskName){
        this.taskId = taskId;
        this.childTasks = [];
        this.taskName = taskName;
    }
}

module.exports = {TaskTree};