import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 10,
      text: 'Foo',
      day: 'Feb 5th',
      reminder: true,
    },
    {
      id: 20,
      text: 'Bar',
      day: 'Feb 6th',
      reminder: true,
    },
    {
      id: 30,
      text: 'Baz',
      day: 'Feb 7th',
      reminder: true,
    },
  ]);

  // Delet a task
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <main className='px-8'>
      <div className='max-w-lg min-h-[300px] my-8 mx-auto p-8 overflow-auto  border border-blue-400 rounded-md'>
        <Header title='ToDo App' />
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </main>
  );
};

export default App;
