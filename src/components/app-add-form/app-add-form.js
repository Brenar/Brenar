import React from 'react';

import './app-add-form.css'

const AddForm = () => {
    return (
        <div className="addForm">
            <input
                className="add-input"
                type="text"
                placeholder="enter name"
            />
            <input
                className="add-input"
                type="text"
                placeholder="enter description"
            />
            <input
                className="add-input"
                type="text"
                placeholder="add info 1"
            />
            <input
                className="add-input"
                type="text"
                placeholder="add info 2"
            />
            <button
                className="add-btn"
            >Добавить</button>
        </div>
    )
};

export default AddForm;