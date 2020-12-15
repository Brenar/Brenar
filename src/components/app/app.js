import React from 'react';

import AppHeader from '../app-header';
import AddForm from '../app-add-form';
import FilmList from '../film-list';
import AppFooter from '../app-footer';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppHeader/> 
            <div className="add-form">
                <AddForm/>
            </div>
            <FilmList/>
            <AppFooter/>
        </div>
    )
}

export default App;