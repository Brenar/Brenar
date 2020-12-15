import React from 'react';

import FilmListItem from '../film-list-item';

import './film-list.css';

const FilmList = ({tableData}) => {

    return (
        <div className="wrapper">
            <table className="table">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>description</th>
                    <th>genre</th>
                    <th>rating</th>
                    <th>check</th>
                </tr>

                {tableData && tableData.length ? tableData.map( film =>
                      <FilmListItem key={film.id} filmData={film}/>) : ''
                }
                </table>
        </div>
    )
};

export default FilmList;