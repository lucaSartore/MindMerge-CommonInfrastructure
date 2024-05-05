/**
 * @typedef TaskTree
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {TaskTree[]} childTasks - The child tasks of the task
 */
export default class TaskTree{

    /**
     * @param {number} taskId 
    */
    constructor(taskId){
        this.taskId = taskId;
        this.childTasks = [];
    }
}