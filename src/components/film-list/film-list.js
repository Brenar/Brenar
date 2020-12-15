import React from 'react';

import FilmListItem from '../film-list-item';

import './film-list.css';

const FilmList = () => {
    return (
        <div className="wrapper">
            <table className="table">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>info 1</th>
                    <th>info 2</th>
                    <th>check</th>
                </tr>
                <FilmListItem/>
                <FilmListItem/>
                <FilmListItem/>
                </table>
        </div>
    )
};

export default FilmList;