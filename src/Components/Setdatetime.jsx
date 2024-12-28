import React, { useEffect, useState } from 'react'

const Setdatetime = () => {
    
    const [Datetime, setDateTime] = useState();

    useEffect(() =>{
        const interval = setInterval(() => {
            const timeformate = new Date();
            const formatedDate = timeformate.toLocaleDateString();
            const formatedTime = timeformate.toLocaleTimeString();
    
            setDateTime(`${formatedDate} - ${formatedTime}`);
    
        }, );
        return () => clearInterval(interval);
    },[])
  return (
    <>
     <div className='flex justify-center items-center'>
     <h1 className='text-2xl text-white my-2'>{Datetime}</h1>
     </div>
    </>
  )
}

export default Setdatetime;
