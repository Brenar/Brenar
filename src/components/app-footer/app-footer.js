import React from 'react';
import {connect} from 'react-redux'

import changeTemp from '../../models/currency'

import './app-footer.scss';

const AppFooter = ({changeTemp, onRemoveLines, onChangeLine}) => {

    return (
        <div className="footer">
            <button className="update" onClick={onChangeLine}>Редактировать</button>
            <input 
                className="search"
                onChange={(e) => changeTemp(e.target.value)}
                >
            </input>
            <button className="delete" onClick={onRemoveLines}>Удалить</button>
        </div>
    )
};

export default connect(state => ({
    
  }),
  {changeTemp})(AppFooter);