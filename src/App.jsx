import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import SignupComponent from './Components/SignupComponent/SignupComponent';
import UserDataComponent from './Components/UserDataComponent/UserDataComponent';
import GetAllMoviesComponent from './Components/GetAllMoviesComponent/GetAllMoviesComponent';
import AddNewMovieComponent from './Components/AddNewMovieComponent/AddNewMovieComponent';
import MovieSuggestionComponent from './Components/MovieSuggestionComponent/MovieSuggestionComponent';
import AdminComponent from './Components/AdminComponent/AdminComponent';

const App = () => {
    return (
        <Router>
            <div className="App" >
                <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                    <div className='container'>
                        <Link className='navbar-brand' to={'/login'}>
                            Saveetha | MERN
                        </Link>
                        <div className='collapse navbar-collapse' id='navbarTogglerDemo2'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/login'}>Login</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/signup'}>Sign Up</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/admin/dashboard'}>Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='auth-wrapper'>
                    <div className='auth-inner'>
                        <Routes>
                            <Route exact path='/' element={<LoginComponent/>} />
                            <Route path='/login' element={<LoginComponent />} />
                            <Route path='/signup' element={<SignupComponent />} />
                            <Route path='/userdata' element={<UserDataComponent/>} />
                            <Route path='/movies' element={<GetAllMoviesComponent/>} />
                            <Route path='/admin/add-movie' element={<AddNewMovieComponent/>} />
                            <Route path='/admin/display-movies' element={<GetAllMoviesComponent/>} />
                            <Route path='/admin/suggest-movie' element={<MovieSuggestionComponent />} />
                            <Route path='/admin/dashboard' element={<AdminComponent/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
