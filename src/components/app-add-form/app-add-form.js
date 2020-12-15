import React, {useState} from 'react';

import './app-add-form.css'

const AddForm = ({handleAddData}) => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")

    return (
        <div className="addForm">
            <input
                className="add-input"
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                className="add-input"
                type="text"
                placeholder="enter description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                className="add-input"
                type="text"
                placeholder="add info 1"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
            />
            <input
                className="add-input"
                type="text"
                placeholder="add info 2"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            <button
                className="add-btn"
                onClick={() => {
                  handleAddData({name, description, genre, rating})
                }}
            >Добавить</button>
        </div>
    )
};

export default AddForm;