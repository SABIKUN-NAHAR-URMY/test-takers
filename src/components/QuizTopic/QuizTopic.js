import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const QuizTopic = ({quizTopic}) => {
    const{name, logo, total} = quizTopic;
    return (
        <div className='border-4 bg-slate-50 m-4 rounded-2xl'>
            <img className='rounded-2xl bg-slate-300 mx-auto' src={logo} alt="" />
            <div className='flex justify-between items-center p-2'>
            <h2 className='text-xl font-bold'>{name}</h2>
            <h3 className='text-lg font-semibold'>Quiz: {total}</h3>
            <button className='flex border-2 rounded-lg p-3'>Start Practice <span><ArrowRightCircleIcon className='w-6 h-6'/></span></button>
            </div>
        </div>
    );
};

export default QuizTopic;