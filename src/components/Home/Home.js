import React from 'react';
import { useLoaderData } from 'react-router-dom';
import headerImg from '../../images/header-img.jpg';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizLoader = useLoaderData();
    return (
        <div className='mt-[100px] md:mt-0'>
            <div className='grid md:grid-cols-2 items-center'>
                <div className='w-[80%]'>
                    <img src={headerImg} alt="" />
                </div>
                <div className='w-[80%]'>
                    <h2 className='text-4xl font-bold pb-4'>Education Quizzes Build Up Rapid Revision For School Students</h2>
                    <h3 className='text-2xl font-bold text-justify pl-10'>Students benefit greatly from being able to take online practice quizzes. These quizzes focus on the critical lower-level thinking learning for the students. The students can practise these activities on online quizzes, therefore, freeing up class time for higher-level thinking activities.</h3>
                </div>
            </div>
            <div className='grid md:grid-cols-4'>
                {
                    quizLoader.data.map(quizTopic => <QuizTopic
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizTopic>)
                }
            </div>
        </div>

    );
};

export default Home;