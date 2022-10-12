import React from 'react';
import {toast } from 'react-toastify';


const Option = ({ option, correctAnswer, id }) => {

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

    const handelCorrect = (option) => {

                if (option === correctAnswer) {
                    handelToClickedTrue();
                }
                else {
                    handelToClickedFalse();
                }
    }

    return (
        <div className="p-2">
            <input onClick={()=>handelCorrect(option)} type="radio" id={`option${id}`} name="select_option" value="option" />
            <label className="pl-2" htmlFor={`option${id}`}>{option}</label>
        </div>
    );
};
export default Option;