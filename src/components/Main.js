import Tasks from './Tasks';
import AddTask from './AddTask';
import React, { useState, useEffect } from "react"
import Button from './Button';
import FlightList from './FlightList';




const Main = ({ flights }) => {
    return (
        <div>
            <FlightList flights={flights}></FlightList>
        </div>
        // <div>
        //     <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Open"} onClick={(e) => setShowAddTask(!showAddTask)}></Button>
        //     {showAddTask && <AddTask className='container' onAdd={addTask}></AddTask>}
        //     {/* ternary operator without an else */}

        //     <div className='container'>
        //         {tasks.length > 0 ?
        //             <Tasks tasks={tasks} onDelete={deleteTask} switchTaskReminder={switchTaskReminder}></Tasks> : 'No tasks available'
        //         }
        //     </div>
        // </div>
    );
}

export default Main;




