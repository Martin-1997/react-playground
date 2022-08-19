import Task from "./Task"

const Tasks = (props) => {
    return (
        <div>
            {props.tasks.map((task, index) => <Task task={task} key={index} onDelete={props.onDelete} switchTaskReminder={props.switchTaskReminder}></Task>)}
        </div>
    )
}



export default Tasks