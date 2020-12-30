import React from 'react';

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

export default AppFooter;