import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

const QuizDetails = ({ quizData, id }) => {
    const { question, correctAnswer, options } = quizData;
    
    const showToastMessage = () => {
        toast.success(`Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div className='w-[80%] md:w-[50%] border-2 border-slate-400 rounded-lg p-10 m-10 mx-auto'>
            <div className='flex'>
                <h2 className='text-xl font-bold'>Quiz-{id}:{question}</h2>
                <button><EyeIcon onClick={showToastMessage} className='w-6 h-6'></EyeIcon></button>
                
            </div>

            <div className='grid md:grid-cols-2 text-start p-4 ml-11'>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                        correctAnswer={correctAnswer}
                        id={`${quizData.id}${idx}`}
                    ></Option>)

                }
            </div>
            
        </div>
    );
};

export default QuizDetails;