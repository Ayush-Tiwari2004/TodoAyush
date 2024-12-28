import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      content: inputValue,
      checked: false,
    };
    addTodo(newTask);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Create your task here..." 
        className='p-2 rounded-md w-[222px]'
      />
      <button type="submit" className='bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md ml-2'>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;