
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import BlogPage from './components/BlogPage/BlogPage';
import AboutPage from './components/AboutPage/AboutPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SinglePage from './components/SinglePage/SinglePage';
import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RequireAuth from './hoc/RequireAuth';
import CreatePost from './components/CreatePost/CreatePost';


function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Header />
        <div className='main'> */}
          <Routes>
            <Route path ='/' element={<Header/>} >
              <Route index element={<HomePage/>} />
              <Route path ='/posts' element={<BlogPage/>} />
              <Route path ='/login' element={<LoginPage/>} />
              <Route path ='/about' element={<AboutPage/>} />
              <Route path = '/about-us' element={<Navigate to="/about" />} />
              <Route path ='/*' element={<NotFoundPage/>} />
              <Route path ='/posts/:title' element ={<SinglePage/>} />
              <Route path ='/posts/new' element ={
                <RequireAuth>
                  <CreatePost  />
                </RequireAuth>
              } />
            </Route>
          </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}  

export default App;
