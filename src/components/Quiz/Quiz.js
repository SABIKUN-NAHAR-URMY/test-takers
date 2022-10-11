import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <div className='text-2xl font-bold mt-12'>
            {
                <h1>Quiz of {quiz.data.name}</h1>
            }
            </div>
            <div>
            {
                quiz.data.questions.map((quizData, idx) => <QuizDetails
                    key={quizData.id}
                    quizData={quizData}
                    id={idx}></QuizDetails>)
            }
            </div>
        </div>
    );
};

export default Quiz;