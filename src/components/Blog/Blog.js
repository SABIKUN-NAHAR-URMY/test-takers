import React from 'react';

const Blog = () => {
    return (
        <div className='w-[70%] text-justify mx-auto'>
            <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                <h1 className='text-3xl font-semibold'><strong>Question-1:</strong> What is the purpose of a react router?</h1>
                <p className='text-xl'><strong>Answer: </strong> At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route's as it changes, and it also gives you tools to update the location using Link's and the history API.</p>
            </div>
            <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                <h1 className='text-3xl font-semibold'><strong>Question-2:</strong> How does context api works?</h1>
                <p className='text-xl'><strong>Answer: </strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>

            <div className='border-2 border-slate-400 rounded-lg m-4 p-5'>
                <h1 className='text-3xl font-semibold'><strong>Question-3:</strong> What is useRef hook in React??</h1>
                <p className='text-xl'><strong>Answer: </strong>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>

        </div>
    );
};

export default Blog;