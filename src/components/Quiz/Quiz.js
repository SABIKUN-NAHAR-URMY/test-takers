import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            {
                quiz.data.questions.map(quizData => <QuizDetails 
                key={quizData.id}
                quizData={quizData}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;