import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';

const Main = () => {
    const router = createBrowserRouter([
        {path: '/', element:<Header></Header>, 
        children:[
            {path: '/', element:<Home></Home>},
            {path: '/home', element:<Home></Home>},
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