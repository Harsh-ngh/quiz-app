import React from 'react';
import '../styles/App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider }
  from 'react-router-dom';
import Main from './Main';
import Result from './Result';
import Quiz from './Quiz';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element : <Main/>
    },
    {
      path: '/quiz',
      element : <Quiz/>

    },
    {
       path: '/result',
       element : <Result/>
      
    }
  ]
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
