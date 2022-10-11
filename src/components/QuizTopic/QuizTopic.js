import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const QuizTopic = ({quizTopic}) => {
    const{id, name, logo, total} = quizTopic;
    return (
        <div className='border-4 bg-slate-50 m-4 rounded-2xl'>
            <img className='rounded-2xl bg-slate-300 mx-auto' src={logo} alt="" />
            <div className='flex justify-between items-center p-2'>
            <h2 className='text-xl font-bold'>{name}</h2>
            <h3 className='text-lg font-semibold'>Quiz: {total}</h3>
            <Link to={`/quizTopic/${id}`}><button className='flex border-2 rounded-lg p-3 bg-slate-500 text-slate-50'>Start Practice <span><ArrowRightCircleIcon className='w-6 h-6'/></span></button></Link>
            </div>
        </div>
    );
};

export default QuizTopic;