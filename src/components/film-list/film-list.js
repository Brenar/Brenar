import React, {useState} from 'react';
import FilmListItem from '../film-list-item';
import './film-list.css';

const FilmList = ({tableData, handleAscending, handleDescending, ...rest}) => {
    const [currentSortField, setCurrentSortField] = useState(null)
    const [currentSortDirection, setCurrentSortDirection] = useState(false)

    // TODO set here useCallback
    const handleSortTable = (field) => () => {
        if(currentSortField === field){
            if(currentSortDirection){
                handleDescending(field)
            } else {
                handleAscending(field)
            }
            setCurrentSortDirection(!currentSortDirection)
        } else {
            setCurrentSortField(field)
            handleDescending(field)
        }
    }

    return (
        <div className="wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={handleSortTable('id')}>id</th>
                        <th onClick={handleSortTable('name')}>name</th>
                        <th onClick={handleSortTable('description')}> description</th>
                        <th onClick={handleSortTable('genre')}>genre</th>
                        <th onClick={handleSortTable('rating')}>rating</th>
                        <th>check</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData.length ? tableData.map( film =>
                          <FilmListItem key={film.id} filmData={film} {...rest}/>) : ''
                    }
                </tbody>
                </table>
        </div>
    )
};

export default FilmList;