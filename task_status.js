const TaskStatus= {
    Idea: 1,
    Planned: 2,
    InProgress: 3,
    Ready: 4,
    Deployed: 5,
    Paused: 6,

    validate: function(status) {
        switch (status) {
            case TaskStatus.Idea:
            case TaskStatus.Planned:
            case TaskStatus.InProgress:
            case TaskStatus.Ready:
            case TaskStatus.Deployed:
            case TaskStatus.Paused:
                return true;
            default:
                return false;
        }
    }
}

module.exports = {TaskStatus};