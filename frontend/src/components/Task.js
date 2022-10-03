import { FaTimes } from "react-icons/fa"
import { React } from "react"
import PropTypes from "prop-types"

const Task = (props) => {
  const task = props.task
  return (
        <div className = {task.reminder ? "reminder" : "task"}
            onDoubleClick={() => props.switchTaskReminder(task.id)}>
            <h3>{task.text}
                <FaTimes style={{ color: "red", cursor: "pointer" }}
                    onClick={() => props.onDelete(task.id)} /></h3>
            <p>{task.date}</p>
        </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  switchTaskReminder: PropTypes.func,
  onDelete: PropTypes.func,
}

export default Task
