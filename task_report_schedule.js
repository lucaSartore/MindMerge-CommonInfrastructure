
/**
 * @typedef TaskReportSchedule
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {number} reportScheduleId - The id of the report schedule
 * @property {number} reportType - The type of the report
 * @property {number} reportFrequency - The frequency of the report
 * @property {Date} nextReportDate - The date when the report begins
 * @property {string} reportPrompt - The prompt/question for the report
 */
export default class TaskReportSchedule{
    /**
     * @param {number} taskId
     * @param {number} reportScheduleId
     * @param {number} reportType
     * @param {number} reportFrequency
     * @param {Date} nextReportDate 
     * @param {string} reportPrompt
    */
    constructor(taskId, reportScheduleId, reportType, reportFrequency, nextReportDate, reportPrompt){
        this.taskId = taskId;
        this.reportScheduleId = reportScheduleId;
        this.reportType = reportType;
        this.reportFrequency = reportFrequency;
        this.nextReportDate = nextReportDate ;
        this.reportPrompt = reportPrompt;
    }
}