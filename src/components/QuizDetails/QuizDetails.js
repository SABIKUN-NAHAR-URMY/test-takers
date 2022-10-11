import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizDetails = ({ quizData, id }) => {

    const { question, correctAnswer, options } = quizData;
    return (
        <div className='border-2 border-slate-400 rounded-lg p-10 m-10 mx-auto w-[50%]'>
            <div className='flex'>
                <h2 className='text-xl font-bold'>Quiz-{id}:{question}</h2>
                <span className='cursor-pointer'><EyeIcon className='w-6 h-6'></EyeIcon></span>
            </div>

            <div className='grid md:grid-cols-2 text-start p-4 ml-11'>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                    ></Option>)

                }
            </div>
        </div>
    );
};

export default QuizDetails;