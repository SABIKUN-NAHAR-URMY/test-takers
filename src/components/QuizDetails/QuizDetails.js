import Option from '../Option/Option';

const QuizDetails = ({ quizData,name,id }) => {

    const {question, correctAnswer, options } = quizData;
    // const{name} = name;
    return (
        <div className='border-2 border-indigo-600 m-5'>
            {name}
            <h2 className='text-xl font-bold'>Quiz-{id}:{question}</h2>
            <div className='grid grid-cols-2'>
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