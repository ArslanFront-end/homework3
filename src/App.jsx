import classes from './App.module.sass'
import React, {useState} from 'react'


export default function App() {
    const [ tasksArray, setTasksArray ] = useState([

    ])
    const [ task, setTask ] = useState('')

    const addTasks = event => {
        event.preventDefault()
        const newTasks = {
            id: Date.now(),
            title: task
        }
        setTasksArray([...tasksArray, newTasks])
        setTask('')
    }

    return (
        <div>
            <form onSubmit={addTasks} className={classes.TasksForm}>
                <input
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    type="text"
                    placeholder={'enter task name'}
                    required
                />
                <button>Add task</button>
            </form>
            {tasksArray.map(item =>
                <div className={classes.TaskCard} key={item.id}>
                    <span>ID: {item.id}</span>
                    <span>{item.title}</span>
                </div>
            )}
        </div>
    )
}