import Task from "./Task"

const Tasks = (probs) => {
    var tasks = probs.tasks



    return (
        <div>
            {tasks.map((task) => <Task task={task} key={task.id} onDelete = {probs.onDelete} switchTaskReminder={probs.switchTaskReminder}></Task>)}
        </div>
    )
}

export default Tasks