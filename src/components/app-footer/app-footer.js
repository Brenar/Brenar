import React from 'react';
import {connect} from 'react-redux'

import {onRemoveLines, changeTemp, searchFilms} from '../../models/currency'

import './app-footer.scss';

const AppFooter = ({changeTemp, searchFilms, onRemoveLines, onChangeLine}) => {

    return (
        <div className="footer">
            <button className="update" onClick={onChangeLine}>Редактировать</button>
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
    
  }),
  {changeTemp, onRemoveLines, searchFilms})(AppFooter);