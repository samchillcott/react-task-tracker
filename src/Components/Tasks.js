import React, { useState } from 'react'



const Tasks = () => {
    const [tasks, setTasks] = useState([1,2,3])
    return (
        <>
            {tasks.map((task, index) => {
                <h3 key={index}>{task}</h3>
            })}
        </>
    )
}

export default Tasks
