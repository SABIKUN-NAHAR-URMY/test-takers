import React from 'react';

const Option = ({ option }) => {
    return (
        <div className="p-2">
            <input type="radio" id="option" name="select_option" value="option"/>
            <label className="pl-2" for="option">{option}</label>      
        </div>
        );
};
export default Option;