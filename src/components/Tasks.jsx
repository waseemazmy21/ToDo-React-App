import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDeleteTask }) => {
  return (
    <div className='flex flex-col gap-y-1'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
};

export default Tasks;
