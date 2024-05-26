/**
 * @typedef TaskTree
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {TaskTree[]} childTasks - The child tasks of the task
 */
class TaskTree{

    /**
     * @param {number} taskId 
    */
    constructor(taskId){
        this.taskId = taskId;
        this.childTasks = [];
    }
}

module.exports = {TaskTree};