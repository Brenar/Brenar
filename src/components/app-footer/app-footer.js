import React, { useEffect } from 'react';
import {connect} from 'react-redux'

import {onRemoveLines, searchFilms, filmListSelector, handleChangeLine} from '../../models/currency'

import './app-footer.scss';

const AppFooter = ({filmList, searchFilms, onRemoveLines, handleChangeLine}) => {

    useEffect(() => {
        searchFilms('')
    }, [filmList, searchFilms])

    return (
        <div className="footer">
            <button className="update" onClick={handleChangeLine}>Редактировать</button>
            <input 
                className="search"
                onChange={(e) => searchFilms(e.target.value)}
                >
            </input>
            <button className="delete" onClick={onRemoveLines}>Удалить</button>
        </div>
    )
};

export default connect(state => ({
    filmList: filmListSelector(state)
  }),
  {onRemoveLines, searchFilms, handleChangeLine})(AppFooter);