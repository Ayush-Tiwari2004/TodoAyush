import React, { useState, useEffect } from 'react';
import Setdatetime from './Setdatetime';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const todoAyush = "todokey";
  const [task, setTask] = useState(() => {
    const todokey = localStorage.getItem(todoAyush);
    return todokey ? JSON.parse(todokey) : [];
  });

  // Update local storage whenever the task state changes
  useEffect(() => {
    localStorage.setItem(todoAyush, JSON.stringify(task));
  }, [task]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const todoContentMatched = task.find(curTask => curTask.content === content);
    if (todoContentMatched) return;

    setTask(prev => [...prev, { id, content, checked }]);
  };

  // Delete button function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter(curTask => curTask.content !== value);
    setTask(updatedTask);
  };

  const clearAllbtn = () => {
    setTask([]);
  };

  // Handle checked todo
  const handleCheckTodo = (content) => {
    const updatedTask = task.map(curTask => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTask(updatedTask);
  };

  return (
    <div className="flex justify-center items-center w-full h-full pt-[8rem] pb-12">
      <div className='flex flex-col bg-[#6A0DAD] rounded-xl w-fit justify-center items-center p-8'>
        <h1 className='text-center border-b-2 text-[40px] text-white font-bold'>
          Best Todo-List
        </h1>

        {/* Time section */}
        <Setdatetime />

        {/* Form section */}
        <TodoForm addTodo={handleFormSubmit} />

        <section>
          <ul>
            {task.map((curTask) => (
              <TodoList 
                key={curTask.id} 
                data={curTask.content} 
                checked={curTask.checked} 
                onhandleDeleteTodo={handleDeleteTodo} 
                onhandleCheckedTodo={handleCheckTodo} 
              />
            ))}
          </ul>
        </section>

        <section>
          <button
            className='text-white bg-red-600 py-1 px-5 my-3 rounded-md hover:bg-red-700'
            onClick={clearAllbtn}>
            Clear All
          </button>
        </section>
      </div>
    </div>
  );
}

export default Todo;