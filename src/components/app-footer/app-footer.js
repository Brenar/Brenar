import React from 'react';

import './app-footer.css';

const AppFooter = () => {
    return (
        <div className="footer">
            <button className="update">Редактировать</button>
            <button className="search">Найти</button>
            <button className="delete">Удалить</button>
        </div>
    )
};

export default AppFooter;