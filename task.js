const TaskNote = require('./task_note.js');
const TaskReportSchedule = require('./task_report_schedule.js');
/**
 * @typedef Task
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {number | null} taskFatherId - The id of the father task
 * @property {Date} lastUpdated - The date when the task was last updated
 * @property {string} taskName - The name of the task
 * @property {string} taskDescription - The description of the task
 * @property {number} taskStatus - The status of the task
 * @property {TaskNote[]} taskNotes - The notes of the task
 * @property {number[]} taskAssignees - A list containing the ids of the assignees for the current task 
 * @property {number} taskManager - The id of the manager 
 * @property {number} taskOrganizationId - The id of the organization 
 * @property {TaskReportSchedule[]} taskReports - The reports of the task
 * @property {bool} notificationEnable - whether to send notification to the manager when the status of the task changes or not
 * @property {number[]} childTasks - The ids of the child tasks 
 * @property {number} recusivePermissionsValue - Now far down the task tree the permissions of the task are inherited
 */
class Task{
    /**
     * @param {number} taskId 
     * @param {number | null} taskFatherId 
     * @param {number} taskOrganizationId
     * @param {Date} lastUpdated 
     * @param {string} taskName 
     * @param {string} taskDescription 
     * @param {number} taskStatus 
     * @param {TaskNote[]} taskNotes 
     * @param {number | number[]} taskAssignee 
     * @param {number} taskManager 
     * @param {TaskReportSchedule[]} taskReports
     * @param {bool} notificationEnable
     * @param {number[]} childTasks
     * @param {number} recursivePermissionsValue
     */
    constructor(
        taskId,
        taskFatherId,
        taskOrganizationId,
        lastUpdated,
        taskName,
        taskDescription,
        taskStatus,
        taskNotes,
        taskAssignee,
        taskManager,
        taskReports,
        notificationEnable,
        childTasks,
        recursivePermissionsValue
    ){
        this.taskId = taskId;
        this.taskFatherId = taskFatherId;
        this.taskOrganizationId = taskOrganizationId;
        this.lastUpdated = lastUpdated;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.taskNotes = taskNotes;
        if(taskAssignee.constructor === Array){
            this.taskAssignees = taskAssignee;
        }else{
            this.taskAssignees = [taskAssignee];
        }
        this.taskManager = taskManager;
        this.taskReports = taskReports;
        this.notificationEnable = notificationEnable;
        this.childTasks = childTasks;
        this.recursivePermissionsValue = recursivePermissionsValue;
    }

    /**
    * @returns {bool}
    */
    validate(){
        return this.taskId != undefined &&
        (this.taskFatherId === null || typeof this.taskFatherId === "number") &&
        this.taskOrganizationId != undefined &&
        typeof this.taskOrganizationId === "number" &&
        this.taskOrganizationId != NaN &&
        this.lastUpdated != undefined &&
        this.lastUpdated instanceof Date &&
        this.taskName != undefined &&
        typeof this.taskName === "string" &&
        this.taskDescription != undefined &&
        typeof this.taskDescription === "string" &&
        this.taskStatus != undefined &&
        typeof this.taskStatus === "number" &&
        this.taskStatus != NaN &&
        this.taskNotes != undefined &&
        Array.isArray(this.taskNotes) &&
        this.taskNotes.every((note) => {try{return note.validate()} catch {return false}}) &&
        this.taskAssignees != undefined &&
        Array.isArray(this.taskAssignees) &&
        this.taskAssignees.every((assignee) => {return typeof assignee === "number" && assignee != NaN}) &&
        this.taskManager != undefined &&
        typeof this.taskManager === "number" &&
        this.taskManager != NaN &&
        this.taskReports != undefined &&
        Array.isArray(this.taskReports) &&
        this.taskReports.every((report) => {try{return report.validate()} catch {return false}}) &&
        this.notificationEnable != undefined &&
        typeof this.notificationEnable === "boolean" &&
        this.childTasks != undefined &&
        this.recursivePermissionsValue != undefined &&
        typeof this.recursivePermissionsValue === "number" &&
        this.recursivePermissionsValue != NaN
    }
}

exports.Task = Task;