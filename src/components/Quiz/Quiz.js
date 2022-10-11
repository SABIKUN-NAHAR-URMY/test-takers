import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    const {name} = quiz.data;
    console.log(name);
    return (
            <div>
            {
                quiz.data.questions.map((quizData,idx,name) => <QuizDetails 
                key={quizData.id}
                quizData={quizData}
                name={name}
                id={idx}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;