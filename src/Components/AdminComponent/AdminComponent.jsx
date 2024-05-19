import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminComponent.css'; // Import the CSS file
import AddNewMovieComponent from '../AddNewMovieComponent/AddNewMovieComponent';
import GetAllMoviesComponent from '../GetAllMoviesComponent/GetAllMoviesComponent';
import MovieSuggestionComponent from '../MovieSuggestionComponent/MovieSuggestionComponent';

const AdminComponent = () => {
    const [activeMenu, setActiveMenu] = useState('/');

    const renderMenuContent = () => {
        switch (activeMenu) {
            case '/':
                return <AddNewMovieComponent/>;
            case 'display':
                return <GetAllMoviesComponent/>;
            case 'suggest':
                return <MovieSuggestionComponent/>;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <h1>Welcome to Admin Dashboard</h1>
            <ul>
                <li>
                    <button onClick={() => setActiveMenu('/')}>Add New Movie</button>
                </li>
                <li>
                    <button onClick={() => setActiveMenu('display')}>Display All Movies</button>
                </li>
                <li>
                    <button onClick={() => setActiveMenu('suggest')}>Suggest Movies</button>
                </li>
            </ul>
            {renderMenuContent()}
        </div>
    );
}

export default AdminComponent;
