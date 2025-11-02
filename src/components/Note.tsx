import React from 'react';

interface Props {
    title: string,
    date: string,
    description: string
}

const Note: React.FC<Props> = ({ title, date, description }) => {
    
  return (
<div className='p-5 bg-white rounded-xl border border-black/10 transition-all hover:bg-p250 hover:border-p500 w-full'>
      <h3 className='text-g333 '>{title}</h3>
      <p className='text-gray-500'>{date}</p>
      <p className='text-gray-600 mt-5'>{description}</p>
    </div>
  );
};

export default Note;