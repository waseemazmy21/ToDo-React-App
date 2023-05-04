import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDeleteTask }) => {
  const { id, text, day, reminder } = task;
  return (
    <div className='task bg-[#f4f4f4] py-2 px-4 cursor-pointer'>
      <h3 className='text-base flex justify-between items-center'>
        {text}{' '}
        <FaTimes
          onClick={() => {
            onDeleteTask(id);
          }}
          className='text-red-600 cursor-pointer'
        />
      </h3>
      <p className='text-sm'>{day}</p>
    </div>
  );
};

export default Task;
