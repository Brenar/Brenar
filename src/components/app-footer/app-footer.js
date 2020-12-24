import React from 'react';

import './app-footer.css';

const AppFooter = ({changeTemp, onRemoveLines}) => {

    return (
        <div className="footer">
            <button className="update">Редактировать</button>
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