import Option from '../Option/Option';

const QuizDetails = ({ quizData,id }) => {

    const { question, correctAnswer, options } = quizData;
    return (
        <div className='border-2 border-indigo-600 m-5'>
            <h2>Quiz-{id}:{question}</h2>
            {
                options.map((option,idx) => <Option 
                key={idx}
                option={option}
                ></Option>)
            }
        </div>
    );
};

export default QuizDetails;