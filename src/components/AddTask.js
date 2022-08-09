import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false) 
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a text!')
            return
        }

        onAdd({text, date, reminder})

        setText('')
        setDate('')
        setReminder(0)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add Date' value={date} onChange={(e) => setDate(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.value)}></input>
            </div>
            <input className='btn btn-block' type="submit" value="Save Task"></input>

        </form>
    )
}

export default AddTask;
