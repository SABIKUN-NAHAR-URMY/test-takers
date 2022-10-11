import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            {
                quiz.data.questions.map((quizData,idx) => <QuizDetails 
                key={quizData.id}
                quizData={quizData}
                id={idx}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;