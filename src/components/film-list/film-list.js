import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import FilmListItem from '../film-list-item';

import './film-list.scss';

import {
    filmListSelector,
    handleDescending, 
    handleAscending,
    filmVisibleSelector,
    searchFilms,
    tempSelector
} from '../../models/currency'

const FilmList = ({filmList, temp, visibleFilms, handleAscending, handleDescending, ...rest}) => {
    const [currentSortField, setCurrentSortField] = useState(null)
    const [currentSortDirection, setCurrentSortDirection] = useState(false)

    //TODO set here useCallback
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

    useEffect(() => {
        searchFilms()
        
    }, [])

    return (
        <div className="wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th className="id" onClick={handleSortTable('id')}>id</th>
                        <th onClick={handleSortTable('name')}>name</th>
                        <th onClick={handleSortTable('description')}> description</th>
                        <th onClick={handleSortTable('genre')}>genre</th>
                        <th onClick={handleSortTable('rating')}>rating</th>
                        <th>check</th>
                    </tr>
                </thead>
                <tbody>{visibleFilms && visibleFilms.length ? visibleFilms.map( film => 
                    <FilmListItem key={film.id} filmData={film} {...rest}/>) : null}
                </tbody>
            </table>
        </div>
    )
};


export default connect(state => ({
    filmList: filmListSelector(state), 
    visibleFilms: filmVisibleSelector(state),
    temp: tempSelector(state)
}),
{searchFilms, handleAscending, handleDescending})(FilmList);