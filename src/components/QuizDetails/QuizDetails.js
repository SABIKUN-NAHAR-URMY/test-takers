import Option from '../Option/Option';

const QuizDetails = ({ quizData,id }) => {

    const { question, correctAnswer, options } = quizData;
    return (
        <div className='border-2 border-indigo-600 m-5'>
            <h2 className='text-xl font-bold'>Quiz-{id}:{question}</h2>
            <div className='grid grid-cols-2'>
            {
                <input
                type="radio"
                name = {options.map((option,idx) => <Option 
                key={idx}
                option={option}
                ></Option>)}
                />
            }
            </div>
        </div>
    );
};

export default QuizDetails;