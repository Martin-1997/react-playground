import Task from "./Task"
import React from "react"
import PropTypes from "prop-types"

const Tasks = (props) => {
  return (
        <div>
            {props.tasks.map((task, index) => <Task task={task} key={index} onDelete={props.onDelete} switchTaskReminder={props.switchTaskReminder}></Task>)}
        </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.object,
  onDelete: PropTypes.func,
  switchTaskReminder: PropTypes.func,
}

export default Tasks
