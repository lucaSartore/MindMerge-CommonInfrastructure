import TaskNote from './task_note.js';
import TaskReportSchedule from './task_report_schedule.js';
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
export default class Task{
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
     * @param {number[]} childTasksIds
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
        childTasksIds,
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
        this.childTasksIds = childTasksIds;
        this.recursivePermissionsValue = recursivePermissionsValue;
    }

    /**
    * @returns {bool}
    */
    validate(){
        var isValid = this.taskId != undefined &&
        this.taskFatherId != undefined &&
        this.taskOrganizationId != undefined &&
        this.lastUpdated != undefined &&
        this.taskName != undefined &&
        this.taskDescription != undefined &&
        this.taskStatus != undefined &&
        this.taskNotes != undefined &&
        this.taskAssignees != undefined &&
        this.taskManager != undefined &&
        this.taskReports != undefined &&
        this.notificationEnable != undefined &&
        this.childTasksIds != undefined &&
        this.recursivePermissionsValue != undefined;

        for(var i = 0; i < this.taskNotes.length; i++){
            isValid = isValid && this.taskNotes[i].validate();
        }
        for(var i = 0; i < this.taskReports.length; i++){
            isValid = isValid && this.taskReports[i].validate();
        }

        return isValid;
    }
}