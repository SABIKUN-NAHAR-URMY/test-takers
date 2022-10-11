import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';

const Main = () => {
    const router = createBrowserRouter([
        {path: '/', element:<Header></Header>, 
        children:[
            {path: '/',
             loader: async() => {
                return fetch('https://openapi.programming-hero.com/api/quiz');
             }, 
             element:<Home></Home>},
             {path: '/quizTopic/:quizId',
             loader: async({params}) => {
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
             }, 
             element:<Quiz></Quiz>},
            {path: 'home', element:<Home></Home>},
            {path: 'topics', element:<Topics></Topics>},
            {path: 'statistics', element:<Statistics></Statistics>},
            {path: 'blog', element:<Blog></Blog>}
        ]}
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Main;