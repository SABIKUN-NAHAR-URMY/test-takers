import Option from '../Option/Option';

const QuizDetails = ({ quizData,id }) => {

    const {question, correctAnswer, options } = quizData;
    return (
        <div className='border-2 border-slate-400 rounded-lg p-10 m-10 mx-auto w-[50%]'>
            <h2 className='text-xl font-bold'>Quiz-{id}:{question}</h2>
            <div className='grid md:grid-cols-2 text-start p-4 ml-11'>
            {
                 options.map((option,idx) => <Option 
                key={idx}
                option={option}
                ></Option>)
                
            }
            </div>
        </div>
    );
};

export default QuizDetails;