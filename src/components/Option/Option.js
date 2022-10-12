import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option }) => {

    const quiz = useLoaderData();

    const handelToClickedTrue = () => {
            toast.success('Answer Right!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handelToClickedFalse = () => {
        toast.error('Answer Wrong!', {
        position: toast.POSITION.TOP_RIGHT
        });
    };

    const handelCorrect = () => {
        
            if (option === quiz.data.questions.correctAnswer) {
                handelToClickedTrue();
            }
            else{
                handelToClickedFalse();
            }
    }

    return (
        <div className="p-2">
            <input onClick={handelCorrect} type="radio" id="option" name="select_option" value="option" />
            <label className="pl-2" for="option">{option}</label>
            <ToastContainer />
        </div>
    );
};
export default Option;