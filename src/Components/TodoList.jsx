import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from 'react-icons/fa';

const TodoList = ({ data, checked, onhandleDeleteTodo, onhandleCheckedTodo }) => {
  return (
    <li className='bg-white px-3 py-2 my-3 rounded-md w-full max-w-[400px] flex justify-between items-center relative'>
      <div className='flex items-center max-w-72 relative'>
        <div 
          onClick={() => onhandleCheckedTodo(data)} 
          className={`mr-3 absolute top-0 w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded-full cursor-pointer ${checked ? 'bg-green-500' : ''}`}
        >
          {checked && <FaCheck className='text-white' />}
        </div>
        <span className={`ms-10 mr-5 ${checked ? "checklist" : "notchecklist"}`}>
          {data}
        </span>
      </div>
      <button className='absolute top-2 right-0 mr-3 text-xl text-red-600' onClick={() => onhandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default TodoList;