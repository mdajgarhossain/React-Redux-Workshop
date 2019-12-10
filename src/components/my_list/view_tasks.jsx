import React from 'react';

const ViewTasks = ({tasks=[], handleComplete}) => {
    // console.log(tasks);

    if(tasks.length === 0) {
        return (
            <div>
                <h4>Tasks</h4>
                <p>There is no tasks!</p>
            </div>
        )
    }
    
    return(
        <div>
            <h4>Tasks: </h4>
            <ul className='list-group'>
                {tasks.map((task) => {
                    return(
                        <li key={task.id} className='list-group-item'>
                            <p style={{
                                textDecoration: task.isCompleted ? 
                                'line-through' : 
                                'none'
                            }}>
                                {task.task}
                            </p>
                            <p>
                                <input 
                                    type='checkbox'
                                    checked={task.isCompleted}
                                    onChange={event => handleComplete(task.id, event.target.checked)}
                                />
                                {task.isCompleted ? 'Completed' : 'Not Completed'}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ViewTasks;